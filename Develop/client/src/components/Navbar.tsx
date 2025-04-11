import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [ loginCheck, setLoginCheck ] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setLoginCheck(auth.loggedIn());
  }, [location]);

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Krazy Kanban Board</Link>
      </div>
      <ul>
      {loginCheck ? (
        <>
          <li className='nav-item'>
            <Link to='/new-ticket'>New Ticket</Link>
          </li>
          <li className='nav-item'>
            <button 
              type='button'  
              onClick={() => {
                auth.logout();
              }}
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <li className='nav-item'>
          <Link to='/login'>Login</Link>
        </li>
      )}
    </ul>
  </div>
  );
};

export default Navbar;
