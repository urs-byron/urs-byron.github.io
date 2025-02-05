import { useEffect, useRef } from 'react'

export function PixelFadeLoader() {
    const tableElem = useRef<HTMLTableElement>(null)
    const container = useRef<HTMLTableSectionElement>(null)

    const setTable = () => {
        const doc = document.documentElement
        const cols = Math.ceil(doc.clientWidth / 58.5)
        let rows = Math.ceil(doc.clientHeight / 58.5)
        let tr
        let td
        let colTemp

        while (rows > 0) {
            tr = document.createElement('tr')

            colTemp = cols
            while (colTemp > 0) {
                td = document.createElement('td')
                td.setAttribute(
                    'loader_pixel',
                    `${Math.floor(Math.random() * 3)}`
                )
                tr.appendChild(td)

                colTemp -= 1
            }
            container.current?.appendChild(tr)

            rows -= 1
        }
    }

    useEffect(() => {
        setTable()
        setTimeout(() => {
            const t = tableElem.current!
            t.parentNode!.removeChild(t)
        }, 1500)
    }, [])

    return (
        <table ref={tableElem} className="pixel_fade_loader">
            <tbody ref={container} />
        </table>
    )
}
