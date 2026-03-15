import React from 'react'
import UrlForm from '../components/Urlform'
import Navbar from '../components/navbar'

const HomePage = () => {
  return (
  <div className="min-h-screen bg-gray-100">

  {/* <Navbar /> */}

  <div className="flex items-center justify-center p-4 mt-20">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold text-center mb-6">
        URL Shortener
      </h1>

      <UrlForm />
    </div>
  </div>

</div>
  )
}

export default HomePage