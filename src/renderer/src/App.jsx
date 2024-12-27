import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WelcomPage from './pages/WelcomPage';
import Start from './pages/Start';
import DashBoard from './pages/DashBoard';
import HomeDash from './pages/HomeDash';
import Settings from './pages/Settings';
import Collection from './pages/Collection';

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
          <Route path='Collection' element={<Collection /> } />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

