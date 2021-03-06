

/**
 * 
 * @returns the right url depending on the environemnt
 * @param {*} ext  route extention  example: a.com/ext 
 */
export const rightUrl = (ext) => {

    const url = {
        local: "http://localhost:3000/",
        remote: "https://singap.vercel.app/"
    }

    const envRightUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? url.remote : url.local;

    return `${envRightUrl}${ext}`

}