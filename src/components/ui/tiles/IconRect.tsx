import { icons } from '../icons'
import { ITileProps } from './types'

export default function IconRect({
    type,
    icon,
    label,
    color = 'white',
    bgColor,
    className,
    href,
}: ITileProps & {
    icon: keyof typeof icons
    label: string
    href?: string
}) {
    return (
        <div
            className={`icon-rect-${type} ${className}`}
            style={{ backgroundColor: bgColor, color }}
            title={label}
        >
            {href == null ? (
                <figure>{icons[icon]}</figure>
            ) : (
                <a
                    aria-label={`${icon} Link`}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {icons[icon]}
                </a>
            )}
            {type !== 'badge' && <figcaption>{label}</figcaption>}
        </div>
    )
}
