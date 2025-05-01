import HomePage from '@/pages/HomePage'
import { Drawer, ListItem, ListItemText, Toolbar, Typography, List } from '@mui/material'

import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const DashboardLayout = () => {
    const location = useLocation()

    const routes = [
        { text: 'Home', path: 'home' },
        { text: 'Application Status', path: 'application-status' },
        { text: 'Assessment Upload', path: 'assessment-upload' },
        { text: 'Schedule Interview', path: 'schedule-Interview' },
        { text: 'Offer Management', path: 'offer-Management' },
    ]
    return (
        <div>

            <Drawer
                variant='permanent'
                anchor='left'
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: 240,
                        boxSizing: 'border-box'

                    },
                }}
            >
                <Toolbar />
                <Typography variant='h5' align='left' m={2} component={Link} to='/'>Dashboard</Typography>
                <List>
                    {routes.map((route) => (
                        <ListItem button key={route.text} component={Link} to={route.path}
                            sx={{
                                backgroundColor: location.pathname.includes(route.path) ? 'rgba(10, 10, 0, 0.08)' : 'transparent',


                            }}
                        >
                            <ListItemText primary={route.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

        </div >
    )
}

export default DashboardLayout