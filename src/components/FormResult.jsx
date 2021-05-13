import React, { useState } from  'react';

const UserTable=(props)=>{
    return(
                <form onSubmit={ createUser }>
                    <div>
                        <label>Username: </label> 
                        <input type="text" onChange={ (e) => setUsername(e.target.value) } />
                    </div>
                    <div>
                        <label>Email Address: </label> 
                        <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                    </div>
                    <input type="submit" value="Create User" />
                </form>
            );
}