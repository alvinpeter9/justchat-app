import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
  
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
      <div className='wrapper mobile'>
      {
          stream && 
            <div className='box'>
            <p>{name || 'Name'}</p>
                <video playsInline muted ref={myVideo} autoPlay id={callAccepted && !callEnded && 'myVideo'} />
            </div>
      }

      {
          callAccepted && !callEnded && (
            <div className='box'>
            <p>{call.name || 'Name'}</p>
                <video playsInline ref={userVideo} autoPlay />
            </div>
          )
      }

    </div>
  )
}

export default VideoPlayer;