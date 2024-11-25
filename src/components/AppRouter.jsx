import Posts from 'Pages/Posts'
import Error from '../Pages/Error'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from 'router/routes'

function AppRouter() {
  return (
    <Routes>
        {routes.map(item => 
          <Route path={item.path} element={item.element}></Route>
        )}
        <Route path='/error' element={<Error />}>
        </Route>
        <Route path="*" element={<Navigate to="/error" replace />}/>
    </Routes>
  )
}

export default AppRouter