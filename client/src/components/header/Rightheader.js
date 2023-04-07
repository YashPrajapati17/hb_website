import { React, useContext } from 'react'
import { LoginContext } from "../context/ContextProvider";
import { NavLink } from 'react-router-dom';
import { Divider} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import "./rightheader.css"



const Rightheader = ({logclose, logoutuser}) => {
    const { account, setAccount } = useContext(LoginContext);

    return (
        <>
            <div className="rightheader">
                <div className="right_nav">
                    {
                        account ?
                            <Avatar className="avatar2">
                                {account.fname[0].toUpperCase()}</Avatar> :
                            <Avatar className="avatar"></Avatar>

                    }{
                       account ? <h3>Hello, {account.fname.toUpperCase()}</h3>: ""
                    }
                </div>
                <div className="nav_btn" onClick={()=>logclose()}>
                    <NavLink to ="/">Home</NavLink>
                    <NavLink to ="/">Shop By Category</NavLink>

                    <Divider style={{width:"100%", marginleft:"-20px"}}/>
                    <NavLink to ="/">Nearby</NavLink>
                    {
                        account ? 
                        <NavLink to ="/Buynow">Your liked posts</NavLink>: <NavLink to ="/login">Your liked posts</NavLink>
                    }
                    <Divider style={{width:"100%", marginleft:"-20px"}}/>
                    <NavLink to ="/">Settings</NavLink>

                    {
                        account ? 
                        <div className="flag">
                            
                            <h3 onClick={()=>logoutuser()} >
                                Logout
                            </h3>
                        </div>:
                        <NavLink to="login">Sign In</NavLink>
                    }

                    


                </div>
            </div>
        </>
    )
}

export default Rightheader
