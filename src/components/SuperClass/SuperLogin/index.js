import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import HomeIcon from '../../UI/HomeIcon'

import { paths } from '../../../constants/paths'

import './styles/index.scss'

const t = {
  title: 'Please Log In to Watch SuperClass',
  emailLabel: 'Email:',
  orderLabel: 'Order Number:',
  button: 'Log In'
}

export const SuperLogin = () => {
    const [email, setEmail] = useState('')
    const [orderNumber, setOrderNumber] = useState('')
  
    useEffect(() => {

    }, [])

    const onSubmitClick = () => {

    }

    return (
        <div id='superLoginPageContainer'>
            <HomeIcon />
            
            <h1>{t.title}</h1>

            <div id='superLoginFieldsContainer'>
                <div className='superLoginField'>
                    <label>{t.emailLabel}</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='superLoginField'>
                    <label>{t.orderLabel}</label>
                    <input value={orderNumber} onChange={e => setOrderNumber(e.target.value)} />
                </div>
            </div>
                
            <button onClick={onSubmitClick} className='clickable'>{t.button}</button>
        </div>
    )
}

const mapState = state => {

}

const mapDispatch = dispatch => ({
  
})

export default connect(mapState, mapDispatch)(SuperLogin)