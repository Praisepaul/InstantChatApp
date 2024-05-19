import {FaSearch} from 'react-icons/fa';
import { useState } from 'react';
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchUser = () => {
  const [search, setSearch] = useState('');
  const {setSelectedConversation} = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;

    if(search.length < 3){
      toast.error('Please enter atleast 3 letters');
    }
    const user = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(user){
      setSelectedConversation(user);
      setSearch('');
    }
    else{
      toast.error('User not found');
    
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type = "text" placeholder="Search..." className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
            <FaSearch />
        </button>
    </form>
  );
};

export default SearchUser;