import React from 'react'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import delIcon from '../icons/bin.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import editIcon from '../icons/edit.png'
const Seriestable = () => {

  const [data, setData] = useState([])

  const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);

  const [status, setStatus] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3032/admincrud/getallseries').then((res) => {
      setData(res.data)

    }).catch((err) => {
      console.log(err)
    })
  }, [status])

  const deleteSeries = (id) => {
    const delMsg = window.confirm('All products under series will be deleted..! Do you really want to delete Series??')
    if (delMsg) {
      axios.post('http://localhost:3032/admincrud/deleteseries', { id }).then((res) => {
        notify(1, "Series Deleted Succesfully..!")
        setStatus(!status)

      }).catch((err) => {
        notify(0, "Oops Something Went Wrong..!")
      })
    }
  }

  return (
    <div className='admin w-3/4 mt-12'>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg order-2">
        <ToastContainer position="bottom-left" hideProgressBar="true" autoClose="6000" />
        <p className="mt-1 mb-3 text-center text-lg text-gray-500 dark:text-gray-400 uppercase font-bold">Active Light Series</p>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-2">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                sr no
              </th>
              <th scope="col" className="py-3 px-6">
                Series Id
              </th>

              <th scope="col" className="py-3 px-6">
                Main Light Category Name
              </th>

              <th scope="col" className="py-3 px-6">
                Light Series Name
              </th>
              <th scope="col" className="py-3 px-6">
                Light Series Image
              </th>

              <th scope="col" className="py-3 px-6">
                Delete
              </th>

              <th scope="col" className="py-3 px-6">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              return (<tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {index+1}
                </th>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {value._id}
                </th>

                <td className="py-4 px-6">
                  {value.mainlight}
                </td>

                <td className="py-4 px-6">
                  {value.series}
                </td>

                <td className="py-4 px-6">
                  <img src={value.url} alt="no_image" className="h-12 w-50" />

                </td>

                <td className="py-4 px-6">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <img src={delIcon} alt="Image" onClick={() => {
                      deleteSeries(value._id)
                    }} />
                  </a>
                </td>


                <td className="py-4 px-6">
                  <Link to="/updatelightseries" state={{ id: value._id }} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <img src={editIcon} alt="Image" />
                  </Link>
                </td>

              </tr>)
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Seriestable