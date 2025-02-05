import React from 'react'
import { icons } from '../icons'
import { ITileProps } from './types'

export default function Information({
    type,
    icon,
    info,
    bgColor,
    color = 'white',
    className,
}: ITileProps<'wide' | 'big'> & {
    icon: keyof typeof icons
    info: ([string, 'mark' | 'p', string] | [string, 'br', null])[]
}) {
    return (
        <div
            className={`information-${type} ${className}`}
            style={{ backgroundColor: bgColor, color }}
        >
            <section>
                {info.map((i) =>
                    React.createElement(i[1], { key: i[0] }, i[2])
                )}
            </section>

            {icons[icon]}
        </div>
    )
}
