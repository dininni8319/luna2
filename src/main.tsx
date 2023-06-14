import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@/router.tsx'
import { ThemeProvider } from 'styled-components'
import { globalStyle as GlobalStyle, Theme } from './style/globalStyle'
import { Provider } from 'react-redux'
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <Router />
                <GlobalStyle />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
)
