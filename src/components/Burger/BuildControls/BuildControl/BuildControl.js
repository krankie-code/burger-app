import React from 'react'

import style from './BuildControl.module.css';

export default function BuildControl(props) {
    return (
        <div className = {style.BuildControl}>
            <div className = {style.Label}>{props.label}</div>
            <button className = {style.More}  onClick = {props.added}>More</button>
            <button className = {style.Less} onClick = {props.removed} disabled = {props.disabled}>Less</button>
        </div>
    )
}
