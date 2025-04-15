import './App.css'
import Home from './components/HomePage/Home'
import Navbar from './components/Navbar/Navbar'

function App() {
    return (
        <>
            <div className='bg-black'>
                <Navbar/>
                <Home/>
            </div>
        </>
    )
}

export default App
