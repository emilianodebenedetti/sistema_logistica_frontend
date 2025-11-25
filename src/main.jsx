import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'flowbite';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';
import AppFooter from './components/AppFooter.jsx';
import AppNavbar from './components/AppNavbar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
)
