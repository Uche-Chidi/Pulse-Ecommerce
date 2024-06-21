"use client"
import React, { createContext, useEffect, useState } from 'react'

const SideBarContext = createContext()

const SidebarProvider = ({ children }) => {
    const [val, setVal] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [inputVal, setInputVal] = useState(1);

    const [isOpen, setIsOpen] = useState(false)
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
      setHasMounted(true)

      if (typeof window !== 'undefined') {
        const savedVal = localStorage.getItem("Item num")
        const parsedVal = parseInt(savedVal, 10)
        setVal(isNaN(parsedVal) ? 0 : parsedVal)

        const savedCartItems = localStorage.getItem("Cart items")
        try{
          setCartItems(savedCartItems ? JSON.parse(savedCartItems): [])
        } catch (error) {
          console.error("Error parsing cart items from local storage:", error)
          setCartItems([])
        }
        }
      },[])

      useEffect(() => {
        if (hasMounted) {
          localStorage.setItem("Item num", val.toString())
        }
      }, [hasMounted, val])

      useEffect(() => {
        if (hasMounted) {
          localStorage.setItem("Cart items", JSON.stringify(cartItems))
        }
      }, [hasMounted, cartItems])
  return (
    <div>
        <SideBarContext.Provider value={{val, setInputVal, inputVal, setVal, cartItems, setCartItems}}>
            {children}
        </SideBarContext.Provider>
    </div>
  )
}

export {SideBarContext, SidebarProvider} 