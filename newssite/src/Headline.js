import React from 'react';
import {Link} from "react-router-dom"

const Headline = (props) =>{
    const style = {
        div: {
            width: '100%',
        },
        image : {
    
          width: '100%',
        },
        title: {
           textAlign: 'center' 
        }
      }
      const path = `/articles/${props.index}`
      console.log(props.urlToImage)
    return(
        <div style ={style.div}>
        <img src={props.data.urlToImage} alt = '' style ={style.image}></img>

        <Link to={path} style = {style.title}><h1>{props.data.title}</h1></Link>
        </div>
    )
}

export default Headline;
