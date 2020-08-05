import React from 'react'
import NotFoundPage from './HomeModule/Pages/NotFoundPage/NotFoundPage';


const routes = [
    {
        path: '/news',
        exact: false,
        main: () => <NotFoundPage />

    },
]
export default routes