import React from 'react'
import ReactModal from 'react-modal'

export default function Modal({ children, title = '', overlayStyle = {}, contentStyle = {}, showModal, handleClose }) {
  let overlay = {
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    ...overlayStyle
  }

  const mycustomStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '30%',
      height: '300px'
    }
  };

  let content = {
    ...contentStyle
  }

  const style = {
    overlay,
    content
  }

  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={handleClose}
      contentLabel={title}
      style={title === 'Login'? mycustomStyles : style}
    >
      <div className='text-right' style={{ marginBottom: 5 }} onClick={handleClose}>
        <div className='glyphicon glyphicon-remove' style={{ cursor: 'pointer' }} />
      </div>
      {title && <h3 style={{ borderBottom: '2px solid grey', paddingRight: 40, marginTop: -20 }}>{title}</h3>}
      {children}
    </ReactModal>
  )
}

