import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') || 'Aron Jones'

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
            background: 'linear-gradient(to bottom, #18181B, #27272A)',
            padding: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '16px',
              boxShadow: '0 4px 30px rgba(147, 51, 234, 0.3)',
              width: '100%',
              height: '100%',
              padding: '40px',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                color: 'white',
                textAlign: 'center',
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '30px',
                color: '#A78BFA',
                textAlign: 'center',
              }}
            >
              Aron Jones
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.error(e)
    return new Response('Failed to generate OG image', { status: 500 })
  }
}