import React from "react";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import moment from "moment";
import "./postdetails.css"
import { useForm } from 'react-hook-form'
import Comments from "./Comments";



const API_URL = "http://localhost:8080/posts"
const BASE_URL = "http://localhost:8080/"



const PostDetails = () => {

  const { register, handleSubmit } = useForm()


  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState();
  const token = localStorage.getItem('token');
  let isLogged = localStorage.getItem('token');

  const { postId } = useParams()


  useEffect(() => {
    fetch(`${API_URL}/${postId}`)
      .then((response) => response.json())
      .then(data => {
        setPost(data.data.posts)
        setIsLoading(false)
      })
  }, []);

  useEffect(() => {

  }, [post])



  //delete post

  const deleteByid = async (id) => {
    let response = await fetch(
      `${API_URL}/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        method: 'DELETE'
      });
    let data = await response.json();

    window.open('/', '_self');
    return data;
  }



  const handleClick = (async () => {
    await deleteByid(postId);
  })


  //post comment

  const createComment = (async (data) => {
    const authorDataString = localStorage.getItem('token').split('.')[1];
    const { _id } = JSON.parse(atob(authorDataString));
    data["user"] = _id;
    data["post"] = postId;


    try {
      const response = await fetch(`${BASE_URL}comments`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

      })

      window.open(`/${postId}`, '_self');


    } catch (error) {
      alert('Something went wrong');
    }

  })







  return (
    <div className="container mt-5 mb-3">
      <div className=" row d-flex justify-content-center">

        <aside className="left-aside col-12 col-md-1 col-lg-1 p-0 sticky-sm-bottom mt-5">
          <div className="left-aside__div d-flex justify-content-around d-md-block d-lg-block object-fit-contain sticky-md-top pt-md-5">
            <button type="button" className="left-aside btn d-lg-block  my-1 mx-0 p-0 position-relative">
              <img className="heart   rounded-circle p-2 d-sm-inline d-lg-block" src="src/assets/heart-icon.svg" alt="" />
              <p className=" d-sm-inline d-lg-block">0</p>
              <p className="msj  d-none position-absolute text-white bg-dark rounded p-2">Like</p>
            </button>

            <button type="button" className="left-aside btn d-lg-block my-1 mx-0 p-0 position-relative">
              <img className="comment rounded-circle p-2 d-sm-inline d-lg-block" src="src/assets/comment-icon.svg" alt="" />
              <p className=" d-sm-inline d-lg-block">0</p>
              <p className="msj  d-none position-absolute text-white bg-dark rounded p-2">Jump to Comments</p>
            </button>

            <button type="button" className="left-aside btn d-lg-block my-1 mx-0 p-0 position-relative">
              <img className="save rounded-circle p-2 d-sm-inline d-lg-block" src="src/assets/save-icon.svg" alt="" />
              <p className=" d-sm-inline d-lg-block">0</p>
              <p className="msj  d-none position-absolute text-white bg-dark rounded p-2">Save</p>
            </button>

            {isLogged &&
              <div className="dropdown">

                <button type="button" className="left-aside btn d-lg-block mx-0 my-1 p-0 dropdown-toggle" data-bs-toggle="dropdown" ><img className="dots rounded-circle p-2"
                  src="src/assets/three-dots.svg" alt="" /></button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item text-danger" onClick={handleClick} id={post?._id} >Delete</button></li>
                  <li><button className="dropdown-item" >Edit</button></li>
                </ul>

              </div>}
          </div>

        </aside>


        {isLoading &&

          <div className="d-flex justify-content-center col-12 col-lg-8 col-md-11 mt-5">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        }


        {!isLoading &&
          <>


            <main className=" col-12 col-lg-8 col-md-11 my-md-4 " id="card-view-post">

              <div className="card me-5">
                <img src={post?.imageUrl} className=" " id="img-post" />
                <div className="card-body py-5 px-3">
                  <div className="d-flex mb-3 align-items-center ">
                    <img className="rounded-circle border object-fit-cover me-3 user-img" src="https://i.pravatar.cc/" />
                    <span className="d-flex  flex-column">
                      <h5 className="fs-6 fw-bold" id="user-name">{post?.user}</h5>
                      <span className="fs-6 fw-light" id="date-post">{moment(post?.date).format('MMM Do')}{" ("}{moment(post?.date).fromNow()}{")"}</span>
                    </span>
                  </div>

                  <div className="">
                    <h1 className="card-title" id="title-post">{post?.title}</h1>
                    <ul className="list-tag__main" id="tags-list">

                    </ul>
                  </div>
                  <div >
                    <p className="card-text" id="details-post">{post?.content}</p>
                  </div>

                </div>
                <div className=" px-5 py-3">

                  {isLogged &&
                    <section id="add-comment">
                      <form onSubmit={handleSubmit(createComment)} className="d-flex">
                        <img className="rounded-circle border object-fit-cover me-3 user-img" src="https://i.pravatar.cc/" />
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" {...register('content', { required: true })}></textarea>
                        <div className="ms-5 ps-2 mb-4">
                          <button type="submit" className="btn btn-primary mt-3 me-2"  >Comment</button>
                          <button type="button" className="btn btn-outline-primary mt-3">Cancel</button>
                        </div>
                      </form>
                    </section>
                  }
                  <Comments />



                </div>

              </div>





            </main>



          </>
        }



        <aside className="d-none d-lg-block col-12 col-lg-3 my-md-4 ">
          <div className="card p-3 ">
            <a href="" className="text-decoration-none text-black">
              <div className="d-flex mb-3 align-items-center ">
                <img className="rounded-circle border object-fit-cover me-3 user-img" src="https://i.pravatar.cc/" />
                <span className="d-flex  flex-column">
                  <h5 className="fs-5 fw-bold">Jonathan Walters</h5>
                </span>
              </div>
            </a>
            <button className="btn btn-primary mb-3" type="button">Follow</button>
            <p className="fw-bold fs-6 m-0">JOINED</p>
            <p className="fs-6 m-0">23 Mar 2022</p>
          </div>
          <div className="card mt-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item fw-bold fs-5">More from <a className="text-decoration-none fs-5 fw-bold"
                href="">Scofield Idehen</a></li>
              <a href="" className="rigth__nav-li list-group-item">
                <p className="rigth__nav-a">How to Integrate ChatGPT to WhatsApp</p>
                <p className="fs-6 text-opacity-25">#ai #chatgpt #javascript #machinelearnig</p>
              </a>
              <a href="" className="rigth__nav-li list-group-item">
                <p className="rigth__nav-a">How to use /*Comment*/ as developer</p>
                <p className="fs-6 text-opacity-25">#webdev #javascript #tutorial #programing</p>
              </a>
              <a href="" className="rigth__nav-li list-group-item">
                <p className="rigth__nav-a">Will AI take our Jobs?</p>
                <p className="fs-6 text-opacity-25">#ai #javascript #programing #webdev</p>
              </a>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default PostDetails