import React from 'react'

const layout = ( {children} ) => {
  return (
    <div>
        <div className='bg-red-600  flex py-3 font-bold w-full gap-10 text-xl'>
        <h3>Sale is Live!</h3>
        <h3>Sale is Live!</h3>
        <h3>Sale is Live!</h3>
        <h3>Sale is Live!</h3>
        <h3>Sale is Live!</h3>
        <h3>Sale is Live!</h3>
                  </div>
  {children}
    </div>
      

  )
}

export default layout