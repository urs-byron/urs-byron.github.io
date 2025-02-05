import { IMainHeading } from '../../../types/index.d'

export function MainH3({ content, className }: IMainHeading) {
    return <h3 className={`main-heading-3 ${className}`}>{content}</h3>
}
