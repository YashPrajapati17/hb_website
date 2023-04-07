import React, {useEffect} from 'react'
import "./home.css"
import Slide from './Slide'
import {getProducts} from "../redux/actions/action";
import {useDispatch, useSelector} from "react-redux"


const Maincomp = () => {


  const {products} = useSelector(state => state.getproductsdata);
  //console.log(products);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch]);

  return (

    <div className='home_section'> 
      <Slide title="Recent Post" products={products} />
        
      <Slide title="Nearby" products={products}/> 
      <Slide title="More" products={products}/>
    </div>

  )
}

export default Maincomp
