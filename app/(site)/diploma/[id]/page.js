"use client"


import { AllBookList } from '@/Components/Department/AllBookList'
import { DepartmentBanner } from '@/Components/Department/Department'
import { useParams } from 'next/navigation'
import React from 'react'

 const DiplomaSubjec = () => {

    const {id }= useParams()
    let DepartmentName = ''

    if(id ==="CT"){
        DepartmentName = 'Civil '
    }
    if(id ==="ET"){
        DepartmentName = 'Electrical '
    }
    if(id ==="MT"){
        DepartmentName = 'Mechanical  '
    }
    if(id ==="CST"){
        DepartmentName = 'Computer Science '
    }
    if(id ==="ETT"){
        DepartmentName = 'Electronic '
    }
    if(id ==="PT"){
        DepartmentName = 'Power '
    }
    if(id ==="EMT"){
        DepartmentName = 'Electromedical'
    }


  return (
    <div>
    
    <DepartmentBanner department={DepartmentName}/>

    <AllBookList department={DepartmentName}/>
    
    </div>
  )
}

export default DiplomaSubjec