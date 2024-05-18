import Conversations from "./conversations.jsx"
import Logout from "./logout.jsx"
import SearchUser from "./searchUser.jsx"

const Sidebar = () => {
  return (
    <div className="border-r border-black p-4 flex flex-col">
       <SearchUser /> 
       <div className="divider px-1"></div>

       <Conversations />
       <Logout />
    </div>
  )
}

export default Sidebar