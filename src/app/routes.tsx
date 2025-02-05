import { useMemo } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '../components/layout/Main'

export const createAppRouter = () =>
    createBrowserRouter(
        [
            {
                path: '/',
                element: <MainLayout />,
                children: [
                    {
                        path: '/',
                        lazy: async () => {
                            const { LandingRoute } = await import(
                                './router/Landing'
                            )

                            return { Component: LandingRoute }
                        },
                    },
                    {
                        path: '*',
                        lazy: async () => {
                            const { LandingRoute } = await import(
                                './router/Landing'
                            )

                            return { Component: LandingRoute }
                        },
                    },
                ],
            },
        ],
        {
            basename: '/',
        }
    )

export function AppRouter() {
    const router = useMemo(() => createAppRouter(), [])

    return <RouterProvider router={router} />
}
