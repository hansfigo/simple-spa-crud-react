import { useState } from 'react'
import { usePostUser } from '../services/PostUser';

interface UserFormProps {
    trigger: () => void;
  }

const UserProfile : React.FC<UserFormProps> = ({trigger})=> {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [listUser, setList] = useState<{ first_name: string, last_name: string }[]>([]);

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const userData = { 'first_name': firstName, 'last_name': lastName };

        await usePostUser(userData);

        setList((prev) => [...prev, userData]);


        trigger();

        console.log(userData)

        setLastName('');
        setFirstName('');
    }


    return (
        <form onSubmit={submit} className='flex flex-col p-4 justify-start max-h-56 items-start bg-slate-100 rounded-lg shadow-md'>
            <p className='text-xs'>First Name</p>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='border-[1px] text-xs p-2 rounded-md border-slate-400 mt-2'></input>
            <p className='text-xs mt-4'>Last Name</p>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='border-[1px] text-xs p-2 rounded-md border-slate-400 mt-2'></input>
            <div className='w-full flex justify-center '>
                <button className='bg-blue-600 text-white mt-4 text-xs'>add Data</button>
            </div>
        </form>
    )
}

export default UserProfile;