import React , {useState,useRef} from 'react'
import "./HTML.css" ;
import { useDispatch, useSelector } from 'react-redux' ;
import styled from "styled-components" ;
import {data} from "./data" ;
import { useNavigate } from 'react-router-dom';



const Compo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`


function HTML() {
  const [i,setI] = useState(1)
  const state = useSelector((state) => state)
  const [note,setNote] = useState(0) ;
  const [selected,setSelected] = useState(null)
  const inputGroup = useRef() ;
  const dispatch = useDispatch() ;
  const [finish,setFinish] = useState(false) ;
  const navigate = useNavigate() ;

  const handleClick = () => {
    if(!finish){
      if(selected == null){
        alert("choise an answer") ;
        return ;
      }
      if(data[state.moduleIndex].correctAnswer[i - 1] == selected){
        setNote((prev) => prev + 1) ;
      }
    }
      
    if(i < 10 ){
      setI((prev) => prev + 1) ;
      if(!finish ) setSelected(null) ;
    }else{
      dispatch({type:"Score",payload:{note:note}}) ;
      setFinish(true) ;
      setI(1) ;
      if(finish){
        navigate("/Score") ;
      }
    }
  }

  const handleChange = (index) => {
    setSelected(index)
  }

  

  return (
    <div className="body">
      <div className="box">
        <div className="form">
            <Compo>
              <div>
                <h4>Hello {state.name}</h4>
                {
                  !finish
                  ? <h4>This the {data[state.moduleIndex].module} Test</h4>
                  : <h4>the Correct Answers of {data[state.moduleIndex].module} Test</h4>
                }
                <p>{i}/10</p>
              </div>
              <div>
                <img style={{"width":"80px"}} src={`${data[state.moduleIndex].image}`} />
              </div>
            </Compo>
            <div>
              <p className='textP'><span style={{"color":"#d9138a","fontWeight":"bold" ,"fontSize":"20px"}}>Question : </span>{data[state.moduleIndex].questions[i - 1].question} </p>
            </div>
            <div>
              {
                data[state.moduleIndex].questions[i - 1].choix.map((ele,index) => {
                  return(
                    <div class="form-check">
                    
                    {
                      finish == false
                      ? <input checked={selected == index} ref={inputGroup}  onChange={() => handleChange(index)} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                      : data[state.moduleIndex].correctAnswer[i - 1] == index
                      ? <img class="form-check-input" style={{"width":"20px"}} src={"true.webp"} />
                      : <img class="form-check-input" style={{"width":"20px"}} src={"false.webp"} />
                    }
                    <label style={{"color":"#aaa"}} class="form-check-label" for="exampleRadios1">
                      {ele.reponse}
                    </label>
                  </div>
                  )
                })
              }
              <button   style={{"width":"100%"}} onClick={handleClick}  className="submit"  >Next</button>           
              </div>
            
        </div>
    </div>
    </div>
  )
}

export default HTML