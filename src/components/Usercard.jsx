import React from 'react'

const Usercard = (props) => {
  return (
    <div className='user-details'>
        <div className='user-avatar'>
            <img src={props.avatar} alt="" />
        </div>
        <div className='user-info'>
            <div className='user-cred'>
                <p>Name : </p>
                <p>{props.name}</p>
            </div>
            <div className='user-cred'>
                <p>Email : </p>
                <p>{props.email}</p>
            </div>
        </div>
    </div>
  )
}

export default Usercard;