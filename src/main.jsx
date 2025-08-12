import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import cartStore from "../src/redux/Store/Store.js"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={cartStore}>
    <App />
  </Provider>
  </BrowserRouter>,
)
