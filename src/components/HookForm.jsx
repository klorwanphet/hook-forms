import React, { useState } from  'react';

const UserForm = props =>{
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")
    return(
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" className="form-control" onChange={(e) => setfname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" id="lname" className="form-control" onChange={(e) => setlname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" className="form-control" onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" className="form-control" onChange={(e) => setpassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="text" name="cpassword" id="cpassword" className="form-control" onChange={(e) => setcpassword(e.target.value)}/>
                </div>
            </form>

            <h3>Your form data</h3>
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    { fname }
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    { lname }
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    { email }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    { password }
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    { cpassword }
                </div>
            </form>
        </>
    )
}
    
export default UserForm;