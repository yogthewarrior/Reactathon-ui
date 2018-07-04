import React, { Component } from 'react'
import Header from '../../Layout/components/Header'
import RegistrationForm from './RegistrationForm'

export default class CreateEvent extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <Header />
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <RegistrationForm />
                </div>
                <div className='col-md-2'></div>
            </div>
        )
    }
}
