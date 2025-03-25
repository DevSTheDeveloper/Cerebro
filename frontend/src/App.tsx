import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './styles/theme'
import LaunchPage from './pages/LaunchPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LaunchPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App 