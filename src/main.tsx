import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@/router.tsx'
import { ThemeProvider } from 'styled-components'
import { globalStyle as GlobalStyle, Theme } from './style/globalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <Router />
            <GlobalStyle />
        </ThemeProvider>
    </React.StrictMode>
)
