import { useState } from 'react'
import './App.css'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage'

function App() {

  const [page, setPage] = useState(0);

  const handlePage = (index: number) => {
    console.log(index);
    setPage(index);
  }

  const styles = {
    'main': 'flex justify-center',
    'navbarText': 'text-md hover:text-blue-600 cursor-pointer'
  }

  return (
    <div className={styles.main}>
      <div className='w-full p-4 fixed flex justify-center shadow-md '>
        <div className='w-full max-w-7xl min-w-max flex items-center justify-between '>
          <div className='text-3xl'>Navbar</div>
          <div className='flex'>
            <p onClick={()=>handlePage(0)} className={styles.navbarText}>Home</p>
            <p onClick={()=>handlePage(1)} className={styles.navbarText}>Form</p>
          </div>
        </div>
      </div>
      <div className='mt-44'>
     {page === 0 && <p>HomePage</p>}
     {page === 1 && <UserProfilePage/>}
      </div>
    </div>

  )
}

export default App
