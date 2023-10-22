import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const baseUrl='https://jsonplaceholder.typicode.com'

export const apiSlice =createApi({
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getPost:builder.query({
            query:()=>'todos'
        }),
        getSinglePost:builder.query({
            query:(id)=>`todos/${id}`
        }),
        createPost:builder.mutation({
            query:(payload)=>({
                url:'posts',
                method:"POST",
                body:payload
            })
        })
    })
})
export const {useGetPostQuery,useGetSinglePostQuery,useCreatePostMutation} = apiSlice