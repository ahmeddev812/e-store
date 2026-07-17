interface CloudinaryConfig {
  cloudName: string
  uploadPreset?: string
}

const cloudinaryConfig: CloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
  uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
}

export function getCloudinaryUrl(publicId: string, options?: {
  width?: number
  height?: number
  quality?: number
  format?: string
}): string {
  const { cloudName } = cloudinaryConfig
  if (!cloudName) return publicId

  const { width, height, quality = 80, format = "auto" } = options || {}

  let transformations = `q_${quality},f_${format}`
  if (width && height) {
    transformations = `c_fill,w_${width},h_${height},${transformations}`
  } else if (width) {
    transformations = `w_${width},${transformations}`
  } else if (height) {
    transformations = `h_${height},${transformations}`
  }

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`
}

export function getCloudinaryImageProps(src: string, {
  width = 600,
  height = 600,
}: {
  width?: number
  height?: number
} = {}) {
  // If the URL is already a Cloudinary URL or external URL, return as-is
  if (!src.includes("res.cloudinary.com")) {
    return { src, width, height }
  }

  // Extract public ID from Cloudinary URL
  const parts = src.split("/")
  const publicId = parts[parts.length - 1]

  return {
    src: getCloudinaryUrl(publicId, { width, height }),
    width,
    height,
    blurDataURL: getCloudinaryUrl(publicId, { width: 10, quality: 20 }),
  }
}

export { cloudinaryConfig }
