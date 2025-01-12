import React from 'react'
import './Score.css' ;
import { useSelector } from 'react-redux';
import {data} from "./data" ;

function Score() {

  const state = useSelector((state) => state)
  const found = data.find((ele) => ele.module == state.module) ;
  return (
    <div className="body">
      <div class="box">
        <div style={{"justifyContent":"center","alignItems":"center"}} className='d-flex form' >
            <h2>Score</h2>
            <div>
              <h3>Name :<span>{state.name}</span></h3>
              <h3>Language : <span>{state.module}</span></h3>
              <h3>Score : <span>{state.note}</span>/10</h3>
            </div>
            <div style={{"justifyContent":"center","alignItems":"center"}} className='d-flex'>
              <img style={{"width":"90px"}} src={`${found.image}`} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Score