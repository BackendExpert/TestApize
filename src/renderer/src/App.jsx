import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomPage from './pages/WelcomPage';
import Start from './pages/Start';

function App() {
  const ipcHandle = () => window.Electron.ipcRenderer.send('ping')

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomPage /> } />
        <Route path='/Start' element={<Start /> } /> 
      </Routes>
    </Router>
  )
}

export default App

