import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { DeleteUser } from '../services/DeleteUser'
import { useGetData } from '../services/GetUser';

interface userListProps {
    triggerFunc: () => void,
    triggerValue: boolean
}


const UserList: React.FC<userListProps> = ({ triggerFunc, triggerValue }) => {

    console.log(triggerValue);  


    const user = useGetData(triggerValue);

    
    return (
        <div className='user-list mr-8'>
            <p className='text-md mb-4 font-semibold '>User List</p>
            {user.map((e: any, i) => (
                <div className='flex flex-row justify-between w-full items-center pt-2' key={`${e.id}-${i}`}>
                    <div className='flex mr-4'>
                        <p>{`${e.first_name} ${e.last_name}`}</p>
                    </div>
                    <div onClick={() => DeleteUser({ id: e.id, trigger: triggerFunc })} className='p-2 hover:text-red-400 duration-500 cursor-pointer'>
                        <AiFillDelete />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default UserList;