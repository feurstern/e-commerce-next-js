'use client'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { global } from 'styled-jsx/css'


export default function Home() {
  const { data: session } = useSession()
  if(!session) {
    return(
      <div className={"bg-blue-900 w-screen h-screen flex items-center "}>
        <div className='text-center w-full'>
        <button className='bg-white p-2  px-4 rounded-lg'>Login with Googles </button>
        </div>
      </div>
    )  
  }

}
