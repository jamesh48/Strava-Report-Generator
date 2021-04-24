import React from 'react';

const ProgressBar = (props) => {

  const fillerStyles = {
    width: `${props.completed}%`,
    height: 20,
    backgroundColor: 'turquoise',
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width .1s ease-in-out'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

return props.completed === 0 ? <div><br/><br/></div> :
 (
    <div id='progress-bar-container'>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${props.completed}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar;