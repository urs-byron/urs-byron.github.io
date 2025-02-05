import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

import { icons } from '../ui/icons'

export function MainLayout() {
    return (
        <div className="main-layout">
            <main className="main-component">
                <Suspense
                    fallback={
                        <div className="main-component-loader">
                            {icons.SpinLoader}
                            <p>Almost there ...</p>
                        </div>
                    }
                >
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}
