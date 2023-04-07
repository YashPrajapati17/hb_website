import React, {useState, useContext} from 'react'
import "./signup.css"
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../context/ContextProvider";


const Sign_in = () => {
  

  const [logdata, setData] = useState({
    email:"",
    password:""
  });
  //console.log(logdata);

  const { account, setAccount } = useContext(LoginContext);
  const history = useNavigate();

  const adddata = (e) =>{
    const {name, value} = e.target;

    setData(()=>{
      return {
        ...logdata,
        [name]:value
      }
    })
  }

  

  const senddata = async(e)=>{
    e.preventDefault();
    const { email, password } = logdata;

    if(email === ""){
      toast.error("Please enter email!", {
        position: "top-center"
      });
    
    }else if(password === ""){
      toast.error("Please enter password!", {
        position: "top-center"
      });
    }else{ 
    const res = await fetch("/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
         email, password 
      })
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 400 || !data){
      console.log("Invalid Details");
      toast.error("Invalid Details 👎!", {
        position: "top-center"
      });
    }else{
      console.log("Data valid");
      setAccount(data)
      history("/");
      //setData({...logdata, email:"", password:""});
      toast.success("Login Successfully done 😃!", {
        position: "top-center"
        
    });
    }

  }
  }
  return (
    <>
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="https://i.pinimg.com/564x/0a/ba/7c/0aba7ce9c964c0c0d9dc11f8ba664962.jpg" alt="HamsterBrokeringLogo" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                      <h1>
                        Sign-In
                      </h1>
                      <div className="form_data">
                        <label htmlFor="email">
                          Email
                        </label>
                        <input type="email"
                        onChange={adddata} 
                        value={logdata.email}
                        name="email" id="email" />
                      </div>

                      <div className="form_data">
                        <label htmlFor="password">
                          Password
                        </label>
                        <input type="password" 
                        onChange={adddata} 
                        value={logdata.password} name="password"   id="password" />
                      </div>
                  
                      <button className='signin_btn' onClick={senddata}>
                        Login
                      </button>
                      

                    </form>
                </div>
                <div className="create_accountinfo">
                  <p>
                    Don't have an account?
                  </p>
                  <NavLink to="/register">
                  <button >
                    Create New Account
                  </button>
                  </NavLink>
                </div>
            </div>
            <ToastContainer />
        </section>
    </>
  )
}

export default Sign_in
