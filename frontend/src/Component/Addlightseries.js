import React from 'react'

const Addlightseries = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const formdata = new FormData(event.target)
    const data = Object.fromEntries( formdata.entries() )
    console.log(data)
    event.target.mainLight.value=""
    event.target.Lightseries.value=""
    event.target.lightseriesimg.value=""
  }

  return (
    <div className='admin w-3/4'>
      <div className="form mt-32">
        <div className="w-full px-10 overflow-hidden bg-white rounded-lg border-2 shadow-lg dark:bg-gray-800">
          <div className="px-6 py-4">
            <p className="mt-1 text-center text-lg text-gray-500 dark:text-gray-400 uppercase font-bold">Add Light Series</p>
            
            <form onSubmit={handleSubmit}>
              <div className="w-full mt-4">
                <label htmlFor="mainLight">Main Light Category: </label>
                <input type="text" name='mainLight' placeholder="Light Series Name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
              </div>

              <div className="w-full mt-4">
                <label htmlFor="Lightseries">Add Light Series Name: </label>
                <input type="text" name='Lightseries' placeholder="Light Series" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
              </div>

              <div className="w-full mt-4">
                <label htmlFor="lightseriesimg">Upload Light Series Image: </label>
                <input type="file" name='lightseriesimg' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" aria-label="Email Address" />
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