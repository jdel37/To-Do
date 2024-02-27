import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <form action="" className='flex content-center'>
      <input type="text" className=' content-center w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
      <button className='content-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>submit</button>
     </form>
     
  )
}

export default App
