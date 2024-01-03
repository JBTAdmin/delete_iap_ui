import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import router from "./config/routes.tsx";
import {RouterProvider,} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>

        {/*<CssBaseline/>*/}
        {/*<App/>*/}
        <RouterProvider router={router}/>

    </React.StrictMode>,
)
