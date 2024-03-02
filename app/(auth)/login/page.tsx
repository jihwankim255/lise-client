'use client'
import {signIn, signOut, useSession} from 'next-auth/react'
import {redirect} from 'next/navigation'
import React from 'react'

const LoginPage = () => {
  const {data: session} = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/')
    },
  })
  console.log(session?.user)
  return (
    <div>
      <div>{session?.user?.name}</div>
      <div>{session?.user?.email}</div>
      {session ? (
        <li>
          <button onClick={() => signOut()}>Sign out</button>
        </li>
      ) : (
        <>
          <li>
            <button onClick={() => signIn('google')}>
              Sign in with Google
            </button>
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

export default LoginPage
