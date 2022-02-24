import { useState, useContext } from 'react'
import { SocketContext } from '../SocketContext'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { MdFileCopy, MdAddCall, MdCallEnd } from 'react-icons/md';


const Options = ({ children }) => {
    
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);

  const [idToCall, setidToCall] = useState('');
  
  return (
    <div className='box'>
      <div className='wrapper'>

        <div className='form'>
          <h4>Account Info</h4>
          <input type='text' value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} />
          <CopyToClipboard text={me}>
            <button className='button'> <MdFileCopy className='icon' /> Copy your ID </button>
          </CopyToClipboard>
        </div>

        <div className='form'>
        <h4>Make a Call</h4>
          <input type='text' value={idToCall} placeholder='Paste ID to call' onChange={(e)=>setidToCall(e.target.value)} />
          {
            callAccepted && !callEnded ? <button className='button' style={{backgroundColor:'#e60000'}} 
                                            onClick={leaveCall}> 
                                              <MdCallEnd className='icon' /> Hang Up </button>
            : <button className='button' onClick={()=>callUser(idToCall)}> 
              <MdAddCall className='icon' /> Call </button>
          }
        </div>
       
      </div>
      {children} 
    </div>
  )
}

export default Options