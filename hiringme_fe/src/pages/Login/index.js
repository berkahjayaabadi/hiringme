import React from 'react'
import '../../assets/css/index.css'

const Login = () => {
  return (
      <>
        <div className='w-full bg-black'>
            <div id="auth-img" className='w-fit mx-auto -z-10'>
                <img className='h-screen p-10' src={require('../../assets/img/auth/auth-img-placeholder.svg').default} />
            </div>


            <div id="auth-form" className=''>
                <h2 className='text-lg font-bold'>Helo, Pewpeople</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>

                <form>
                    <label for="email">
                        email
                    </label>
                    <input type="email" />

                </form>
            </div>
        </div>
      </>
  )
}

export default Login