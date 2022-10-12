import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Homepage = () => {
    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries())
        console.log(data)

        axios.post("http://localhost:3032/homedynamic/updatehomepage", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((res) => {
            console.log(res)
            notify(1, "Home Page Updated Successfully..")
        }).catch((err) => {
            console.log(err)
            notify(0,"Oops.. Something Went Wrong!")
        })
    }

    return (
        <div className='admin w-3/4'>
            <ToastContainer position="bottom-left" hideProgressBar="true" autoClose="6000" />
            <div className="form">
                <div className="w-full px-10 overflow-hidden bg-white rounded-lg border-2 shadow-lg dark:bg-gray-800">
                    <div className="px-6 py-4">
                        <p className="mt-1 text-center text-lg text-gray-500 dark:text-gray-400 uppercase font-bold">Add Home Page Detail</p>

                        <form onSubmit={handleSubmit}>
                            {/* Corousel 1 Title & Image */}
                            <div className="w-full mt-4">
                                <h3 className='text-center mt-8 mb-8 font-bold'>Add Carousel Details</h3>
                                <label htmlFor="carousel1title">Add Carousel 1 Title </label>
                                <input type="text" name='carousel1title' placeholder="Carousel 1 Title" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
                            </div>

                            <div className="w-full mt-4">
                                <label htmlFor="file1">Upload Carousel 1 Image </label>
                                <input type="file" name='file1' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
                            </div>
                            <br />

                            {/* Corousel 2 Title & Image */}
                            <div className="w-full mt-4">
                                <label htmlFor="carousel2title">Add Carousel 2 Title </label>
                                <input type="text" name='carousel2title' placeholder="Carousel 1 Title" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
                            </div>

                            <div className="w-full mt-4">
                                <label htmlFor="file2">Upload Carousel 1 Image </label>
                                <input type="file" name='file2' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
                            </div>


                            {/* About 1 Title, Description & image */}
                            <h3 className='text-center mt-8 mb-8 font-bold'>Add About Section Details</h3>

                            <div className="w-full mt-4">
                                <label htmlFor="about1title">Add About 1 Title </label>
                                <input type="text" name='about1title' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
                            </div>

                            <div className="w-full mt-4">
                                <label htmlFor="about1desc">Add About 1 Description </label>
                                <input type="text" name='about1desc' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
                            </div>

                            <div className="w-full mt-4">
                                <label htmlFor="file3">Upload Avout 1 Image </label>
                                <input type="file" name='file3' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
                            </div>

                            <br />

                            {/* About 2 Title, Description & image */}

                            <div className="w-full mt-4">
                                <label htmlFor="about2title">Add About 2 Title </label>
                                <input type="text" name='about2title' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
                            </div>

                            <div className="w-full mt-4">
                                <label htmlFor="about2desc">Add About 2 Description </label>
                                <input type="text" name='about2desc' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
                            </div>

                            <div className="w-full mt-4">
                                <label htmlFor="file4">Upload About 2 Image </label>
                                <input type="file" name='file4' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
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

export default Homepage