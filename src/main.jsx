import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
import { ThemeContextProvider } from './context/themeContext.jsx'
=======
import { ThemeContextProvider } from './context/themeContext.jsx';
>>>>>>> 32d77f7c823ec37ea4b7b234360e60b68bdccf83

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
<<<<<<< HEAD
      <App />
    </ThemeContextProvider>
  </StrictMode>,
)
=======
    <App />
    </ThemeContextProvider>
  </StrictMode>
); 
>>>>>>> 32d77f7c823ec37ea4b7b234360e60b68bdccf83
