import React , {useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux" ;
import {fetchData} from "./redux/Api.js" ;

function Netflex() {

  const state = useSelector((state) => state) ;
  const dispatch = useDispatch() ;
 
  useEffect(() => {
    dispatch(fetchData()) ;
  },[dispatch]) ;

  console.log(state) ;

  return (
    <div>
      
    </div>
  )
}

export default Netflex ;