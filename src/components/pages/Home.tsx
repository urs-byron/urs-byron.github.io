import { lazy } from 'react'

const Header = lazy(() => import('./Header'))
const Main = lazy(() => import('./main'))

export default function Home() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}
