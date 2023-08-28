
import React from 'react'
import "./createPost.css"
import { useForm } from 'react-hook-form'
import { PUBLIC_API_URL } from "../constants/url"

const CreatePost = () => {

    const BASE_URL = PUBLIC_API_URL

    const { register, handleSubmit, formState: { errors } } = useForm()

    const token = localStorage.getItem('token');

    const customSubmit = (async (data) => {

       

        const authorDataString = localStorage.getItem('token').split('.')[1];
                const { _id } = JSON.parse(atob(authorDataString));
                data["user"] =  _id;
                
                

            try {
                const response = await fetch(`${BASE_URL}/posts`, {
                    method: "POST",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                    
                })

                window.open( '/','_self');

                
               

            } catch (error) {
                alert('Something went wrong');
            

        }

    })

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img className="site-logo__img me-2" width="40" height="40" src="src/assets/dev-badge.svg" alt="DEV Community" />
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Post</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>




                        <div className="modal-body">
                            <form onSubmit={ handleSubmit(customSubmit) }  className="border px-md-5 py-md-4 rounded" id="post-form">

                                <div className="mb-3">
                                    <input type="url" className="form-control border-0 p-0 w-100" {...register('imageUrl', { required: true })}
                                        placeholder="https://your-image-url" />
                                    {errors.imageUrl?.type === 'required' && <small className='text-danger'>Please provide an image url</small>}
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="form-control fs-1 border-0 p-0" {...register('title', { required: true })}
                                        placeholder="New post title here" />
                                    {errors.title?.type === 'required' && <small className='text-danger'>Please write a title</small>}

                                </div>

                                <div className="mb-3">
                                    <input type="text" className="form-control border-0 p-0 mb-4" {...register('tags', { required: true })}
                                        placeholder="Add up to 4 tags..." />
                                    {errors.tags?.type === 'required' && <small className='text-danger'>Please provide at least one tag</small>}

                                </div>

                                <div className="mb-3">
                                    <textarea className="form-control border-0 p-0" {...register('content', { required: true })}
                                        placeholder="Write your post content here..." rows="10"></textarea>
                                    {errors.content?.type === 'required' && <small className='text-danger'>Please write a content</small>}

                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Publish</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div >


        </>
    )
}

export default CreatePost