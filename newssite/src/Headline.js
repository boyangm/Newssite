import React from 'react';

const Headline = (props) =>{
    const style = {

        image : {
    
          width: '100%',
        },
        title: {
           textAlign: 'center' 
        }
      }

      console.log(props.urlToImage)
    return(
        <div>
        <img src={props.data.urlToImage} alt = '' style ={style.image}></img>

        <h1 style = {style.title}>{props.data.title}</h1>
        </div>
    )
}

export default Headline;
