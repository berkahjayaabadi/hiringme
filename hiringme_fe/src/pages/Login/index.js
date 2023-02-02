import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/index.css'
import authImg from '../../assets/img/auth/auth-img-placeholder.svg'

const Login = () => {
  return (
      <>
        <div className='lg:flex'>
            <div id="auth-img" className='w-fit mx-auto -z-10 lg:fle' style={{background: `url(${authImg})`}}>
                {/* <img className='h-screen p-10' src={require('../../assets/img/auth/auth-img-placeholder.svg').default} /> */}
            </div>


            <div id="auth-form" className="p-10 text-white h-screen lg:flex-1" style={{background: `url(${authImg})`}}>
                <h2 className='text-lg font-bold -10 md:text-center'>Helo, Pewpeople</h2>
                <p className='mb-5 mt-3 md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>

                <form className='md:flex md:flex-col md:w-3/4 md:mx-auto'>
                    <label for="email">
                        Email
                    </label>
                    <input className='block w-full h-10 mt-2 rounded-lg p-2 mb-4' type="email" placeholder='Masukan alamat email'/>

                    <label for="password" className="">
                    Kata sandi
                    </label>
                    <input className='block w-full h-10 mt-2 rounded-lg p-2 mb-5' type="password" placeholder='Masuk kata sandi'/>

                    <Link className='' to="/forgotPassword">Lupa kata sandi?</Link>

                    <button type='submit' className='mb-4 mt-5 w-full px-4 py-2 rounded-sm block bg-primary'>Masuk</button>

                    <p>Anda belum punya akun? <Link className='text-primary' to="/registworker">Daftar disini</Link></p>
                </form>

            </div>
        </div>
      </>
  )
}

export default Login