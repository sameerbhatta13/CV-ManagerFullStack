import React, { useState } from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
import { api_url } from '../../config'
import { useForm } from 'react-hook-form'

const InputForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [prevImg, setPrevImg] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)

    const onSubmit = async (data) => {

        const formData = new FormData()

        for (const key in data) {
            formData.append(key, data[key])
        }
        if (data.image && data.image[0]) {
            formData.append('image', data.image[0])
        }

        try {
            const res = await axios.post(`${api_url}/cv`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            // console.log('first', res.data)
            reset()
            setSelectedFile(null)
            setPrevImg(null)

        } catch (error) {
            console.log('error', error)
        }

    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setSelectedFile(file)
        const fileType = file.type
        if (file && fileType.startsWith('image/')) {
            setPrevImg(URL.createObjectURL(file))
        } else {
            setPrevImg(null)
        }

    }


    return (
        <div className=' w-auto flex flex-row gap-2 p-0 md:p-8 md:mx-20 my-1'>
            <div className=' p-4'>
                <form action="" onSubmit={handleSubmit(onSubmit)} method='POST'>
                    <h1 className=' text-4xl underline underline-offset-4  my-6'>Candidate Details</h1>
                    <div className=' flex flex-row flex-wrap'>
                        {[
                            { label: 'Name', name: 'name', type: 'text' },
                            { label: 'Phone', name: 'phone', type: 'text' },
                            { label: 'Email', name: 'email', type: 'text' },
                            { label: 'Technology', name: 'technology', type: 'text' },
                            { label: 'Salary Expectation', name: 'salaryExp', type: 'number' },
                            { label: 'Experience', name: 'experience', type: 'text' },
                            { label: 'Reference', name: 'reference', type: 'text' }
                        ].map(({ label, name, type }) => (
                            <div className='basis-1/2 my-3 '>
                                <label className='text-2xl'>{label}</label>
                                <input type={type}
                                    {...register(name, { required: true })}
                                    placeholder={label}
                                    className='border-2 rounded-md my-1 flex flex-col p-3 w-96' required />
                                {
                                    errors[name] && <p className='text-sm'>this field is required</p>
                                }
                            </div>
                        ))}
                        <div className='basis-1/2 my-3'>
                            <label className='text-2xl'>level</label>
                            <select name="level" id="" className='border-2 rounded-md my-1 flex flex-col p-3 w-96' required
                                {...register('level', { required: true })} >
                                <option value="" disabled selected>Select Level</option>
                                <option value="junior">Junior Level</option>
                                <option value="mid">Mid Level</option>
                                <option value="senior">Senior Level</option>
                            </select>
                        </div>
                        <div className='basis-1/2 my-3'>
                            <label className='text-2xl'>Upload CV</label>
                            <input type="file" placeholder='product image' name='image'
                                {...register('image', { required: true })}
                                onChange={handleImageChange}
                                className='border-2 rounded-md my-1 flex flex-col  p-3 w-96' />
                            {prevImg ? (
                                <img
                                    src={prevImg}
                                    alt="Preview"
                                    className='w-40 h-32 rounded-lg object-cover p-2 my-2'
                                />
                            ) : (selectedFile) ? (
                                <p className='text-green-600'>file selected: {selectedFile?.name}   </p>
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