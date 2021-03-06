import React from 'react';

import './userRecordItem.css';

const UserRecordItem = (props) => {
  return (
    <div className="col-lg-3 col-md-6 my-2" style={{
      width: '100%',
      height: '160px',
      overflow: 'hidden'
    }}>
      <div className={`${props.dir} slide rounded bg-danger text-white`} style={{
        animation: `slide 0.5s ${props.delay}s forwards`
      }}>
        <h4 className="p-4" style={{
          width: '100%',
          height: '90px',
          textAlign: 'left'
        }}>
          { props.title }
        </h4>
        <div className="pr-4 lead" style={{
          width: '100%',
          height: '70px',
          textAlign: 'right'
        }}>
          { props.text }
        </div>
      </div>
    </div>
  )
}

export default UserRecordItem;