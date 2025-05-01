import { Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import DashboardLayout from './DashboardLayout'
import InputForm from '../pages/InputForm'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <DashboardLayout />
                <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />

                    <Outlet />
                </Box>

            </Box>


        </>
    )
}

export default Dashboard