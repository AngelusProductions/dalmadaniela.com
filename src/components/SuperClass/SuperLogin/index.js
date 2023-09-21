import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

import HomeIcon from '../../UI/HomeIcon'

import { paths } from '../../../constants/paths'
import { superLogin } from '../../../api/superClass'
import { superLoginRequest, superLoginFailure, superLoginSuccess, clearCurrentSuperInfo } from '../../../actions/superClass'

import './styles/index.scss'

const t = {
  title: 'Please Log In to Watch',
  superClass: 'SuperClass',
  emailLabel: 'Email:',
  orderLabel: 'Order Number:',
  button: 'Log In'
}

export const SuperLogin = ({ onSuperSubmit, loading, error }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [orderNumber, setOrderNumber] = useState('')

    useEffect(() => {
        dispatch(clearCurrentSuperInfo())
    }, [])
  
    const onSubmitClick = () => {
        onSuperSubmit(email, orderNumber).then(data => {
            if(data.superUser) {
                navigate(paths.superClass.videos)
            } else {
                dispatch(superLoginFailure(data.error))
            }
        })
    }

    return (
        <div id='superLoginPageContainer'>
            <HomeIcon />
            
            <h1>{t.title}&nbsp;<span>{t.superClass}</span></h1>

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
                
            {!loading && <button onClick={onSubmitClick} className='clickable'>{t.button}</button>}
            
            {error && <p id='superClassLoginError'>{error}</p>}
        </div>
    )
}

const mapState = state => {
    const { superUser, loading, error } = state.superClass
    return {
        superUser,
        loading,
        error
    }
}

const mapDispatch = dispatch => ({
  onSuperSubmit: async (email, orderNumber) => {
    dispatch(superLoginRequest())
    try {
        const { superUser, error } = await superLogin({ email, orderNumber })
        if(error) {
            dispatch(superLoginFailure(error))
            return { superUser: null, error }
        } else {
            dispatch(superLoginSuccess(superUser))
            return { superUser, error: null }
        }
    } catch (e) {
        dispatch(superLoginFailure('Something happened, sorry!'))
        console.warn(e)
        return null
    }
  }
})

export default connect(mapState, mapDispatch)(SuperLogin)