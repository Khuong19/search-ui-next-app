import React from 'react'

const Content = ({dataURL}) => {
  return (
    <div className='dark:text-black'>
        <div dangerouslySetInnerHTML={{ __html: dataURL }} />
    </div>
  )
}

export default Content