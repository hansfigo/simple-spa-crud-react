export const usePostUser = async (userData: { first_name: string, last_name: string }) => {
    const url = 'http://localhost:4000/post'
    const postOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(userData)
    }

    try {
        const response = await fetch(url, postOptions);

        if (response.ok) {
            console.log(response.status);
            return response.json();
        } else {
            throw new Error('Failed with Status code' + response.status);
        }

    } catch (error) {
        console.log(error);
        throw error;
    }
}