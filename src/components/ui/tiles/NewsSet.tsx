import { useRef } from 'react'

import { icons } from '../icons'
import { moveLi } from './util'
import { ITileProps } from './types'

export default function NewsSet({
    type,
    newsSet,
    bgColor,
    color = 'white',
    className,
}: ITileProps<'wide' | 'big'> & {
    newsSet: {
        id: string
        src: string
        figureImgSrc: string
        icon: keyof typeof icons
        title: string
        description: string
    }[]
}) {
    const ul = useRef<HTMLUListElement>(null)
    const endClass = 'top'
    const startClass = 'bottom'

    if (newsSet.length > 1) setInterval(moveLi(ul, endClass, startClass), 15000)

    return (
        <div className={`news-set-${type} ${className}`} style={{ color }}>
            <ul ref={ul}>
                {newsSet.map(
                    (
                        { id, src, figureImgSrc, icon, title, description },
                        i
                    ) => (
                        <li
                            key={id}
                            className={`${i === newsSet.length - 1 ? endClass : ''}`}
                        >
                            <article
                                style={{
                                    backgroundImage: `url(${figureImgSrc})`,
                                }}
                            >
                                <header style={{ backgroundColor: bgColor }}>
                                    <span>{icons[icon]}</span>

                                    <a
                                        href={src}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <em>{title}</em>
                                        <br />
                                        <p>{description}</p>
                                    </a>
                                </header>
                            </article>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}
