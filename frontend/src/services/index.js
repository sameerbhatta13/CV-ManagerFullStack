import axiosInstance from "@/api/axiosInstance";


export const getScheduleInterview = async () => {
    const { data } = await axiosInstance.get('/interview')
    return data
}

