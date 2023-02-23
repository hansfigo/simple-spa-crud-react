export const DeleteUser = async (props: any) => {
    const { id, trigger } = props;
    const url = 'http://localhost:4000/delete/' + id;


    const deleteOptions = {
        method: 'DELETE'
    }

    try {
        console.log("deleted")
        await fetch(url, deleteOptions);
        trigger(true);
    } catch (err) {
        console.log(err);
    }
}