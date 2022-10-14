import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Addproducts = () => {
  const handleSubmit=(e)=>{
    const formdata= new FormData(e.target)
    const data = Object.fromEntries(formdata.entries())
    console.log(data)
    e.target.series.value=""
    e.target.name.value=""
    e.target.productimage.value=""
  }

  return (
    <div className='admin w-3/4 mt-24'>
      <div className="form">
        <div class="w-full px-10 overflow-hidden bg-white rounded-lg border-2 shadow-lg dark:bg-gray-800">
          <div class="px-6 py-4">
            <p class="mt-1 text-center text-lg text-gray-500 dark:text-gray-400 uppercase font-bold">Add Products</p>

            <form onSubmit={handleSubmit}>
              <div class="w-full mt-4">
                <label htmlFor="series">Select Series Name </label>
                <input type="text" name='series' placeholder="Series Name" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
              </div>

              <div class="w-full mt-4">
                <label htmlFor="name">Product Name </label>
                <input type="text" name='name' placeholder="Product Name" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
              </div>

              <div class="w-full mt-4">
                <label htmlFor="productimage">Upload Product Image </label>
                <input type="file" name='productimage'  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
              </div>

              <div class="flex items-center justify-between mt-6">
                <button type="submit" class="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded hover:bg-blue-600 focus:outline-none">Submit</button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Addproducts