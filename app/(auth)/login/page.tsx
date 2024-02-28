'use client'
import {signIn, signOut, useSession} from 'next-auth/react'
import React from 'react'

const Login = () => {
  const session = useSession()
  console.log(session)
  return (
    <div>
      {session.data ? (
        <li>
          <button onClick={() => signOut()}>Sign out</button>
        </li>
      ) : (
        <>
          <li>
            <button onClick={() => signIn('google')}>Sign in with Google</button>
          </li>
          <li>
            <button onClick={() => signIn('kakao')}>Sign in with Kakao</button>
          </li>
          <li>
            <button onClick={() => signIn('naver')}>Sign in with Naver</button>
          </li>
        </>
      )}
    </div>
  )
}

export default Login
