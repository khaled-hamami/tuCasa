import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import { lightTheme, darkTheme } from './components/navbar/Navbar.jsx'
import { ThemeProvider } from '@mui/material'
import './styles/App.css'
import Rentals from './pages/Rentals'
import Login from './pages/Login'
import About from './pages/About'
import Error from './pages/Error'

function App() {
   const [theme, setTheme] = useState(darkTheme)

   return (
      <ThemeProvider theme={theme}>
         <Router>
            <Navbar theme={theme} setTheme={setTheme} />
            <Routes>
               <Route path="/" Component={Home} />
               <Route path="/rentals" Component={Rentals} />
               <Route path="/login" Component={Login} />
               <Route path="/about" Component={About} />
               <Route path="/*" Component={Error} />
            </Routes>
         </Router>
      </ThemeProvider>
   )
}

export default App
