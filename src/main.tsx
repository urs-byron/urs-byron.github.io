import ReactDOM from 'react-dom/client'

import { App } from './app'

window.onload = () => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        // <React.StrictMode>
        <App />
        // </React.StrictMode>
    )
}
