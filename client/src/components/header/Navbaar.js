import { React, useContext, useEffect, useState } from 'react'
import "./navbaar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginContext } from "../context/ContextProvider";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Rightheader from './Rightheader';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from 'react-redux'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';




const Navbaar = () => {
    // const usestyle = makeStyles({
    //     component: {
    //         marginTop: 10,
    //         marginRight: "-50px",
    //         width: "300px",
    //         padding: 50,
    //         height: "300px"
    //     },
    // })
    const { account, setAccount } = useContext(LoginContext);
    //console.log(account);

    const history = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [text, setText] = useState("");
    console.log(text);
    const [liopen, setLiopen] = useState(true);


    const {products} = useSelector(state => state.getproductsdata)

    const [dropen, setDropen] = useState(false);


    const getdetailvaliduser = async () => {
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content_Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        // console.log(data);

        if (res.status !== 201) {
            console.log("error")
        } else {
            console.log("data valid");
            setAccount(data);
        }
    };
    const handleopen = () => {
        setDropen(true)
    };

    const handledrclose = () => {
        setDropen(false)
    };

    const logoutuser = async () => {
        const res2 = await fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content_Type": "application/json"
            },
            credentials: "include"
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status !== 201) {
            console.log("error")
        } else {
            console.log("data valid");
            //alert("logout")
            toast.success("Logout Successfully done 😃!", {
                position: "top-center"
            });
            setAccount(false);
            history("/");

        }
    };
    
    const getText = (items)=>{
        setText(items)
        setLiopen(false)
    }


    useEffect(() => {
        getdetailvaliduser()
    }, []
    );

    return (
        <header>
            <nav>
                <div className="left">
                    <IconButton className='hamburgur' onClick={handleopen}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer open={dropen} onClose={handledrclose}>
                        <Rightheader logclose={handledrclose} logoutuser={logoutuser}/>
                    </Drawer>


                    <div className="navlogo">
                        <NavLink to="">
                            <img src="https://i.pinimg.com/564x/99/0f/3a/990f3a37746f98e4341887dd885561fb.jpg" alt="" />

                        </NavLink>
                    </div>



                    <div className="nav_searchbaar">
                        <input type="text" name="" 
                        onChange={(e)=>getText(e.target.value)}
                        placeholder='Search' id="" />
                        <div className="search_icon">
                            <SearchIcon id="search" color='white' />
                        </div>

                        {
                            text && 
                            <List className='extrasearch' hidden={liopen}>
                                {
                                    products.filter(product => product.title.shortTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                                        <ListItem>
                                            <NavLink to={`/getproductsone/${product.id}`} onClick={()=>setLiopen(true)}>
                                            {
                                                product.title.shortTitle
                                            }
                                            </NavLink>
                                            
                                        </ListItem>
                                    ))
                                }
                            </List>
                        }

                    </div>
                </div>

                <div className="right">
                    <div className="nav_btn">
                        <NavLink to="/login">Sign in</NavLink>
                    </div>

                    <div className="chat_btn">
                        {
                            account ?
                                <NavLink to="/Buynow">
                                    <Badge badgeContent={0} color="primary">
                                        <ThumbUpIcon id="chat_icon" />
                                    </Badge>
                                    <p>
                                        &nbsp; Liked Posts
                                    </p>
                                </NavLink> : <NavLink to="/login">
                                    <Badge badgeContent={0} color="primary">
                                        <ThumbUpIcon id="chat_icon" />
                                    </Badge><p>
                                        &nbsp; Liked Posts
                                    </p>
                                </NavLink>
                        }


                    </div>
                    <NavLink to ='/Addpost'>
                    <div className="post_btn">
                        
                        <AddIcon id="icon" />
                        
                        <p>
                            Add Post
                        </p>
                        
                    </div>
                    </NavLink>
                    {
                        account ?
                            <Avatar className="avatar2"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {account.fname[0].toUpperCase()}</Avatar> :
                            <Avatar className="avatar"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            ></Avatar>

                    }

                    <div>
                        
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            {
                                account ? <MenuItem onClick={logoutuser}><LogoutIcon style={{fontSize:16, marginRight:3}}/>Logout</MenuItem> :<NavLink to="/login"> <MenuItem ><LogoutIcon style={{fontSize:16, marginRight:3}} />Sign In</MenuItem></NavLink>
                            }
                        </Menu>
                    
                    </div>
                    <ToastContainer/>
                    </div>

            </nav>
        </header>


    )
 }


    export default Navbaar
