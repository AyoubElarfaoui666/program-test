import React , {useCallback, useState } from 'react'
import "./language.css" ;
import { useDispatch  , useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom" ;

const langVar = [
    {"module":"HTML","color":"danger","active":false},
    {"module":"CSS","color":"primary","active":false},
    {"module":"Js","color":"warning","active":false},
    {"module":"React","color":"info","active":false},
    {"module":"PHP","color":"success","active":false},
    {"module":"Laravel","color":"light","active":false},
]

function Language() {

    const [lang,setLang] = useState(langVar)
    const dispatch = useDispatch() ;
    const state = useSelector((state) => state) ;
    const navigate = useNavigate() ;

    const handleClick = (index) => {
        const langArray = lang.map((el,ind) => {
            if(index == ind){
                return {...el,active:!el.active}
            }else{
                return {...el,active:false}
            }
        })
        setLang(langArray) ;
    }

    const handleSubmit  =  () => {
        lang.forEach((ele,index) => {
            if(ele.active){
                dispatch({type:"language",payload:{language:ele.module,moduleIndex:index}}) ;
                navigate(`/HTML`) ;
            }
        } ) ;
    }

  return (
    <div className="body">
        <div className="box">
        <div className="form">
            <h2>Languages</h2>
            <div className='gridLang' >
            {
                lang.map((ele,index) => {
                    return(
                            <button onClick={() => handleClick(index)}
                            className={`btn btn-outline-${ele.color} ${ele.active?"bg-"+ele.color : null}`}
                             style={ele.active?
                                ele.color != "light" ?
                                {"color":"white"} :
                                {"color":"black"} : 
                                null
                             }
                             >
                                {ele.module}
                            </button>
                    )
                })
            }
            </div>

            
            <button onClick={handleSubmit} className="submit">Next</button>
        </div>
        </div>
    </div>
  )
}

export default Language