
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PUBLIC_API_URL } from "../constants/url"


const Comments = () => {
    const BASE_URL = PUBLIC_API_URL
    let isLogged = localStorage.getItem('token');
    const token = localStorage.getItem('token');

    const [comments, setComments] = useState([])
    const [filteredComments, setFilteredComments] = useState()
    const { postId } = useParams()

    // Get comments
    const doFetch = async (URL, setter) => {
        const res = await fetch(`${URL}/comments`);
        const response = await res.json();
        setter(response.data.comments);
    }

    useEffect(() => {
        doFetch(BASE_URL, setComments);
    }, []);

    //Filter Comments

    const filterComments = () => {
        let filterForComments = comments.filter(comment => comment.post.includes(postId));
        setFilteredComments(filterForComments)
    }

    useEffect(() => {
        filterComments()

    }, [comments])


    //delete comments

    const deleteByid = async (id) => {
        let response = await fetch(
            `${BASE_URL}/comments/${id}`,
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



    const deleteComment = (async (e) => {
       e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.remove()
        await deleteByid(e.currentTarget.id);
    })

    return (

        <>
            <div className="d-flex justify-content-between mb-5 mt-4">
                <h4>Top comments ({filteredComments?.length})</h4>

            </div>

            {filteredComments?.map(comment =>

                <div className="d-flex mt-2" key={comment._id}>
                    <img className="rounded-circle border object-fit-cover me-3 user-img" src="https://i.pravatar.cc/" />
                    <div className="card w-100 p-3">
                        <h5 className="fs-6 fw-bold">{comment?.user}</h5>
                        <p className="card-text">
                            {comment?.content}
                        </p>    
                            {isLogged &&
                                <div className="dropdown d-flex justify-content-end">

                                    <button type="button" className="left-aside btn d-lg-block mx-0 my-1 p-0 dropdown-toggle" data-bs-toggle="dropdown" ><img className="dots rounded-circle p-2"
                                        src="three-dots.svg" alt="" /></button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item text-danger" onClick={deleteComment} id={comment?._id} >Delete</button></li>
                                        <li><button className="dropdown-item" >Edit</button></li>
                                    </ul>

                                </div>
                            }
                        

                    </div>
                </div>



            )}
        </>
    )
}

export default Comments