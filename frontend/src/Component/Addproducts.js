import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import delIcon from '../icons/bin.png'

const Addproducts = () => {

  const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);

  const [category, setCategory] = useState([])
  const [value, setValue] = useState([]);
  const [main, setMain] = useState({
    title: '',
    desc: '',
  });

  useEffect(() => {
    axios.get("http://localhost:3032/admincrud/getseriesname").then((res) => {
      setCategory(res.data)
    }).catch((err) => {
      notify(0, "Network Error")
    })
  }, [])


  const handleSubmit = (e) => {
    // const formdata = new FormData(e.target)
    // const data = Object.fromEntries(formdata.entries())

    // //console.log(data)

    // e.target.series.value = ""
    // e.target.name.value = ""
    // e.target.productimage.value = ""
  }

  //remove the item from all buckect
  const removeItem = (idx) => {
    const filterData = value.filter((element, index) => {
      return index !== idx;
    });
    setValue(filterData);
  };


  //add data to bucket 
  const addData = () => {
    setValue([...value, main]);
    setMain({ title: '', desc: '' });
  };

  return (
    <div className='admin w-3/4 mt-24'>
      <div className="form">
        <div className="w-full px-10 overflow-hidden bg-white rounded-lg border-2 shadow-lg dark:bg-gray-800">
          <div className="px-6 py-4">
            <p className="mt-1 text-center text-lg text-gray-500 dark:text-gray-400 uppercase font-bold">Add Products</p>
            <ToastContainer position="bottom-left" hideProgressBar="true" autoClose="6000" />
            <form onSubmit={handleSubmit}>

              <div className="w-full mt-4">
                <label htmlFor="mainlight"><b>Light Series:</b> </label>
                <select name="mainlight" id="mainlight" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300">
                  <option value=""> -- Select Light Series --</option>
                  {category.map((value, index) => {
                    return (<option key={index} value={value.series}>{value.series}</option>);
                  })}
                </select>

              </div>

              <div className="w-full mt-4">
                <label htmlFor="name"><b>Product Name:</b></label>
                <input type="text" name='name' placeholder="Product Name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
              </div>

              <div className="w-full mt-4">
                <label htmlFor="model_no"> <b>Product Model Number:</b></label>
                <input type="text" name='model_no' placeholder="Product Model Number" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
              </div>

              <div className="w-full mt-4">
                <label htmlFor="productimage"><b>Upload Product Images: </b></label> <br /> <br />
                <label htmlFor="productimage">1. Front View Product Images:</label>
                <input type="file" name='productimage' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
                <label htmlFor="productimage">2. Rear View Product Images:</label>
                <input type="file" name='productimage' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
                <label htmlFor="productimage">3. Right Side View Product Images:</label>
                <input type="file" name='productimage' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
                <label htmlFor="productimage">4. Left Side View Product Images:</label>
                <input type="file" name='productimage' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
              </div>

              <div className="w-full mt-4">
                <label htmlFor="name"><b>Product Description:</b></label>
                <textarea name='name' placeholder="Product Description" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
              </div>

              <h1 className=" mt-12 mb-4 text-lg"> <b> Add Product Parameters</b></h1>
              {/* Add data inputs div */}
              <div className="flex gap-8">
                <div className="w-full flex flex-col">
                  <input type="text"

                    value={main.title}
                    onChange={(e) => {
                      setMain({ ...main, title: e.target.value });
                    }}

                    name="" id="" placeholder='Parameter Heading' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />

                  <textarea name="" id=""
                    value={main.desc}
                    onChange={(e) => {
                      setMain({ ...main, desc: e.target.value });
                    }}
                    placeholder='Parameter Description' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
                  <input type='button' value="Add Data" onClick={addData} placeholder='button' className=" w-1/4 m-auto px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded hover:bg-blue-600 focus:outline-none mt-8" />
                </div>
              </div>

              {/* Added Data display div*/}
              <div className="w-full mt-12 flex flex-col gap-4">
                <h2 className='mb-4 font-bold text-lg'>Added Data:</h2>
                {value.map((val, idx) => {
                  return (

                    <div key={idx} className="relative bg-blue-600 text-white p-4 rounded-lg">
                      <div className=' gap-12'>
                        <span className='text-lg font-bold capitalize'>{val.title}: </span>
                        <span onClick={() => { removeItem(idx); }} > <img src={delIcon} alt="" className='absolute right-2 top-2'/> </span>
                        <br />
                        <div className='flex flex-col'>
                          {val.desc.split(',').map((data, index) => {
                            return (
                              <div key={index}>
                                <span> {data} </span>
                                <br />
                              </div>
                            )
                          })}
                          
                        </div>
                      </div>
                      <br />
                    </div>

                  );
                })}
              </div>

              <div className="flex items-center justify-between mt-6">
                <button type="submit" className="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded hover:bg-blue-600 focus:outline-none">Submit</button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Addproducts