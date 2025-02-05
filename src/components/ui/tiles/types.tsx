import { ITileSizes } from '../../../types/index.d'

export interface ITileProps<T = ITileSizes> {
    type: Extract<ITileSizes, T>
    bgColor: string
    color?: string
    className?: string
}
