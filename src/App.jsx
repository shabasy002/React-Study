import { useState } from 'react'
import UsestatePage from './pages/UseStatePage';
import UseEffectPage from './pages/UseEffectPage';
import Counter from './pages/ClassComponent';
import UseRefPage from './pages/UseRefPage';
import UseMemoPage from './pages/UseMemoPage';
import ProductList from './pages/ProductListing';
import withAuth from './HigherOrder/WithAuth';
import { ProtectedDashboard } from './pages/UseMemoPage';
import { WrappedClickCounter } from './component/ClickCounter';
import ProductDetail from './pages/ProductDetail';
import {WithHoverCounter} from './component/HoverCounter'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ParentComponent from './component/LifingState';
import HoverCounter from './component/HoverCounter';

import LiftStatePage from './pages/LiftStatePage';
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
                    <li className="nav-item">
                        <Link to="/LiftStatePage">Lifting State</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ProductList" replace = {true}>Product Listing</Link>
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
                    <Route path="/ProductList" element={<ProductList />} />
                    <Route path="/productDetail/:id" element={<ProductDetail />} />
                    <Route path="/LiftStatePage" element={<LiftStatePage />} />
                </Routes>
            </div>
        </Router>
      <h1>Vite + React</h1>
    <WrappedClickCounter />
    <WithHoverCounter />
    </>
  )
}

export default App
