'use client'
import React from 'react'
import {useParams} from 'next/navigation'
import projects from '@/data/projects.json'

function page() {
  
  const {project_id} = useParams()

  const project = projects.find((project: any) => project.project_id == project_id)


  return (
    <div>
      {project?.project_title}
      {project?.project_funder}
    </div>
  )
}

export default page