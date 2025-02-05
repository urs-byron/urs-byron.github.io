// METRO UI COLORS
// http://www.creepyed.com/2012/09/01/windows-8-colors-hex-code/

import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowDown,
    faArrowLeft,
    faArrowRight,
    faArrowUp,
} from '@fortawesome/free-solid-svg-icons'

import AboutTiles from './About'
import ExperienceTiles from './Experience'
import ProjectTiles from './Projects'
import TechStackTiles from './TechStack'

// https://imgbb.com/

// NXT
// https://ibb.co/jk18KMz5
// https://ibb.co/1fc8vb5K
// https://ibb.co/cKSny8YY

// HCP
// https://ibb.co/spxxTsqZ

export default function Main() {
    const [atXEnd, setAtXEnd] = useState(false)
    const [atYEnd, setAtYEnd] = useState(false)

    const container = useRef<HTMLDivElement>(null)
    const child = useRef<HTMLDivElement>(null)

    function buttonMoveXHandler() {
        const { scrollLeft } = container.current!

        if (scrollLeft === 0) setAtXEnd(false)
        else if (
            scrollLeft + container.current!.getBoundingClientRect().width >=
            child.current!.getBoundingClientRect().width
        )
            setAtXEnd(true)
    }

    function buttonMoveYHandler() {
        const { scrollTop } = container.current!

        if (scrollTop === 0) setAtYEnd(false)
        else if (
            scrollTop + container.current!.getBoundingClientRect().height >=
            child.current!.getBoundingClientRect().height
        )
            setAtYEnd(true)
    }

    return (
        <>
            <div
                ref={container}
                className="tile-groups-container"
                onScroll={() => {
                    buttonMoveXHandler()
                    buttonMoveYHandler()
                }}
            >
                <div ref={child} className="tile-groups">
                    <AboutTiles />
                    <TechStackTiles />
                    <ExperienceTiles />
                    <ProjectTiles />
                </div>
            </div>
            <button
                aria-label="Container X Mover button"
                className="tile-groups-container-mover mover-x"
                type="button"
                onClick={() => {
                    container.current!.scrollLeft += atXEnd ? -100 : 100
                    buttonMoveXHandler()
                }}
                title={`Move ${atXEnd ? 'left' : 'right'}`}
            >
                <FontAwesomeIcon icon={atXEnd ? faArrowLeft : faArrowRight} />
            </button>
            <button
                aria-label="Container Mover button"
                className="tile-groups-container-mover mover-y"
                type="button"
                onClick={() => {
                    container.current!.scrollTop += atYEnd ? -100 : 100
                    buttonMoveYHandler()
                }}
                title={`Move ${!atYEnd ? 'down' : 'up'}`}
            >
                <FontAwesomeIcon icon={!atYEnd ? faArrowDown : faArrowUp} />
            </button>
        </>
    )
}
