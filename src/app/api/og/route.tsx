import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title')

    // Define gradient colors similar to BackgroundGradient component
    const bgBase = '#2e1065' // violet.950
    const gradientStart = '#4c1d95' // violet.900
    const gradientMiddle = '#6d28d9' // violet.700
    const gradientEnd = '#4338ca' // indigo.700
    const blobColor1 = 'rgba(124, 58, 237, 0.5)' // violet.600 with opacity
    const blobColor2 = 'rgba(99, 102, 241, 0.4)' // indigo.500 with opacity
    const textColor = '#ffffff'
    const subtitleColor = '#c4b5fd' // violet.300

    // Create a wider but less tall image for better social preview
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: bgBase,
            backgroundImage: `
              radial-gradient(circle at 25% 25%, ${blobColor1} 0%, transparent 40%),
              radial-gradient(circle at 75% 75%, ${blobColor2} 0%, transparent 40%),
              linear-gradient(to bottom right, ${gradientStart}, ${gradientMiddle}, ${gradientEnd})
            `,
            backgroundBlendMode: 'overlay',
            padding: '0 60px', // Remove vertical padding entirely
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Add some decorative blurred blobs */}
          <div
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '100%',
              filter: 'blur(150px)',
              opacity: '0.6',
              background: blobColor1,
              top: '-80px',
              left: '-150px',
              zIndex: '1',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              borderRadius: '100%',
              filter: 'blur(150px)',
              opacity: '0.5',
              background: blobColor2,
              bottom: '-60px',
              right: '-100px',
              zIndex: '1',
            }}
          />

          {/* Content with higher z-index */}
          <div
            style={{
              position: 'relative',
              zIndex: '10',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <h1
              style={{
                fontSize: '68px',
                color: textColor,
                textAlign: 'center',
                marginBottom: '16px', // Reduced margin
                fontWeight: 'bold',
                maxWidth: '90%',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                lineHeight: '1.1', // Tighter line height
              }}
            >
              {title ?? 'Aron Jones'}
            </h1>
            {title ? (
              <p
                style={{
                  fontSize: '30px',
                  color: subtitleColor,
                  textAlign: 'center',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                Aron Jones
              </p>
            ) : null}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 400,
      },
    )
  } catch (e) {
    console.error(e)
    return new Response('Failed to generate OG image', { status: 500 })
  }
}
