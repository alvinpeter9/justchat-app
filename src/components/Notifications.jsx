import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'

const Notifications = () => { 
  const { call, callAccepted, answerCall } = useContext(SocketContext);
   
  return (
    <>
    {
      call.isReceivingCall && !callAccepted && (
        <div className='wrapper' style={{padding:'1rem', justifyContent:'center'}}>
         <h4> {call.name} </h4> <span className='call__text'>is calling....</span>
         <button className='button' style={{width:'100px', marginLeft:'1rem', backgroundColor:'#4caf50'}} onClick={answerCall}>
            Answer
          </button>
        </div>
      )
    }
    </>
  )
}

export default Notifications