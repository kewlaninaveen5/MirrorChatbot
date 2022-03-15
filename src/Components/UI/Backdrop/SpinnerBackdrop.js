import React from 'react';
import Spinner from '../Spinner/Spinner';
import './Backdrop.css';

const SpinnerBackdrop = (props) => (
     props.show ? <div  className='backdrop' onClick={props.clicked}>
         <div className='spinner'>
         <Spinner />
         <div className='text-to-show' >{props.textToShow}</div>

         </div>
     </div> : null
)

export default SpinnerBackdrop;