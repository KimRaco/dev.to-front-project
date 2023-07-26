
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



const Comments = () => {
    const BASE_URL = "http://localhost:8080/"

    const [comments, setComments] = useState([])
    const [filteredComments, setFilteredComments] = useState()
    const { postId } = useParams()

    // Get comments
    const doFetch = async (URL, setter) => {
        const res = await fetch(`${URL}comments`);
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
                    </div>
                </div>

            )}
        </>
    )
}

export default Comments