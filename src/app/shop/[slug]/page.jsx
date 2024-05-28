import React from 'react'
import { AllShoeMains } from '../Shop1'
import { AllShoeMain } from '../Shop3'

export default function page({params}) {
  return (
    <div className=''> 
        {params.slug == 'shop-3' ?
        
         <AllShoeMain/> : <AllShoeMains/> 
         }
    </div>
  )
}
