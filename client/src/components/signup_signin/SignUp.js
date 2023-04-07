import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./signup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {

  const [udata, setData] = useState({
    fname:"",
    email:"",
    mobile:"",
    password:"",
    cpassword:""
  });
  console.log(udata);
  const adddata = (e)=>{
    const {name,value} = e.target;

    setData(()=>{
      return {
        ...udata,
        [name]:value
      }
    })
  }

  const senddata = async(e)=>{
    e.preventDefault();
    const {fname, email, mobile, password, cpassword} = udata;
     
    if(fname === ""){
      toast.error("Please enter name!", {
        position: "top-center"
      });
    }else if(email === ""){
      toast.error("Please enter email!", {
        position: "top-center"
      });
    }else if(mobile === ""){
      toast.error("Please enter mobile number!", {
        position: "top-center"
      });
    }else if(password === ""){
      toast.error("Please enter password!", {
        position: "top-center"
      });
    }else if(cpassword === ""){
      toast.error("Please enter password again for confirmation!", {
        position: "top-center"
      });
    }else if(password !== cpassword){
      toast.error("Please make sure both the password are same!", {
        position: "top-center"
      });
    }else{
      const res = await fetch("/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          fname, email, mobile, password, cpassword
        })
      });
      const data = await res.json();
      // console.log(data);
      if(res.status === 422 || !data){
        //alert("no data")
        toast.error("Invalid Details 👎!", {
                      position: "top-center"
                    });
      }else{
        //alert("Data succesfully added!")
        setData({...udata, fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""});
        toast.success("Registration Successfully done 😃!", {
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
            <form method='POST'>
              <h1>
                Register
              </h1>

              <div className="form_data">
                <label htmlFor="fname">
                  Your Name
                </label>
                <input type="text" 
                onChange={adddata}
                value={udata.fname}
                name="fname" id="fname" />
              </div>

              <div className="form_data">
                <label htmlFor="email">
                  Email
                </label>
                <input type="email" 
                onChange={adddata}
                value={udata.email}
                name="email" id="email" />
              </div>


              <div className="form_data">
                <label htmlFor="mobile">
                  Mobile Number
                </label>
                <input type="number" 
                onChange={adddata}
                value={udata.mobile}
                name="mobile" id="mobile" />
              </div>

              <div className="form_data">
                <label htmlFor="password">
                  Password
                </label>
                <input type="password"
                onChange={adddata}
                value={udata.password}
                name="password"  id="password" />
              </div>

              <div className="form_data">
                <label htmlFor="cpassword">
                  Confirm Password
                </label>
                <input type="password" 
                onChange={adddata}
                value={udata.cpassword}
                name="cpassword"  id="cpassword" />
              </div>

              <button className='signin_btn' onClick={senddata}>
                Continue
              </button>


            </form>
          </div>
          <div className="create_accountinfo">
            <p>
              Already have an account?
            </p>
            <NavLink to="/login">
                  <button >
                    Log In into existing account
                  </button>
            </NavLink>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  )
}

export default SignUp;
