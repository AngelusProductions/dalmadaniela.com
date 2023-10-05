import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import PacmanLoader from "react-spinners/PacmanLoader"
import * as Yup from 'yup'

import { paths } from '../../../constants/paths'
import { superLogin } from '../../../api/superClass'
import { superLoginRequest, superLoginFailure, superLoginSuccess, clearCurrentSuperInfo } from '../../../actions/superClass'

import './styles/index.scss'

const t = {
  title: 'Log In to',
  superClass: 'SuperClass',
  emailLabel: 'Email',
  orderLabel: 'Order #',
  button: 'Log In'
}

export const SuperLogin = ({ onSuperSubmit, superUser, loading, error }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [orderNumber, setOrderNumber] = useState('')

    useEffect(() => {
        if(superUser) {
            navigate(paths.superClass.videos)
        } else {
            dispatch(clearCurrentSuperInfo())
        }
    }, [])

    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        orderNumber: Yup.number().positive().required()
    });

    const validateEmail = (emailString, orderNumberString) => {
        try {
            schema.validateSync({ 
                email: emailString, 
                orderNumber: parseInt(orderNumberString) 
            });
            return true;
        } catch (e) {
            dispatch(superLoginFailure('Invalid values given, sorry!'))
            return false;
        }
    }
  
    const onSubmitClick = () => {
        if(!validateEmail(email, orderNumber)) return
        onSuperSubmit(email, orderNumber).then(data => {
            if(data && data.superUser) {
                navigate(paths.superClass.videos)
            } else {
                if(!data || !data.error) {
                    dispatch(superLoginFailure('Something happened, sorry!'))
                } else {
                    dispatch(superLoginFailure(data.error))
                }
            }
        })
    }

    return (
        <div id='superLoginPageContainer'>
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
                
            <div id='superLoginButtonContainer'>
                {<PacmanLoader id='superClassLoginLoader' color='#FEFF7C' loading={loading} />}
                {!loading && <button onClick={onSubmitClick} className='clickable'>{t.button}</button>}
                {error && <p id='superClassLoginError'>{error}</p>}
            </div>
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
        const res = await superLogin({ email, orderNumber })

        if(!res) throw('Server did not respond with anything.')

        const { superUser, error } = res

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