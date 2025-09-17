import { Link } from 'react-router'
import './App.css'
import Topper from './components/Topper'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='h-screen w-screen'>
      <Topper />
      <div className='grid grid-cols-4 h-9/10'>
          <Navbar />
        <div className='
        col-span-3 h-3/4 w-4/5 flex bg-bg shadow-xl
        mt-30 mr-auto justify-center content-center
        '>
          <div className='flex flex-col gap-6 justify-center items-center'>
            <p className='text-center text-gray-300 font-bold text-8xl'>Your tool will appear here</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
