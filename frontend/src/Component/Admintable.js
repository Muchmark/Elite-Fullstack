import React from 'react'
import axios from 'axios'
import delIcon from '../icons/bin.png'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admintable = () => {

  const [data, setData] = useState([])

  const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);

  const [status, setStatus] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3032/auth/getalluser').then((res) => {
      setData(res.data)

    }).catch((err) => {
      console.log(err)
    })
  }, [status])


  const deleteAdmin = (id) => {
    const delMsg = window.confirm("Do you really want to delete ?")
    if (delMsg) {
      axios.post('http://localhost:3032/auth/deleteuser', { id }).then((res) => {
        notify(1, "Admin Deleted Succesfully..!")
        setStatus(!status)

      }).catch((err) => {
        notify(0, "Oops Something Went Wrong..!")
      })
    }

  }

  return (
    <div className='admin w-3/4 mt-12'>
      <ToastContainer position="bottom-left" hideProgressBar="true" autoClose="6000" />
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg order-2">
        <p className="mt-1 mb-3 text-center text-lg text-gray-500 dark:text-gray-400 uppercase font-bold">Active Admins</p>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-2">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="py-3 px-6">
                sr.no.
              </th>
              <th scope="col" className="py-3 px-6">
                User Id
              </th>
              <th scope="col" className="py-3 px-6">
                Username
              </th>
              <th scope="col" className="py-3 px-6">
                passworrd
              </th>
              <th scope="col" className="py-3 px-6">
                Delete
              </th>

            </tr>
          </thead>

          <tbody>
            {data.map((value, index) => {
              return (<tr id={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {index+1}
                </th>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {value._id}
                </th>

                <td className="py-4 px-6">
                  {value.email}
                </td>

                <td className="py-4 px-6">
                  {value.password}
                </td>

                <td className="py-4 px-6">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <img src={delIcon} alt="Image" onClick={() => {
                      deleteAdmin(value._id)
                    }} />
                  </a>
                </td>


              </tr>)
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admintable