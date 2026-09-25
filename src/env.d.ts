/// <reference types="astro/client-image" />

declare namespace App {
  interface Locals {
    prefersMarkdown: boolean
  }
}

declare module 'virtual:public-image-sizes' {
  const sizes: Record<string, [number, number]>
  export default sizes
}
