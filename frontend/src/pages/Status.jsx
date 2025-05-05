import axios from 'axios'
import { api_url } from '../../config'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Button } from '@mui/material'
import ModalUI from '@/materialUI/ModalUI'


const Status = () => {
    const [cvlist, setCVList] = useState([])
    const [changeStatus, setChangeStatus] = useState('')
    const [activeStatus, setActiveStatus] = useState('All')
    const [open, setOpen] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)
    const row = cvlist?.data

    const status = ['All', 'shortlisted', 'interviewed', 'Hired', 'Rejected']
    const color = {
        All: '#4caf50',
        shortlisted: '#2196f3',
        interviewed: '#ff9800',
        Hired: '#9c27b0',
        Rejected: '#f44336'
    }
    const fetchCVlist = async () => {
        try {
            const res = await axios.get(`${api_url}/cv`)
            setCVList(res.data)

        } catch (error) {
        }
    }


    const columns = [
        { field: 'name', headerName: 'name', width: 180, },
        { field: 'phone', headerName: 'phone', width: 200 },
        { field: 'email', headerName: 'email', width: 200 },
        { field: 'technology', headerName: 'Tech', width: 200 },
        {
            field: 'file', headerName: 'Resume', width: 180,
            renderCell: (params) => {
                return <a href={`${api_url}/image/${params.value}`}
                    target='_blank'
                    rel='noopener norefer'
                    style={{ color: '#1976d2', textDecoration: 'underline' }}
                >View Resume</a>
            }
        },
        {
            field: 'next', headerName: 'Take Next STEP', width: 170,
            renderCell: (params) => (
                <Button variant='contained' onClick={() => {
                    setOpen(!open)
                    setSelectedRow(params.row)
                }}>Next Step</Button>
            )
        },
        {
            field: 'action', headerName: 'Actions', width: 200,
            renderCell: (params) => (
                <Button startIcon={<ThumbDownIcon sx={{ color: 'red' }} />}></Button>
            )
        }

    ]

    useEffect(() => {
        fetchCVlist()
    }, [])

    return (
        <div className='flex flex-col'>
            <h1 className='text-2xl'>Candidate Application Status</h1>

            <div className='my-4 flex flex-row gap-5 m-2' >

                {
                    status.map((status) => (
                        <Button key={status} variant={activeStatus ? 'contained' : 'outlined'}
                            sx={{
                                backgroundColor: activeStatus === status ?
                                    color[status] : 'transparent',
                                color: activeStatus === status ? '#fff' :
                                    color[status],
                                borderColor: color[status]
                            }}
                            onClick={() => setActiveStatus(status)}
                        >{status}</Button>
                    ))
                }
            </div>
            <div>
                {cvlist?.status === 'Active' &&
                    <Paper>
                        <DataGrid
                            rows={row}
                            disableColumnMenu
                            disableColumnFilter
                            columns={columns}
                            getRowId={(rows) => rows._id}
                            pageSizeOptions={[5, 10]}
                            initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
                            sx={{ border: 0 }}
                        />
                    </Paper>
                }


            </div>

            {
                open && (
                    <ModalUI setOpen={setOpen} open={open} selectedRow={selectedRow} />
                )
            }
        </div>
    )
}

export default Status