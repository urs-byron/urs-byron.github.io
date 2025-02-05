import { useRef } from 'react'

import { moveLi } from './util'
import { ITileProps } from './types'

export default function ImageSet({
    type,
    imageSet,
    color = 'white',
    className,
    bgSize = 'cover',
}: Omit<ITileProps<'wide' | 'big'>, 'bgColor'> & {
    bgSize?: 'contain' | 'cover'
    imageSet: { id: string; url: string; description?: string }[]
}) {
    const ul = useRef<HTMLUListElement>(null)
    const endClass = 'top'
    const startClass = 'bottom'

    if (imageSet.length > 1)
        setInterval(moveLi(ul, endClass, startClass), 15000)

    return (
        <div className={`image-set-${type} ${className}`} style={{ color }}>
            <ul ref={ul}>
                {imageSet.map(({ id, url, description }, i) => (
                    <li
                        className={`${i === imageSet.length - 1 ? endClass : ''}`}
                        key={id}
                        title={description}
                        style={{
                            backgroundImage: `url(${url})`,
                            backgroundSize: bgSize,
                        }}
                    >
                        <p>{description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
