import React, { useEffect, useState } from 'react'
import { Box, Button, Modal, } from '@mui/material'
import { api_url } from '../../config'
import axios from 'axios'


const ModalUI = ({ setOpen, open, selectedRow }) => {
    const [list, setList] = useState([])
    const [id, setId] = useState()

    const [interview, setInterview] = useState({
        interviewer: id,
        date: '',
        time: '',
        candidate: selectedRow._id
    })
    const handelChange = (e) => {
        const { name, value } = e.target
        setInterview((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const fetchInterviewer = async () => {
        try {
            const response = await axios.get(`${api_url}/interviewer`)
            setList(response.data)
        } catch (error) {
        }
    }

    const postInteview = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${api_url}/interview`, interview)
            console.log(response.data)

        } catch (error) {

        }
    }
    useEffect(() => {
        fetchInterviewer()
    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <div className='flex flex-col my-5'>
                            <h1 className='text-2xl underline text-red-400'>First Interview</h1>
                            <form action="" onSubmit={postInteview} className='flex flex-col'>
                                <label htmlFor="" className='font-bold my-3'>Select Interviewer</label>
                                <select className='border-2 p-2' name='interviewer' onChange={handelChange}>
                                    <option value="" disabled selected>choose one</option>
                                    {
                                        list?.data?.map((item, index) => (
                                            <option value={item?._id} key={index}>{item?.name}</option>

                                        ))
                                    }
                                </select>

                                <label htmlFor="" className='my-3 font-bold'>Interview Date</label>
                                <input type="date" name='date' className='border-2 p-2' onChange={handelChange} />

                                <label htmlFor="" className='my-3 font-bold'>Interview Time</label>
                                <input type="time" name='time' className='border-2 p-2' onChange={handelChange} />

                                <div className='my-4'>
                                    <Button type='submit' variant='contained' >Submit</Button>
                                </div>
                            </form>
                        </div>

                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default ModalUI