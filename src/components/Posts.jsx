import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom';
import "./posts.css"





const Posts = ({ posts }) => {

    let isLogged = localStorage.getItem('token');

    const token = localStorage.getItem('token');

    const BASE_URL = "http://localhost:8080"

    const deleteByid = async (id) => {
        let response = await fetch(
            `${BASE_URL}/posts/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                method: 'DELETE'
            });
        let data = await response.json();

        return data;
    }



    const handleClick = (async (e) => {
        e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        await deleteByid(e.currentTarget.id);
    })



    return (
        <>
            {
                posts?.map(post =>
                    <React.Fragment key={post._id}>

                        < div className="card shadow mb-2" >
                            <img className="card-img-top" src={post.imageUrl} />
                            <div className="card-body">
                                <div className="d-flex mb-1 align-items-center">
                                    <img className="rounded-circle border object-fit-cover me-3 user-img " src="https://i.pravatar.cc/" />
                                    <span className="d-flex flex-column justify-content-center">
                                        <h5 className="fs-6 fw-bold m-0 ">{post.user}</h5>
                                        <span className="fw-light date"> {moment(post.date).format('MMM Do')}{" ("}{moment(post.date).fromNow()}{")"}</span>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="card-title mb-1 mt-0">
                                        <Link to={`${post._id}`}><h2 className="fs-4" >{post.title}</h2></Link>
                                    </h4>
                                    <ul className="list-tag__main">
                                        <li >{"#"}{post.tags}</li>
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-between w-100">
                                    <div className="d-flex align-items-center">
                                        <span className="d-flex align-items-center me-3">
                                            <img src="src/assets/heart-icon.svg" alt="" />8 Reactions</span>
                                        <span className="d-flex align-items-center">
                                            <img src="src/assets/comment-icon.svg" alt="" />2 Comments
                                        </span>
                                    </div>
                                    <div>
                                        <span className="d-flex align-items-center">7 days ago
                                            {isLogged && <>
                                                <div className="dropdown">
                                                    <button type="button" className="btn dropdown-toggle mx-2" data-bs-toggle="dropdown" ><img className="dots rounded-circle p-2"
                                                        src="src/assets/three-dots.svg" alt="" /></button>
                        
                                                    <ul className="dropdown-menu">
                                                        <li><button onClick={handleClick} className="dropdown-item text-danger" id={post._id} >Delete</button></li>
                                                        <li><button className="dropdown-item" id={post._id} >Edit</button></li>

                                                    </ul>
                                                </div>

                                            </>
                                            }
                                            <img src="src/assets/save-icon.svg" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment >

                )
            }
        </>
    )
}

export default Posts