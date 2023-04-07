import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './buynow.css'
import Empty from './Empty';
import Option from './Option';

const Buynow = () => {

    const [cartdata, setCartdata] = useState("");
    // console.log(cartdata.length);

    const getdatabuy = async () => {
        const res = await fetch("/cartdetails", {
            method: "GET",
            headers: {
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        });

        const data = await res.json();
        // console.log(data.carts);

        if (res.status !== 201) {
            alert("no data available")
        } else {
            // console.log("data cart main hain");
            setCartdata(data.carts);
        }
    };



    useEffect(() => {
        getdatabuy();
    }, []);


   

    

    return (
        <>
            {cartdata.length ?
                <div className="buynow_section">
                    <div className="buynow_container">
                        <div className="left_buy">
                            <h1>All your likings</h1>
                            <p>Select all</p>
                            <span className="leftbuyprice">Price</span>
                            <Divider />

                            {
                                cartdata.map((e, k) => {
                                    return (
                                        <>
                                            <div className="item_containert" key={k}>
                                                <img src={e.detailUrl} alt="imgitem" />
                                                <div className="item_details">
                                                    <h3>{e.title.longTitle}</h3>
                                                    <h3>{e.title.shortTitle}</h3>
                                                    <h3 className="diffrentprice">${e.price.cost}.00</h3>
                                                    
                                                    <Option deletedata={e.id} get={getdatabuy} />
                                                </div>
                                                <h3 className="item_price">${e.price.cost}.00</h3>
                                            </div>
                                            <Divider />
                                        </>
                                    )
                                })
                            }
                         
                        </div>
                    </div>
                </div> : <Empty />
            }
        </>
    )
}

export default Buynow;


