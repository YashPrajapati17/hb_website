import {React,  useContext } from 'react'
import { LoginContext } from '../context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  NavLink } from 'react-router-dom';



const Option = ({ deletedata, get }) => {
    // console.log(deletedata);

    const { account, setAccount } = useContext(LoginContext);
    // console.log(account);

    const removedata = async (req, res) => {
        try {
            const res = await fetch(`/remove/${deletedata}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);

            if (res.status !== 201 || !data) {
                console.log("error");
            } else {
                setAccount(data)
                get();
                toast.success("Unliked successfully!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="add_remove_select" key={deletedata}>
            
            <p onClick={() => removedata(deletedata)} style={{ cursor: "pointer" }}>Unlike</p><span>|</span>
            <p className="forremovemedia">Comment Now</p><span>|</span>
            <NavLink to="/"><p className="forremovemedia">See More like this</p></NavLink>
            <ToastContainer />
        </div>

    )
}

export default Option;
