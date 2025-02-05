import { IMainHeading } from '../../../types/index.d'

export function MainH2({ content, className }: IMainHeading) {
    return <h2 className={`main-heading-2 ${className}`}>{content}</h2>
}
