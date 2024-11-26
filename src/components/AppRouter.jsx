import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from './../context/context'
import { privateRoutes, publicRoutes } from './../router/routes'

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
            </Route> 
            <Route path="*" element={<Navigate to="/error" replace />}/> */}
        </Routes>
        :
        <Routes>
            {publicRoutes.map(item => 
                <Route key={item.path} path={item.path} element={item.element}></Route>
            )}
            {/* <Route path='/error' element={<Error />}></Route> */}
            {/* <Route path="*" element={<Navigate to="/error" replace />}/> */}
        </Routes>
    )
}

export default AppRouter
