import React from 'react';

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

      console.log(props.urlToImage)
    return(
        <div style = {style.div}>
        <img src={props.data.urlToImage} alt = '' style ={style.image}></img>

        <h1 style = {style.title}>{props.data.title}</h1>
        </div>
    )
}

export default Secondary;
