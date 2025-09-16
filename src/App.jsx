import { Link } from 'react-router'
import './App.css'
import Topper from './components/Topper'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='flex flex-wrap w-full justify-center'>
        <Topper />
        <h1 className='antialiased font-semibold text-4xl ml-10 mt-16
        flex'
        >Please select a tool you want to use</h1>
      </div>
      <div className='grid grid-cols-4 h-9/10'>
        <div>
          <Navbar />
        </div>
        <div className='col-span-3 h-full flex bg-bg shadow-xl mt-30 mr-auto justify-center content-center'>
          <p className='text-gray-300 font-bold text-8xl'>Your tool will appear here</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
