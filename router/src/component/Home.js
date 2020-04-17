import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import pokeball from '../pokeball.png'

const Home = () => {
    const [data, setData] = useState({ data: [] });
    const sampleRequest = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(() => {
        getResponse();
    }, []);
    const getResponse = async () => {
        const response = await axios(sampleRequest);
        console.log(response.data);
        const data = response.data.slice(0, 10);
        setData(data);
        console.log(data.length);
    };
    let postList = data.length ? (data.map(post => {
        return (
            <div className="post card hoverable" key={post.id}>
                <img src={pokeball} alt="Not Found"/>
                <div className="card-content">
                    <Link to={'/' + post.id}>
                        <span className="card-title red-text">
                            {post.title}
                        </span>
                    </Link>
                    <p>{post.body}</p>
                </div>
            </div>
        )
    })) : (<div className="center"><p>No Post</p></div>
        )
    return (
        <div className="container home"><h4 className="center">{postList}</h4></div>

    )
}
export default Home;

