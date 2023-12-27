import React from "react"

interface props {
  name:string
  href:string
  body:string
  description:string
}
const Card : React.FC<props> = ({name,href,body,description}) => {
  return (
    (
      <div className='bg-zinc-200 rounded p-4 w-full h-auto'>
      <p className='text-2xl'>{name}</p>
      <p className='text-blue-400'>{href}</p>
      <p className='text-slate-900'>{body}</p>
      <p className='text-zinc-400 '>{description}</p>
      </div>
      )
    
  )
}

export default Card
