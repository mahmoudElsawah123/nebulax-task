import React from 'react'

const DecorativeElement = () => {
  return (
    <>
     <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 opacity-10 rounded-full translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 opacity-10 rounded-full translate-y-1/2" /> 
    </>
  )
}

export default DecorativeElement
