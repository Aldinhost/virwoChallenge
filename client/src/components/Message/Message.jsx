import React from 'react'

const Message = ({status,msg}) => {
  return (

    <div className={status === 'Error' ? `alert text-center alert-danger`: `alert text-center alert-success`} role="alert">
        {msg}
    </div>
    
  )
}

export default Message