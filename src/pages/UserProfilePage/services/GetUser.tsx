import { useEffect, useState } from "react";

export const useGetData = (trigger: boolean) => {
    const [user, setUser] = useState([]);

    useEffect(() =>
        getData(), [trigger]
    )

    const getData = () => {
        const url = 'http://localhost:4000/users';
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUser(data))
    }

    return user;
}
