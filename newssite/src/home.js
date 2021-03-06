import React from 'react';
import {Consumer} from './context'
import Headline from './Headline'
import Secondary from './secondary'


const Home = () =>{
const style ={
    root: {
        positon: 'relative',
        width: '100%',
        margin: '0 auto'
    },
    content: {
        display: 'flex',
        flexFlow: 'row'
    }
}
    return (
       <Consumer>
        {({posts}) =>{
            if (posts.length > 0){
                return(
                    <div style= {style.root}>
                    <Headline  index={0} data ={posts[0]}></Headline>
                    <div style= {style.content}>
                    <Secondary index ={1} data ={posts[1]}></Secondary>
                    <Secondary index={2} data = {posts[2]}></Secondary>

                    </div>
                    <Headline index={3} data ={posts[3]}></Headline>
                    
                    
                    </div>
                )
            }
            return(
            posts.map(post =>{
                return(
                <h1>Boyang</h1>
                )
            })
            )
        }}  
       </Consumer>
    );

}
export default Home;