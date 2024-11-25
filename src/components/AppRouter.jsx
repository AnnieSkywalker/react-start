import Error from '../Pages/Error'
import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './../router/routes'
import Login from './../Pages/Login'
import { AuthContext } from './../context/context'

function AppRouter() {
  const {isAuth} = useContext(AuthContext);
  return (
    isAuth
      ?
        <Routes>
            {privateRoutes.map(item => 
              <Route key={item.path} path={item.path} element={item.element}></Route>
            )}
            {/* <Route path='/error' element={<Error />}>
            </Route> */}
            {/* <Route path="*" element={<Navigate to="/error" replace />}/> */}
            {/* <Route path="*" element={<Posts/>}/> */}
        </Routes>
      :
        <Routes>
            {publicRoutes.map(item => 
              <Route key={item.path} path={item.path} element={item.element}></Route>
            )}
            {/* <Route path='/error' element={<Error />}>
            </Route> */}
            <Route path="*" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/error" replace />}/>
        </Routes>
  )
}

export default AppRouter