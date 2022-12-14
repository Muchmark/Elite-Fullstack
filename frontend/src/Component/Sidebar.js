import React from 'react'
import adminImg from '../icons/admin.png'
import tableImg from '../icons/table.png'
import categoryImg from '../icons/categories.png'
import { Link } from 'react-router-dom'

const Sidebars = () => {
    return (
        <>
            <div className="flex flex-col w-1/4 h-screen py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
                <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Elite Electrical</h2>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 dark:bg-gray-800 bg-gray-200 dark:text-gray-200" href="#">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> 

                            <span className="mx-4 font-medium"><Link to="/">Dashboard</Link></span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform bg-gray-200 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <img src={adminImg} />
                            <span className="mx-4 font-medium"><Link to="/createadmin">Create Admin</Link></span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform bg-gray-200 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <img src={tableImg} />
                            <span className="mx-4 font-medium"> <Link to="/admintable">Admin Table</Link></span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform bg-gray-200 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <img src={categoryImg} />
                            <span className="mx-4 font-medium"> <Link to="/mainlight">Add Main Light Category</Link></span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform bg-gray-200 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <img src={tableImg} />
                            <span className="mx-4 font-medium"> <Link to="/lightcategorytable">Main Light Category Table</Link></span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform bg-gray-200 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <img src={categoryImg} />
                            <span className="mx-4 font-medium"> <Link to="/addseries">Add Light Series</Link></span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform bg-gray-200 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <img src={tableImg} />
                            <span className="mx-4 font-medium"> <Link to="/seriestable">Light Series Table</Link></span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform bg-gray-200 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <img src={categoryImg} />
                            <span className="mx-4 font-medium"> <Link to="/addproducts">Add Product</Link></span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform bg-gray-200 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <img src={tableImg} />
                            <span className="mx-4 font-medium"> <Link to="/productstable">Product Table</Link></span>
                        </a>

                        {/* <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform bg-gray-200 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <img src={categoryImg} />
                            <span className="mx-4 font-medium"> <Link to="/addproducts">Add Product Description</Link></span>
                        </a>

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform bg-gray-200 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <img src={tableImg} />
                            <span className="mx-4 font-medium"> <Link to="/productstable">Product Description Table</Link></span>
                        </a> */}

                        <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform bg-gray-200 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <img src={categoryImg} />
                            <span className="mx-4 font-medium">
                                <Link to="/home">Add Home Page Details</Link>
                            </span>
                        </a>

                        {/* <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform bg-gray-200 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <img src={tableImg} />
                            <span className="mx-4 font-medium">Home Page Table</span>
                        </a> */}
                    </nav>
                </div>
            </div>
        </>

    )
}

export default Sidebars