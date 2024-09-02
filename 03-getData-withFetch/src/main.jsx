import { createRoot } from 'react-dom/client';
import App from './app';
import './main.css'


document.body.innerHTML = '<div id="root"></div>'

const root = createRoot(document.getElementById('root'))
root.render(<App />)