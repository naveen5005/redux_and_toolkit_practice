const initialState = {
    users : [
        {
            "fname" : "Naveen Babu",
            "gender" : "male",
            "state" : "AP",
            "areasOfInterest" :["HTML","CSS","JS","REACTJS","BOOTSTRAP"]
        }       
    ]
}

export const rootReducer = (state = initialState,action) =>{
    switch (action.type) {
        case "add_user":
            return{
                ...state,
                users : [...state.users,action.payload]
            }
        case "delete_user":
            return{
                users : state.users.filter((usr)=>usr.fname !== action.payload.fname)
            }
        case "update_user":
            return {
                users : state.users.map((usr)=>{
                    if(usr.fname === action.payload.fname){
                        return action.payload;
                    }
                    return usr;
                })
            }
        default:
            return state;
    }
}