import Image, { ImageProps } from 'next/image'
import { useMemo } from 'react'

interface ScaledImageProps extends ImageProps {
  height?: number
  width?: number
  naturalWidth: number
  naturalHeight: number
  alt: string
}

export function ScaledImage({
  width,
  height,
  naturalHeight,
  naturalWidth,
  ...props
}: ScaledImageProps) {
  const { newHeight, newWidth } = useMemo(() => {
    if (height && width) {
      if ((naturalWidth * height) / naturalHeight > width) {
        return {
          newHeight: (naturalHeight * width) / naturalWidth,
          newWidth: width,
        }
      } else {
        return {
          newHeight: height,
          newWidth: (naturalWidth * height) / naturalHeight,
        }
      }
    } else if (height) {
      return {
        newHeight: height,
        newWidth: (naturalWidth * height) / naturalHeight,
      }
    } else if (width) {
      return {
        newHeight: (naturalHeight * width) / naturalWidth,
        newWidth: width,
      }
    }
    throw new Error('One of `height` or `width` should be provided')
  }, [height, naturalHeight, naturalWidth, width])

  return <Image width={newWidth} height={newHeight} {...props} />
}
