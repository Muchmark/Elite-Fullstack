import React from 'react'

const Productstable = () => {
  return (
    <div className='admin w-3/4 mt-40'>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg order-2">
        <p class="mt-1 mb-3 text-center text-lg text-gray-500 dark:text-gray-400 uppercase font-bold">Active Light Products</p>

        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-2">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
               Sr. No.
              </th>
              <th scope="col" class="py-3 px-6">
                Light Series Name 
              </th>
              <th scope="col" class="py-3 px-6">
                Product Name
              </th>
              <th scope="col" class="py-3 px-6">
                Product Image
              </th>

              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1.
              </th>
              <td class="py-4 px-6">
                Sliver
              </td>
              <td class="py-4 px-6">
                Laptop
              </td>
              <td class="py-4 px-6">
                Laptop
              </td>

              <td class="py-4 px-6">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Productstable