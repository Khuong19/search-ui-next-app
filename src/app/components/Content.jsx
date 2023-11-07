import React from 'react'

const Content = ({dataURL}) => {
  return (
    <div className=''>
        <div dangerouslySetInnerHTML={{ __html: dataURL }} />
    </div>
  )
}

export default Content