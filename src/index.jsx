import './style.css'
import { createRoot } from 'react-dom/client'
import App from './App'

function Root() {
    return <App />
}

createRoot(document.querySelector('#root')).render(<Root />)