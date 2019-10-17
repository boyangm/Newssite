import React from 'react';
import {Link} from "react-router-dom"

const Secondary = (props) =>{
    const style = {
        div: {
            position: 'relative',
            display: 'flex',
            flexFlow: 'column',
            width: '50%',
            justifyContent: 'space-between'
        },
        image : {
    
          width: '100%',
        },
        title: {
           textAlign: 'center' 
        }
      }

      const path = `/articles/${props.index}`
    return(
        <div style = {style.div}>
        <img src={props.data.urlToImage} alt = '' style ={style.image}></img>

        <Link to={path} style = {style.title}><h1>{props.data.title}</h1></Link>
        </div>
    )
}

export default Secondary;
