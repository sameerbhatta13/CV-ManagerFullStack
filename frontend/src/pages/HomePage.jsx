import React from 'react'
import { Button } from '@mui/material'
const HomePage = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='text-2xl text-neutral-500 underline underline-offset-4'>List of Interviewer</h1>

            <div className='flex my-5'>
                <Button variant='contained' color='primary' >Add Interviewer</Button>
            </div>
        </div>
    )
}

export default HomePage