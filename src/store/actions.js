
export const handleAddUser = (user) =>{
    return {
        type : "add_user",
        payload : user
    }
}
export const handleDeleteUser = (user) =>{
    return {
        type : "delete_user",
        payload : user
    }
}
export const handleUpdateUser = (user) =>{
    return{
        type: "update_user",
        payload : user
    }
}