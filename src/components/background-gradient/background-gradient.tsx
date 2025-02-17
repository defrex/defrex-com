import { ParticleCanvas } from '@/components/background-gradient/particle-canvas'
import { cn } from '@/lib/utils/cn'
import type { ReactNode } from 'react'
import styles from './background-gradient.module.css'

interface BackgroundGradientProps {
  children?: ReactNode
  className?: string
}

export function BackgroundGradient({ children, className }: BackgroundGradientProps) {
  return (
    <div className={cn(styles.backgroundGradient, 'min-w-screen', 'min-h-screen', className)}>
      <div className={styles.baseGradient} />

      <div className="absolute inset-0">
        <ParticleCanvas className="h-full w-full" />
      </div>

      <div className={cn(styles.gradientLayer, styles.floatAnimation)}>
        <div className={cn(styles.gradientBlob, styles.gradientBlob1)} />
        <div className={cn(styles.gradientBlob, styles.gradientBlob2)} />
      </div>

      <div className={cn(styles.gradientLayer, styles.floatReverseAnimation)}>
        <div className={cn(styles.gradientBlob, styles.gradientBlob3)} />
        <div className={cn(styles.gradientBlob, styles.gradientBlob4)} />
      </div>

      <div className={cn(styles.radialGradient, styles.pulseAnimation)} />
      <div className={cn(styles.meshGradient, styles.meshAnimation)} />

      <div className={cn(styles.gradientLayer, styles.fastFloat)}>
        <div className={cn(styles.smallBlob, styles.smallBlob1)} />
        <div className={cn(styles.smallBlob, styles.smallBlob2)} />
      </div>

      <div className={cn(styles.content, 'min-h-full', 'min-w-full')}>{children}</div>
    </div>
  )
}
