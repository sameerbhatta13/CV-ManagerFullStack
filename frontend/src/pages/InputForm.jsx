import React, { useState } from 'react'
import { Button } from '@mui/material'

const InputForm = () => {

    const [details, setDetails] = useState({
        name: '',
        phone: '',
        email: '',
        tech: '',
        level: '',
        salaryexp: '',
        exp: '',
        ref: '',
        image: null,
    })
    const [prevImg, setPrevImg] = useState(null)


    const handlesubmit = (e) => {

    }
    const handleChange = (e) => {
        const [name, value] = e.target
        setDetails((prev) => ({
            ...prev,
            [name]: value
        }
        ))
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setDetails((prev) => ({
            ...prev,
            image: file
        }))
        const fileType = file.type
        if (fileType.startsWith('image/')) {
            setPrevImg(URL.createObjectURL(file))
        } else {
            setPrevImg(null)
        }


    }


    return (
        <div className=' w-auto flex flex-row gap-2 p-0 md:p-8 md:mx-20 my-1'>
            <div className=' p-4'>
                <form action="" onSubmit={handlesubmit} method='POST'>
                    <h1 className=' text-4xl underline underline-offset-4  my-6'>Candidate Details</h1>
                    <div className=' flex flex-row flex-wrap'>
                        <div className='basis-1/2 my-3 '>
                            <label className='text-2xl'>Name</label>
                            <input type="text" placeholder='Candidate Name' name='name' onChange={handleChange} className='border-2 rounded-md my-1 flex flex-col p-3 w-96' required />
                        </div>
                        <div className='basis-1/2 my-3 '>
                            <label className='text-2xl'>Phone</label>
                            <input type="text" placeholder='phone number' name='phone' onChange={handleChange} className='border-2 rounded-md my-1 flex flex-col p-3 w-96' required />
                        </div>
                        <div className='basis-1/2 my-3 '>
                            <label className='text-2xl'>Email</label>
                            <input type="text" placeholder='email' name='email' onChange={handleChange} className='border-2 rounded-md my-1 flex flex-col p-3 w-96' required />
                        </div>
                        <div className='basis-1/2 my-3 '>
                            <label className='text-2xl'>Tecnology</label>
                            <input type="text" placeholder='field your are interested' name='tech' onChange={handleChange} className='border-2 rounded-md my-1 flex flex-col p-3 w-96' required />
                        </div>
                        <div className='basis-1/2 my-3 '>
                            <label className='text-2xl'>Level</label>
                            <input type="text" placeholder='level' name='level' onChange={handleChange} className='border-2 rounded-md my-1 flex flex-col p-3 w-96' required />
                        </div>
                        <div className='basis-1/2 my-3 '>
                            <label className='text-2xl'>Salary Expectation</label>
                            <input type="number" placeholder='expectated salary' name='salaryexp' onChange={handleChange} className='border-2 rounded-md my-1 flex flex-col p-3 w-96' required />
                        </div>
                        <div className='basis-1/2 my-3 '>
                            <label className='text-2xl'>Experience</label>
                            <input type="text" placeholder='experience in year' name='exp' onChange={handleChange} className='border-2 rounded-md my-1 flex flex-col p-3 w-96' required />
                        </div>
                        <div className='basis-1/2 my-3 '>
                            <label className='text-2xl'>Refrence</label>
                            <input type="text" placeholder='Refrences name' name='ref' onChange={handleChange} className='border-2 rounded-md my-1 flex flex-col p-3 w-96' required />
                        </div>
                        <div className='basis-1/2 my-3'>
                            <label className='text-2xl'>Upload CV</label>
                            <input type="file" placeholder='product image' name='image' onChange={handleImageChange} className='border-2 rounded-md my-1 flex flex-col  p-3 w-96' />
                            {prevImg ? (
                                <img
                                    src={prevImg}
                                    alt="Preview"
                                    className='w-40 h-32 rounded-lg object-cover p-2 my-2'
                                />
                            ) : details.image ? (
                                <p className='text-green-600'>file selected: {details.image.name}</p>
                            ) : null}
                        </div>
                    </div>
                    <Button type='submit' variant='contained' sx={{ px: 4, py: 1 }}>ADD</Button>
                </form>
            </div>
        </div>
    )
}

export default InputForm