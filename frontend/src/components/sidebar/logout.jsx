import {BiLogOut} from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';
const Logout = () => {

  const {logOut}= useLogout();

  return (
    <div className="mt-auto">
      <BiLogOut className='w-6 h-6 text-white cursor-pointer' 
      onClick={logOut}
      />
    </div>
  )
}

export default Logout