import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomPage from './pages/WelcomPage';
import Start from './pages/Start';
import DashBoard from './pages/DashBoard';
import HomeDash from './components/HomeDash';
import Settings from './pages/Settings';

function App() {
  const ipcHandle = () => window.Electron.ipcRenderer.send('ping')

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomPage /> } />
        <Route path='/Start' element={<Start /> } /> 
        <Route path='/Dashboard' element={<DashBoard /> }>
          <Route path='Home' element={<HomeDash /> } />
          <Route path='Settings' element={<Settings /> } />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

