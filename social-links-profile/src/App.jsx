import { useState } from 'react'
import MyImage from './assets/images/akash_pic.png'
import SocialLink from './components/SocialLink'
import './App.css'

function App() {
  return (
    <div className=" bg-offBlack w-screen min-h-screen flex justify-center items-center">
      <main className="h-full my-16 w-[80%] sm:h-[65%] sm:w-[19%] bg-darkGrey rounded-md flex flex-col justify-center items-center p-6 gap-3">
        <img className='h-16 w-16 rounded-[50%]' src={MyImage} alt="picture of Akash" />
        <section className='flex flex-col gap-3'>
          <section className='flex flex-col items-center'>
            <h1 className="text-white text-lg">Akash</h1>
            <h2 className="text-green text-[0.6rem]">Haryana, India</h2>
          </section>
          <h2 className="text-white text-[0.6rem] tracking-widest font-light">"Full Stack Developer"</h2>
        </section>

        <section className='w-full flex flex-col gap-3 text-[0.6rem] tracking-wide font-normal'>  
          <SocialLink text="GitHub" url="https://github.com/akashjangra2002" />
          <SocialLink text="Frontend Mentor" url="https://www.frontendmentor.io/profile/akashjangra2002" />
          <SocialLink text="LinkedIn" url="https://www.linkedin.com/in/akashjangra1/" />
          <SocialLink text="Twitter" url="https://twitter.com/chill_sky__" />
          <SocialLink text="Instagram" url="https://www.instagram.com/idontknowakash" />
        </section>

      </main>
    </div>
  )
}

export default App
