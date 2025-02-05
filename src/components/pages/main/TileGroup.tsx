import React from 'react'

export default function TileGroup({
    head,
    className,
    children,
}: {
    head: string
    className: string
    children: React.ReactNode[]
}) {
    return (
        <section className={`${className} tile-group`}>
            <h3>{head}</h3>
            <div className="tiles">{children}</div>
        </section>
    )
}
