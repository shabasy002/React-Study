import { useState } from 'react'
import UsestatePage from './pages/UseStatePage';
import UseEffectPage from './pages/UseEffectPage';
import Counter from './pages/ClassComponent';
import UseRefPage from './pages/UseRefPage';
import UseMemoPage from './pages/UseMemoPage';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Usestate">Usestate</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Useeffect">Useeffect</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Counter">Class Component</Link>
                    </li>
                     <li className="nav-item">
                        <Link to="/Useref">UseRefPage</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/UseMemo">UseMemoPage</Link>
                    </li>
                    
                </ul>
            </nav>

            <div className="content">
                <Routes>
                    <Route path="/" element={'/'} />
                    <Route path="/Usestate" element={<UsestatePage />} />
                    <Route path="/Useeffect" element={<UseEffectPage />} />
                    <Route path="/Counter" element={<Counter />} />
                    <Route path="/UseRef" element={<UseRefPage />} />
                    <Route path="/UseMemo" element={<UseMemoPage />} />
                </Routes>
            </div>
        </Router>
      <h1>Vite + React</h1>
    
    </>
  )
}

export default App
