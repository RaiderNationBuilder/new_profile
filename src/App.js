// import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Layout from './components/Layout'
// import './App.scss'

function App() {
  return (
    <div>
      <Sidebar />
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes> */}
    </div>
  )
}
export default App;
