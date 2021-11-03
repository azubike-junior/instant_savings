import React from 'react'
import UserDataAuth from '../../components/UserDataAuth';
import Header from './../../components/Header/index';

export default function UserDataAuthPage() {
    return (
        <div className="bg-lightgrey relative">
        {/* <div className="max-w-5xl mx-auto h-screen"> */}
        <Header/>
        <UserDataAuth/>
        {/* </div> */}
      </div>
    )
}
