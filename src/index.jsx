import './style.css'
import { createRoot } from 'react-dom/client'
import App from './App'
import { useLocation, useRoute } from 'wouter'

function Root() {
    const [, params] = useRoute('/item/:id')
    const [, setLocation] = useLocation()

    return <>
        <App />
        <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }} href='#' onClick={() => setLocation('/')}>
            {params ? '< back' : 'double click to enter portal'}
        </a>
    </>
}

createRoot(document.querySelector('#root')).render(<Root />)