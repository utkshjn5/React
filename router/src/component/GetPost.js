import React, { Component } from 'react';
import axios from 'axios';
class GetPost extends Component {
    state = {
        post: null
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
        console.log(url)
        axios.get(url)
            .then(res => {
                this.setState({
                    post: res.data
                })
                console.log(res);
            })

    }


    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>) : (
                <div className="center">Loading Post...</div>
            )
        return (
            <div className="container"><h4>{post}</h4></div>
        )
    }
}
export default GetPost;