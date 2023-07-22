import React from 'react'
import { useForm } from 'react-hook-form'


const LogIn = () => {

    const BASE_URL = "http://localhost:8080"


    const { register, handleSubmit, formState: {errors} } = useForm()

    
    const customSubmit = ( async (data) => { 

        try {
            const response = await fetch(`${BASE_URL}/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            const userLoggined = await response.json();
            await localStorage.setItem('token', userLoggined.data.token);
            window.open( '/','_self');
          } catch (error) {
        
            alert('Something went wrong, try again')
          }

    })

    return (
        <>
            <div className="modal fade" id="logIn" tabIndex="-1" aria-labelledby="logInLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span>
                                <h2 className="card-title text-center fs-2">Welcome to DEV Community</h2>
                                <p className="card-subtitle text-center ">DEV Community is a community of 1,034,929 amazing developers
                                </p>

                            </span>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>




                        <div className="modal-body">

                            <div className="d-grid text text-center mb-2">
                                <button className="btn btn-dark py-2 " type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
                                        aria-labelledby="anpyooas08avq213r4ncezajfs7izz8r" aria-hidden="true"
                                        className="crayons-icon me-3">
                                        <title id="anpyooas08avq213r4ncezajfs7izz8r">apple</title>
                                        <path
                                            d="M11.752 6.657c.828 0 1.867-.56 2.486-1.307.56-.677.969-1.623.969-2.568 0-.129-.012-.257-.036-.362-.922.035-2.03.618-2.696 1.4-.525.596-1.004 1.53-1.004 2.487 0 .14.024.28.035.326.059.012.152.024.245.024zM8.834 20.78c1.132 0 1.634-.759 3.046-.759 1.436 0 1.75.736 3.011.736 1.238 0 2.066-1.144 2.848-2.265.876-1.284 1.238-2.544 1.261-2.603-.082-.023-2.451-.992-2.451-3.711 0-2.358 1.867-3.42 1.972-3.502-1.237-1.774-3.116-1.82-3.63-1.82-1.389 0-2.52.84-3.233.84-.77 0-1.786-.794-2.988-.794-2.288 0-4.61 1.89-4.61 5.462 0 2.218.863 4.564 1.925 6.082.91 1.284 1.705 2.334 2.849 2.334z"
                                            fill="#ffffff"></path>
                                    </svg>Continue with Apple</button>
                            </div>

                            <div className="d-grid gap-2 text text-center mb-2">
                                <button className="btn btn-dark py-2 " type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
                                        aria-labelledby="advlmon8if7ntekhhwgyxhjgw70brbmh" aria-hidden="true"
                                        className="crayons-icon me-3">
                                        <title id="advlmon8if7ntekhhwgyxhjgw70brbmh">github</title>
                                        <path
                                            d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"
                                            fill="#ffffff"></path>
                                    </svg>Continue with GitHub</button>
                            </div>

                            <div className="d-grid gap-2 text text-center mb-2">
                                <button className="btn btn-info text-light py-2 " type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img"
                                        aria-labelledby="a18p457cz6l4n8vcvkyi65hbvekvvkuf" aria-hidden="true"
                                        className="crayons-icon me-3">
                                        <title id="a18p457cz6l4n8vcvkyi65hbvekvvkuf">twitter</title>
                                        <path
                                            d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
                                            fill="#ffffff"></path>
                                    </svg>Continue with Twitter</button>
                            </div>
                            
                            <form onSubmit={ handleSubmit(customSubmit) }  id="login-form">
                                <div className="mb-3">
                                    <label for="mail" className="form-label fw-semibold ">Email</label>
                                    <input type="email" className="form-control" {...register('email', {required:true}, {match: /.*@.*\..*/,})}  />
                                    {errors.email?.type === 'required' && <small className='text-danger'>Please provide an email adress</small>}
                                    {errors.email?.type === 'match' && <small className='text-danger'>Please provide a properly formatted email adress</small>}
                                </div>
                                <div className="mb-3">
                                <label for="name" className="form-label fw-semibold">Name</label>
                                    <input type="text" className="form-control" {...register('name', {required:true})}  />
                                    {errors.name?.type === 'required' && <small className='text-danger'>Please provide a name</small>}
                                </div>
                                <div className="mb-3">
                                <label for="pass" className="form-label fw-semibold">Password</label>
                                    <input type="password" className="form-control" {...register('password', {required:true})}  />
                                    {errors.password?.type === 'required' && <small className='text-danger'>Please provide a password</small>}

                                </div>
                               
                                <div className="d-grid gap-2 text text-center">
                                <button className="btn btn-primary py-2" type="submit" id="login_button">Continue</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div >


        </>
    )
}

export default LogIn