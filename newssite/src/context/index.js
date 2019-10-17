import React , {Component} from 'react';

const NewsContext = React.createContext();

export class Provider extends Component {

    state ={

        posts: []
    }

    componentDidMount(){
        fetch('/api/posts')
        .then(res => res.json())
        .then(posts =>this.setState({posts}))
    }
    render(){
        return (
            <NewsContext.Provider value = {{}}>
            {this.props.children}
            </NewsContext.Provider>
        );

    }
} 

export const Consumer = NewsContext.Consumer;