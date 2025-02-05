import { RefObject } from 'react'

export const moveLi =
    (ul: RefObject<HTMLUListElement>, endClass: string, startClass: string) =>
    () => {
        const startLi = ul.current?.querySelector(
            `.${endClass}`
        ) as HTMLLIElement
        const endLi = ul.current?.querySelector(
            `.${startClass}`
        ) as HTMLLIElement

        if (startLi != null) {
            startLi?.classList.add('move-up')

            setTimeout(() => {
                startLi?.classList.remove(endClass)

                if (
                    startLi?.previousElementSibling?.previousElementSibling !=
                    null
                )
                    startLi?.previousElementSibling?.classList.add(endClass)
                else {
                    startLi?.classList.add(startClass)
                }
            }, 1000)
        } else if (endLi != null) {
            endLi?.classList.add('move-down')

            setTimeout(() => {
                endLi?.classList.remove(startClass)

                if (endLi?.nextElementSibling != null)
                    endLi?.nextElementSibling?.classList.add(startClass)
                else {
                    endLi?.classList.add(endClass)

                    ul.current?.childNodes.forEach((e) =>
                        (e as HTMLLIElement).classList.remove(
                            'move-up',
                            'move-down'
                        )
                    )
                }
            }, 1000)
        }
    }
