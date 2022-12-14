import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Addlightseries = () => {

  const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);

  const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3032/admincrud/getlightcategory").then((res) => {
      setCategory(res.data)
    }).catch((err) => {
      notify(0,"Network Error")
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formdata = new FormData(event.target)
    const data = Object.fromEntries(formdata.entries())

    axios.post('http://localhost:3032/admincrud/createseries', data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res)=>{
      notify(1,"Series Added Successfully..")
    }).catch((err)=>{
      notify(0, "Something went wrong..")
    })
    
    event.target.mainLight.value = ""
    event.target.Lightseriesname.value = ""
    event.target.lightseriesimg.value = ""
  }

  return (
    <div className='admin w-3/4'>
      <div className="form mt-24">
        <ToastContainer position="bottom-left" hideProgressBar="true" autoClose="6000" />
        <div className="w-full px-10 overflow-hidden bg-white rounded-lg border-2 shadow-lg dark:bg-gray-800">
          <div className="px-6 py-4">
            <p className="mt-1 text-center text-lg text-gray-500 dark:text-gray-400 uppercase font-bold">Add Light Series</p>

            <form onSubmit={handleSubmit}>
              <div className="w-full mt-4">
                <label htmlFor="mainlight">Main Light Category: </label>
                <select name="mainlight" id="mainlight" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300">
                  <option value=""> -- Select Main Light Category --</option>
                  {category.map((value, index) => {
                    return (<option key={index} value={value.name}>{value.name}</option>);
                  })}
                </select>

              </div>

              <div className="w-full mt-4">
                <label htmlFor="series">Add Light Series Name: </label>
                <input type="text" name='series' placeholder="Light Series" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
              </div>

              <div className="w-full mt-4">
                <label htmlFor="myfile">Upload Light Series Image: </label>
                <input type="file" name='myfile' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
              </div>

              <div className="flex items-center justify-between mt-6">
                <button type="submit" className="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded hover:bg-blue-600 focus:outline-none" >Submit</button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Addlightseries