import React from 'react'
import { Consumer } from './context'

const Article = ({ match }) => {
    let id = match.params.id;
    const style = {

        image: {

            width: '100%',
        },
        title: {
            textAlign: 'center'
        }
    }

    return (
        <Consumer>
            {({ posts }) => {
                if (posts.length > 0) {
                    return (
                        <div>
                            <img src={posts[id].urlToImage} alt='' style={style.image}></img>

                            <h1 style={style.title}>{posts[id].title}</h1>
                            <h3 style={style.title}>{posts[id].author}</h3>
                            <h3 style={style.title}>{posts[id].source.name}</h3>
                            <p style={style.title}>{posts[id].content}</p>
                        </div>
                    )
                }
            }}

        </Consumer>
    )
}

export default Article