'use client'

import axios, { AxiosError } from 'axios'

export default function Payment() {
  const checkUser = async () => {
    try {
      const { status, data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/login/login2`,
        {
          withCredentials: true,
        },
      )
      if (status === 200 && data.welcomeBack) {
        console.log('welcome')
      } else {
        throw new Error('unexpected error')
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.message)
      } else {
        console.log(error)
      }
    }
  }

  return (
    <>
      <button onClick={checkUser}>check</button>
    </>
  )
}
