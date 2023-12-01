"use client"


import { AllBookList } from '@/Components/Department/AllBookList'
import { DepartmentBanner } from '@/Components/Department/Department'
import { useParams } from 'next/navigation'
import React from 'react'

 const DiplomaSubjec = () => {

    const {id }= useParams()
    let cetagory = ''

    if(id ==="CT"){
        cetagory = 'Civil Technology'
    }
    if(id ==="ET"){
        cetagory = 'Electrical Technology'
    }


  return (
    <div>{cetagory}
    
    <DepartmentBanner/>

    <AllBookList/>
    
    </div>
  )
}

export default DiplomaSubjec