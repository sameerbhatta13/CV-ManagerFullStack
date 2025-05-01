import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './src/components/Dashboard'

import InputForm from './src/pages/InputForm'
import Status from './src/pages/Status'
import Schedule from './src/pages/Schedule'
import OfferManagement from '@/pages/OfferManagement'
import Assessment from '@/pages/Assessment'
import HomePage from '@/pages/HomePage'
const MyRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard />} >
                        <Route path='/' element={<HomePage />} />
                        <Route path='home' element={<InputForm />} />
                        <Route path='application-status' element={<Status />} />
                        <Route path='assessment-upload' element={<Assessment />} />
                        <Route path='schedule-Interview' element={<Schedule />} />
                        <Route path='offer-Management' element={<OfferManagement />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default MyRoutes