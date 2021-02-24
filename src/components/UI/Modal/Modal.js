import { checkPropTypes } from 'prop-types'
import React from 'react'

import styles from './Modal.module.css'
import Auxilliar from '../../../hoc/Auxilliar/Auxilliar';
import Backdrop from '../Backdrop/Backdrop';

export default function Modal(props) {
    return (
        <Auxilliar>
        <Backdrop show = {props.show} clicked = {props.modalClosed}/>
        <div 
        className = {styles.Modal}
        style = {{transform:props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
                }}>
            {props.children}
        </div>
        </Auxilliar>
    )
}
