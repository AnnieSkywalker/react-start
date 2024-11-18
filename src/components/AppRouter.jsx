import About from 'Pages/About'
import Error from 'Pages/Error'
import Posts from 'Pages/Posts'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Posts />} />
        <Route path='/about' element={<About />}>
        </Route>
        <Route path='/posts' element={<Posts />}>
        </Route>
        <Route path='/error' element={<Error />}>
        </Route>
        <Route path="*" element={<Navigate to="/error" replace />}/>
    </Routes>
  )
}

export default AppRouter