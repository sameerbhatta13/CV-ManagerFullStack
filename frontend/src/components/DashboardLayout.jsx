import HomePage from '@/pages/HomePage'
import { Drawer, ListItem, ListItemText, Toolbar, Typography, List, useMediaQuery, IconButton, useTheme, AppBar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const DashboardLayout = () => {
    const location = useLocation()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const [mobileOpne, setMObileOpen] = useState(false)

    const handleMobileToggle = () => {
        setMObileOpen(!mobileOpne)
    }
    const routes = [
        { text: 'Home', path: 'home' },
        { text: 'Application Status', path: 'application-status' },
        { text: 'Assessment Upload', path: 'assessment-upload' },
        { text: 'Schedule Interview', path: 'schedule-Interview' },
        { text: 'Offer Management', path: 'offer-Management' },
    ]
    return (
        <div>

            {
                isMobile && (
                    <AppBar position='fixed' sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                        <Toolbar>
                            <IconButton
                                color='inherit'
                                edge='start'
                                onClick={handleMobileToggle}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography>Dashboard</Typography>
                        </Toolbar>

                    </AppBar>
                )
            }

            <Drawer
                variant={isMobile ? 'temporary' : 'permanent'}
                open={isMobile ? mobileOpne : true}
                onClose={handleMobileToggle}
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