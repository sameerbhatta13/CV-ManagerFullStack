import { getScheduleInterview } from '@/services'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, Button, Typography, CardMedia } from '@mui/material'
import { api_url } from '../../config'


const Schedule = () => {
    const [interviewList, setInterview] = useState()
    console.log(interviewList)
    const getInterview = async () => {
        const data = await getScheduleInterview()
        setInterview(data?.data || [])
    }

    useEffect(() => {
        getInterview()
    }, [])
    return (


        <div className='flex flex-row gap-16'>

            {interviewList?.map((item, index) => {
                return (
                    <Card sx={{ maxWidth: 245 }} key={index}>

                        <CardMedia
                            sx={{ height: 140 }}
                            image={`${api_url}/image/${item?.candidate?.file}`}

                        />


                        <a href={`${api_url}/image/${item?.candidate?.file}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ color: '#1976d2', textDecoration: 'underline', display: 'block', marginLeft: '15px', marginTop: '8px' }}

                        >
                            view Resume
                        </a>


                        <CardContent>

                            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                <h1><b>Candidate Name:</b> {item?.candidate?.name}</h1>
                                <h1 > <b>Interview At:</b> {item?.interviewAt?.replace('T', ' ').replace('Z', ' ').slice(0, 16)}</h1>
                                <h1 ><b>Interviewer Name:</b> {item?.interviewer?.name}</h1>
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })
            }
        </div>



    )
}

export default Schedule