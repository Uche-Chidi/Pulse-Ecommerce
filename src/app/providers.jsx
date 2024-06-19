"use client"
import React, { createContext, useState } from 'react'

const SideBarContext = createContext()

const SidebarProvider = ({ children }) => {
    const [val, setVal] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [inputVal, setInputVal] = useState(1);
  return (
    <div>
        <SideBarContext.Provider value={{val, setInputVal, inputVal, setVal, cartItems, setCartItems}}>
            {children}
        </SideBarContext.Provider>
    </div>
  )
}

export {SideBarContext, SidebarProvider} 