import { useState } from 'react'
import './App.css'
import { CSSTransition } from 'react-transition-group';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage'

function App() {

  const [page, setPage] = useState(0);
  const [isTransition, setTransition] = useState(false);

  const handlePage = (index: number) => {
    setTransition(true);
    setTimeout(() => {
      setPage(index);
    },300)
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
            <p onClick={() => handlePage(0)} className={styles.navbarText}>Home</p>
            <p onClick={() => handlePage(1)} className={styles.navbarText}>Form</p>
          </div>
        </div>
      </div>
      <div className='mt-44'>
        <CSSTransition
          in={page === 0}
          classNames="fade"
          timeout={300}
        >
          <div className='fade'>
            {page === 0 && <p>HomePage</p>}
          </div>
        </CSSTransition>
        <CSSTransition
          in={page === 1}
          classNames="fade"
          timeout={300}
        >
          <div className='fade'>
            {page === 1 && <UserProfilePage/>}
          </div>
        </CSSTransition>
      </div>
    </div>

  )
}

export default App
