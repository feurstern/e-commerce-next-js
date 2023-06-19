'use client'

import { global } from "styled-jsx/css"
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"

export default function App({children}){
  return(
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}