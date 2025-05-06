import { getScheduleInterview } from '@/services'
import axios from 'axios'
import { api_url } from '../../config'
import React, { useEffect, useState } from 'react'
import { Paper, TableContainer, TableHead, Table, TableRow, TableCell, TableBody, Button, Modal, Typography, Box } from '@mui/material'


const Assessment = () => {
    const [open, setOpen] = useState(false)
    const [cvList, setCVList] = useState([])
    const [id, setId] = useState('')
    const [assess, setAssess] = useState({
        image: null
    })

    console.log("first", assess)
    console.log('first', id)

    const fetchCVList = async () => {
        try {
            const response = await axios.get(`${api_url}/cv/query`, {
                params: {
                    applicationStatus: "shortlisted",
                }
            })
            setCVList(response.data)
        } catch (error) {

        }
    }

    const updateCV = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', assess.image)
        try {
            const update = await axios.put(`${api_url}/cv/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log("file", update.data)
            setOpen(false)
            fetchCVList()

        } catch (error) {
            console.log(error)

        }

    }
    const handleImageChnage = (e) => {
        const file = e.target.files[0]
        setAssess((prev) => ({
            ...prev,
            image: file
        }))

    }

    const handleModal = () => setOpen(true)
    const handelClose = () => setOpen(false)
    useEffect(() => {
        fetchCVList()
    }, [])


    const columns = [
        { id: 'name', lable: 'Name', minWidth: 100 },
        { id: 'phone', lable: 'Phone', minWidth: 100 },
        { id: 'email', lable: 'Email', minWidth: 100 },
        { id: 'tech', lable: 'Technology', minWidth: 100 },
        { id: 'status', lable: 'Status', minWidth: 150 },
        { id: 'action', lable: 'Action', minWidth: 170 }
    ]

    return (
        <>

            <div className='flex mx-10'>
                <Paper>
                    <TableContainer>
                        <Table>
                            <TableHead sx={{ backgroundColor: '#e4f0f0', fontWeight: 'bold' }}>
                                <TableRow>
                                    {
                                        columns.map((columns) => (
                                            <TableCell
                                                key={columns.id}
                                                style={{ minWidth: columns.minWidth }}

                                            >{columns.lable}</TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    cvList?.map((item, index) => (
                                        <TableRow hover key={index}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.phone}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell>{item.technology}</TableCell>
                                            <TableCell>{item.applicationStatus}</TableCell>
                                            <TableCell><Button variant='contained' onClick={() => {
                                                handleModal()
                                                setId(item._id)
                                            }}>Upload Assessment </Button></TableCell>

                                        </TableRow>
                                    ))
                                }
                            </TableBody>

                        </Table>
                    </TableContainer>
                </Paper>
            </div>


            <div >
                <Modal
                    open={open}
                    onClose={handelClose}

                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,

                    }}>
                        <Typography variant="h6" component="h2">
                            Upload The Assignment
                        </Typography>
                        <form action="" onSubmit={updateCV}>
                            <input type="file"
                                onChange={handleImageChnage}
                                name='image'
                                className='border-2 my-4 p-1 rounded-lg ' />

                            <Button type='submit' variant='contained' >Submit</Button>
                        </form>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default Assessment