/* eslint-disable react/no-typos */
import 'react'

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}

export interface IMainHeading {
    content: string
    className?: string
}

export type ITileSizes = 'badge' | 'full' | 'wide' | 'big'
