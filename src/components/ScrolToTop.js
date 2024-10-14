import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrolToTop = () => {
    const {pathname} = useLocation();
    // console.log(pathname)
    useEffect(()=>{
        window.scrollTo(0,0)
        // its a built in function and take the coordinates

    },[pathname])

  return null
}
