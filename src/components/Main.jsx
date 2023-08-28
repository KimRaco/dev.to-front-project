import React from "react";
import { useState, useEffect } from "react";
import Posts from "./Posts";
import "./main.css"
import { PUBLIC_API_URL } from "../constants/url"

const Main = ({search}) => {

    const API_URL = `${PUBLIC_API_URL}/posts`

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const [searchFilter, setSearchFilter] = useState([]);
    const [relevantBtnActive, setRelevantBtnActive] = useState(false)
    const [latestBtnActive, setLatestBtnActive] = useState(false)
    
   
   
   

    const doFetch = async (URL, setter) => {
        const res = await fetch(`${URL}`);
        const response = await res.json();
        setter(response.data.posts);
        setIsLoading(false);
    }

    useEffect(() => {
        doFetch(API_URL, setData);
        setIsLoading(true);

    }, []);

    //Search filter

    const filterPosts = (search, posts) => {
        let filteredPosts = posts.filter(post => post.title.toUpperCase().includes(search.toUpperCase()));
        setSearchFilter(filteredPosts)
    }
    useEffect(() => {
        if(search)
            filterPosts(search, data)
        else 
            setSearchFilter([])
        

    }, [search])

    //Filter by Latest / relevant

    const handleClick = event => { filterByCategory(event.target.value)}; 


    const filterByCategory = (category) => {
        if (category === 'relevant') {
          setRelevantBtnActive(true)
          setLatestBtnActive(false)
          doFetch(API_URL, setData)
        } else {
    
          const NEW_URL = API_URL + "/sortedPosts";
          setRelevantBtnActive(false)
          setLatestBtnActive(true)
          doFetch(NEW_URL, setData)
        }
      }
    
    

    return (
        <main className="col-12 col-lg-7 col-md-8">
            <div className="tabbar-main">
                <ul className="nav  fs-6 my-2">
                    <li className="nav-items rounded ">
                        <button type="button" value="relevant" onClick={handleClick} className={relevantBtnActive? 'fw-bold rounded nav-link text-black' : 'rounded nav-link text-black'} 
                            id="relevant">Relevant</button>
                    </li>
                    <li className="nav-items rounded">
                        <button type="button" value="latest" onClick={handleClick} id="order-Post" className={latestBtnActive? 'fw-bold rounded nav-link text-black' : 'rounded nav-link text-black'}
                            href="">Latest</button>
                    </li>
                    <li className="nav-items rounded">
                        <button type="button" className="rounded nav-link text-black-50" href="">Top</button>
                    </li>
                </ul>
            </div>

            <section id="posts-home ">
                {isLoading &&  <div className="d-flex justify-content-center"> <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>}
                {!isLoading && (
                    <>
                       <Posts posts={ searchFilter.length ? searchFilter : data } />
                       
                    </>
                )}


            </section>

        </main>
    )
}

export default Main

