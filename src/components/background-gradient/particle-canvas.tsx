'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  dx: number
  dy: number
  size: number
  alpha: number
}

interface ParticleCanvasProps {
  className?: string
  // Particle appearance
  particleDensity?: number // particles per 100x100 pixel area
  minSize?: number
  maxSize?: number
  minOpacity?: number
  maxOpacity?: number
  color?: string

  // Motion
  minSpeed?: number
  maxSpeed?: number
  bounce?: boolean
  wrap?: boolean

  // Optional effects
  drift?: number
  wobble?: number
  gravityStrength?: number
  gravitationRadius?: number

  // Connection lines between particles
  drawConnections?: boolean
  connectionDistance?: number
  connectionOpacity?: number

  // Performance
  fpsLimit?: number
}

const defaultProps = {
  particleDensity: 2, // 0.5 particles per 100x100 pixels
  minSize: 1,
  maxSize: 2,
  minOpacity: 0.5,
  maxOpacity: 1,
  color: '#fde68a',
  minSpeed: 0.05,
  maxSpeed: 0.15,
  bounce: false,
  wrap: true,
  drift: 0,
  wobble: 0.02,
  gravityStrength: 0.00005,
  gravitationRadius: 150,
  drawConnections: true,
  connectionDistance: 150,
  connectionOpacity: 0.2,
  fpsLimit: 60,
}

export function ParticleCanvas({ className, ...props }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = { ...defaultProps, ...props }
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      const devicePixelRatio = window.devicePixelRatio || 1

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio

      ctx.scale(devicePixelRatio, devicePixelRatio)

      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      initializeParticles()
    }

    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(container)

    const particles: Particle[] = []

    function initializeParticles() {
      particles.length = 0
      if (!container) return
      const rect = container.getBoundingClientRect()

      // Calculate particle count based on container area
      const area = rect.width * rect.height
      const particleCount = Math.round((area / 10000) * options.particleDensity)

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * (options.maxSpeed - options.minSpeed) + options.minSpeed

        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed,
          size: Math.random() * (options.maxSize - options.minSize) + options.minSize,
          alpha: Math.random() * (options.maxOpacity - options.minOpacity) + options.minOpacity,
        })
      }
    }

    let lastDrawTime = 0
    let lastTime = 0
    const frameInterval = 1000 / options.fpsLimit

    function animate(currentTime: number) {
      if (currentTime - lastDrawTime < frameInterval) {
        requestAnimationFrame(animate)
        return
      }
      lastDrawTime = currentTime

      const delta = (currentTime - lastTime) / 1000
      lastTime = currentTime

      if (!ctx || !canvas || !container) return

      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      if (options.drawConnections) {
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i]
          for (const otherParticle of particles.slice(i + 1)) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < options.connectionDistance) {
              const opacity =
                (1 - distance / options.connectionDistance) * options.connectionOpacity
              ctx.beginPath()
              ctx.strokeStyle = `${options.color.slice(0, 7)}${Math.floor(opacity * 255)
                .toString(16)
                .padStart(2, '0')}`
              ctx.lineWidth = 1
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        }
      }

      for (const particle of particles) {
        let deltaX = particle.dx
        let deltaY = particle.dy

        if (options.gravityStrength && options.gravityStrength > 0) {
          let gravityX = 0
          let gravityY = 0

          for (const other of particles) {
            if (particle === other) continue

            const dx = other.x - particle.x
            const dy = other.y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < options.gravitationRadius && distance > 0) {
              const force = options.gravityStrength / Math.max(distance * distance, 16)
              gravityX += dx * force
              gravityY += dy * force
            }
          }

          deltaX += gravityX * 0.1
          deltaY += gravityY * 0.1
        }

        if (options.wobble) {
          deltaX += (Math.random() - 0.5) * options.wobble * delta
          deltaY += (Math.random() - 0.5) * options.wobble * delta
        }

        deltaY += options.drift * delta

        particle.dx = deltaX
        particle.dy = deltaY

        const speed = Math.sqrt(particle.dx * particle.dx + particle.dy * particle.dy)
        const maxSpeed = options.maxSpeed * 3
        if (speed > maxSpeed) {
          particle.dx = (particle.dx / speed) * maxSpeed
          particle.dy = (particle.dy / speed) * maxSpeed
        }

        particle.x += particle.dx * delta * 60
        particle.y += particle.dy * delta * 60

        if (options.bounce) {
          if (particle.x < 0 || particle.x > rect.width) particle.dx *= -1
          if (particle.y < 0 || particle.y > rect.height) particle.dy *= -1
        } else if (options.wrap) {
          if (particle.x < 0) particle.x = rect.width
          if (particle.x > rect.width) particle.x = 0
          if (particle.y < 0) particle.y = rect.height
          if (particle.y > rect.height) particle.y = 0
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${options.color.slice(0, 7)}${Math.floor(particle.alpha * 255)
          .toString(16)
          .padStart(2, '0')}`
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      resizeObserver.disconnect()
    }
  }, [props])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
