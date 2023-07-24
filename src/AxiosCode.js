import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosCode = () => {

    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{console.log(response)
            setData(response.data)
        }
        )
       
    },[])
  return (
    <>
      <h1 className='App'>Axios Get Response
            {data.map((datas)=>{
                return datas.name
            })}
      </h1>
    </>
  )
}

export default AxiosCode
