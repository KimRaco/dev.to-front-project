
import React from "react";
import "./leftAside.css"

const LeftAside = () => {



    const categoryList = [
        { name: "Home", img: "home-icon.svg", alt: "homeIcon" },
        { name: "Listings", img: "listings-icon.svg", alt: "listingsIcon" },
        { name: "Podcasts", img: "podcast-icon.svg", alt: "podcastsIcon" },
        { name: "Videos", img: "video-icon.svg", alt: "videosIcon" },
        { name: "Tags", img: "tag-icon.svg", alt: "tagsIcon" },
        { name: "FAQ", img: "faq-icon.svg", alt: "faqIcon" },
        { name: "Forem Shop", img: "foremShop-icon.svg", alt: "foremShopIcon" },
        { name: "Sponsors", img: "sponsors-icon.svg", alt: "sponsors" },
        { name: "About", img: "about-icon.svg", alt: "aboutIcon", width: "20" },
        { name: "Contact", img: "contact-icon.svg", alt: "contactIcon" },
        { name: "Guides", img: "guides-icon.svg", alt: "guidesIcon", width: "20" },
        { name: " Software comparisons", img: "softwareComparison-icon.svg", alt: "softwareComparisonIcon", width: "20" },
    ]

    const categoryListOtherOptions = [
        { name: "Code of Conduct", img: "codeConduct-icon.svg", alt: "codeIcon", width: "20"  },
        { name: "Privacy Policy", img: "privacyPolicy-icon.svg", alt: "privacyPolicyIcon", width: "20"  },
        { name: "Terms of Use", img: "terms-icon.svg", alt: "termsIcon", width: "20" },
    ]

    return (

        <aside className="p-0 my-2 d-none d-md-block d-lg-block col-md-4 col-lg-2">
            <div>

                <div className="login-card card border-light text-bg-light mb-3 rounded border-light-subtle">
                    <div className="card-body p-3 ">
                        <h5 className="">DEV Community is a community of 1,033,482 amazing developers</h5>
                        <p className="card-subtitle my-3 text-body-secondary">We're a place where coders share, stay
                            up-to-date and grow their careers.</p>
                        
                    </div>
                </div>

                <ul className="list-options ">
                    {categoryList.map(category =>
                        <li className="p-1 rounded" key={category.name}>
                            <a className="text " href="">
                                <i>
                                    <img className='me-2' src={category.img} alt={category.alt} width={category.width}/>
                                </i>
                                {category.name}
                            </a>
                        </li>
                    )}

                </ul>

            </div>
            <div>
                <h6 className="py-3">Other</h6>
                <ul className="list-options">
                {categoryListOtherOptions.map(category =>
                        <li className="p-1 rounded" key={category.name}>
                            <a className="text" href="">
                                <i>
                                    <img className='me-2' src={category.img} alt={category.alt} width={category.width}/>
                                </i>
                                {category.name}
                            </a>
                        </li>
                    )}
                    
                </ul>
            </div>
            <div className="d-flex justify-content-around py-4 ">
                <img src="tw-icon.svg" alt="" />
                <img src="fb-icon.svg" alt="" />
                <img src="gh-icon.svg" alt="" />
                <img src="ig-icon.svg" alt="" />
                <img src="twt-icon.svg" alt="" />
            </div>
            <div>
                <div className="d-flex justify-content-between">
                    <h6>My Tags</h6>
                    <span>
                        <img src="crayons-icon.svg" alt="" />
                    </span>
                </div>
                <div className="list-tags">
                    <ul className="list-options">
                        <li><a className="text" href="">#webdev</a></li>
                        <li><a className="text" href="">#javascript</a></li>
                        <li><a className="text" href="">#css</a></li>
                        <li><a className="text" href="">#vscode</a></li>
                        <li><a className="text" href="">#git</a></li>
                        <li><a className="text" href="">#react</a></li>
                        <li><a className="text" href="">#devops</a></li>
                        <li><a className="text" href="">#swift</a></li>
                        <li><a className="text" href="">#kotlin</a></li>
                        <li><a className="text" href="">#aws</a></li>
                        <li><a className="text" href="">#angular</a></li>
                        <li><a className="text" href="">#docker</a></li>
                        <li><a className="text" href="">#python</a></li>
                        <li><a className="text" href="">#ruby</a></li>
                        <li><a className="text" href="">#rails</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="card mt-4">
                    <img src="image-bg-card.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title fs-5">Calling all early-career developers & coding mentors!</h6>
                        <p className="card-text">Join CodeNewbie Community: a supportive space for coding newbies to
                            connect & express themselves.</p>
                        <a href="#" className="">→Get in on the fun!</a>
                    </div>
                </div>

            </div>
        </aside>

    )
}

export default LeftAside