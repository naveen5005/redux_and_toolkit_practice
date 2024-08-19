import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddUser, handleDeleteUser, handleUpdateUser } from '../store/actions'

class Users extends Component {
    constructor(props) {
      super(props)
      this.state = {
         user : {
            fname : "",
            gender : "",
            state: "",
            areasOfInterest : []
         },
         isEdit : null
      }
    }
    
    handleChange = (e) =>{
        const newUser = {...this.state.user};
        if(e.target.name === "areasOfInterest"){
            const newAreasOfInterest = [...newUser.areasOfInterest];
            if(e.target.checked){
                newAreasOfInterest.push(e.target.value);
            }else{
                const index = newAreasOfInterest.indexOf(e.target.value);
                newAreasOfInterest.splice(index,1);
            }
            newUser.areasOfInterest=newAreasOfInterest;
        } else {
            newUser[e.target.name] = e.target.value;
        }
        this.setState({user : newUser});
    }
    addUser = () =>{
        console.log(this.state.user);
        this.props.dispatch(handleAddUser(this.state.user))
    }
    deleteUser = (user) =>{
        this.props.dispatch(handleDeleteUser(user));
    }
    editUser = (usr)=>{
        this.setState({user : usr, isEdit : usr.fname})
    }
    updateUser = () =>{
        this.props.dispatch(handleUpdateUser(this.state.user));
    }
  render() {
    const {fname,gender,state,areasOfInterest} = this.state.user;
    return (
      <div className='main container'>
        <div className="form container">
            <form action="">
                <label htmlFor="">FullName : </label>
                <input type="text" name="fname" value={fname} onChange={this.handleChange} /> <br />

                <label htmlFor="">Gender : </label>
                <input type="radio" name="gender" onChange={this.handleChange} checked={gender === "male"} value={"male"} /> Male 
                <input type="radio" name="gender" onChange={this.handleChange} checked={gender === "female"} value={"female"} /> Female  
                <input type="radio" name="gender" onChange={this.handleChange} checked={gender === "others"} value={"others"} /> Others <br />

                <label htmlFor="">State : </label>
                <select name="state" value={state} onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="AP">AP</option>
                    <option value="TS">TS</option>
                    <option value="KA">KA</option>
                </select> <br />

                <label htmlFor="">Areas Of Interest : </label>
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked={areasOfInterest.includes("HTML")} value={"HTML"} /> HTML 
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked={areasOfInterest.includes("CSS")} value={"CSS"} /> CSS 
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked={areasOfInterest.includes("JS")} value={"JS"} /> JS 
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked={areasOfInterest.includes("BOOTSTRAP")} value={"BOOTSTRAP"} /> BOOTSTRAP 
                <input type="checkbox" name="areasOfInterest" onChange={this.handleChange} checked={areasOfInterest.includes("REACTJS")} value={"REACTJS"} /> REACTJS <br />

                {
                    this.state.isEdit === null ? <button type="button" onClick={this.addUser}>Add User</button>
                    : <button type="button" onClick={this.updateUser}>Update User</button>
                }
                
            </form>
        </div> <br />
        <div className="table container">
            <table border={2}>
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Gender</th>
                        <th>State</th>
                        <th>Areas Of Interest</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.users.map((usr)=>{
                            return(
                                <tr key={usr.fname}>
                                    <td>{usr.fname}</td>
                                    <td>{usr.gender}</td>
                                    <td>{usr.state}</td>
                                    <td>{usr.areasOfInterest.join(", ")}</td>
                                    <td>
                                        <button type="button" onClick={()=>this.editUser(usr)}>edit</button>
                                    </td>
                                    <td>
                                        <button type="button" onClick={()=>this.deleteUser(usr)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
        users : state.users
    }
}
export default connect(mapStateToProps)(Users);