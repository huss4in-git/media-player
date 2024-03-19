
import { commonAPI } from "./commonAPI"
import { serverUrl } from "./serverURL"

// api for uploading video

export const uploadVideoApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/videos`,reqBody)
}

// api to get uploaded video

export const getUploadedVideoApi = async ()=>{
    return await commonAPI('GET',`${serverUrl}/videos`,"")
}

// api to delete a particular video

export const deleteAVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/videos/${id}`,{})
}

// api to add video into history

export const AddToHistory = async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/history,`,reqBody)
}

// api to get video from history

export const getAllVideoHistory = async()=>{
    return await commonAPI('GET',`${serverUrl}/history`,"")
}

// api to delete watch history

export const deleteWatchHistoryapi = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/history/${id}`,{})
}

// api to add a category

export const addCategoryApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/category`,reqBody)
}

// api to get the category

export const getCategoryApi = async()=>{
    return await commonAPI('GET',`${serverUrl}/category`,"")
}

// api to delete category

export const deleteCategoryApi = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/category/${id}`,{})
}

// api to get a single video from videos

export const getAVideoApi = async(id)=>{
    return await commonAPI('GET',`${serverUrl}/videos/${id}`,"")
}

// api to update category

export const updateCategory = async(id,reqBody)=>{
    return await commonAPI('PUT',`${serverUrl}/category/${id}`,reqBody)
}