import { chunk } from "lodash"
export const GetAllLogos = () => {
  return new Promise((resolve) => {
    try {
      const logos = require.context("./public/logos", false, /\.svg$/)
      resolve(logos.keys().map(key => key.substr(2)))
    } catch (e) {
      resolve([])
    }
  })

}