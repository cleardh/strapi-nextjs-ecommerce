export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_MAGIC_PUBLIC_KEY || 'pk_test_654FF5BC0A2E8698'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51IYNXqDPnxnh670xX1p0YF1vAJ4j8tnoHGIFVLU0RUuCB5O4d1zqn8giGtewxT1ivO2wVGLsCfwbxDYjqcfFgZuQ00n6nxhpEd'

/**
 * Given an image return the url
 * Works for local and deployed strapi
 * @param {any} image 
 */
export const fromImageToUrl = image => {
    if (!image) {
        return '/vercel.svg'
    }
    if (image.url.indexOf('/') === 0) {
        return `${API_URL}${image.url}`
    }
    return image.url
}