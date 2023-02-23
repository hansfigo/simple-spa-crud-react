import { useState } from 'react'
import '../../App.css'
import UserList from './components/UserList'
import { useGetData } from './services/GetUser'
import UserForm from './components/UserForm';

const UserProfilePage = () => {

    const [trigger, setTrigger] = useState(false);

    console.log(trigger);

    const triggerGet = () => {
        !trigger ? setTrigger(true) : setTrigger(false);

    }
    return (
        <div className='content'>
            <UserList triggerFunc={triggerGet} triggerValue={trigger} />
            <UserForm trigger={triggerGet} />
        </div>
    )
}

export default UserProfilePage;