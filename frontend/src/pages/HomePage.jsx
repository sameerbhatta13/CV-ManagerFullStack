import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
import { api_url } from '../../config'
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
const HomePage = () => {
    const [list, setList] = useState([])
    console.log('first', list?.data)
    const rows = list?.data
    const fetchInterviewer = async () => {
        try {
            const res = await axios.get(`${api_url}/interviewer`)
            setList(res.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchInterviewer()
    }, [])

    const columns = [
        { field: 'name', headerName: 'Name', width: 200, },
        { field: 'position', headerName: 'Position', width: 200 },
        { field: 'department', headerName: 'Department', width: 200 },

    ]
    return (
        <div className='flex flex-col'>
            <h1 className='text-2xl text-neutral-500 underline underline-offset-4'>List of Interviewer</h1>

            <div className='flex my-5'>
                <Button variant='contained' color='primary' >Add Interviewer</Button>
            </div>

            <div className=''>
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        getRowId={(rows) => rows._id}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />

                </Paper>
            </div>
        </div>
    )
}

export default HomePage