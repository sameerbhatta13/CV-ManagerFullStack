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
    const time = interviewList?.[0]?.interviewAt?.replace('T', ' ').replace('Z', ' ').slice(0, 16)
    console.log(time)


    useEffect(() => {
        getInterview()
    }, [])
    return (
        <div>
            <h1>this is from Scheduling Interview</h1>
            <div>
                <h1>details of All Schedule Interview</h1>
                <div className='flex flex-row gap-16'>

                    {interviewList?.map((item, index) => {
                        return (
                            <Card sx={{ maxWidth: 245 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={`${api_url}/image/${interviewList?.[0].candidate?.file}`}

                                />

                            </Card>
                        )
                    })
                    }

                </div>


            </div>
        </div>
    )
}

export default Schedule