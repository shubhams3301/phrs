"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useState, useEffect } from 'react'


export default function Home() {
  const [productForm, setProductForm] = useState({})
  const [products, setProducts] = useState([])
  const [alert, setAlert] = useState("")
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [loadingaction, setLoadingaction] = useState(false)
  const [dropdown, setDropdown] = useState([])


  useEffect(() => {
    // Fetch products on load 
    const fetchProducts = async () => {
      const response = await fetch('/api/donor')
      let rjson = await response.json()
      setProducts(rjson.products)
    }
    fetchProducts()
  }, [])


  const buttonAction = async (action, name_location, initialorgan) => {
    // Immediately change the organ of the product with given name_location in Products
    let index = products.findIndex((item) => item.name_location == name_location)
    let newProducts = JSON.parse(JSON.stringify(products))
    if (action == "plus") {
      newProducts[index].organ = parseInt(initialorgan) + 1
    }
    else {
      newProducts[index].organ = parseInt(initialorgan) - 1
    }
    setProducts(newProducts)

    // Immediately change the organ of the product with given name_location in Dropdown
    let indexdrop = dropdown.findIndex((item) => item.name_location == name_location)
    let newDropdown = JSON.parse(JSON.stringify(dropdown))
    if (action == "plus") {
      newDropdown[indexdrop].organ = parseInt(initialorgan) + 1
    }
    else {
      newDropdown[indexdrop].organ = parseInt(initialorgan) - 1
    }
    setDropdown(newDropdown)

    setLoadingaction(true)
    const response = await fetch('/api/action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ action, name_location, initialorgan })
    });
    let r = await response.json()
    setLoadingaction(false)
  }

  const addProduct = async (e) => {
    try {
      const response = await fetch('/api/donor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productForm)
      });

      if (response.ok) {
        // Product added successfully
        setAlert("Your Product has been added!")
        setProductForm({})
      } else {
        // Handle error case
        console.error('Error adding product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    // Fetch all the products again to sync back
    const response = await fetch('/api/donor')
    let rjson = await response.json()
    setProducts(rjson.products)
    e.preventDefault();
  }

  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value })
  }

  const onDropdownEdit = async (e) => {
    let value = e.target.value
    setQuery(value)
    if (value.length > 3) {
      setLoading(true)
      setDropdown([])
      const response = await fetch('/api/searchdonor?query=' + query)
      let rjson = await response.json()
      setDropdown(rjson.products)
      setLoading(false)
    }
    else {
      setDropdown([])
    }
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8">
        <div className='text-green-800 text-center'>{alert}</div>
        <h1 className="text-3xl font-semibold mb-6">Search Donor</h1>
        <div className="flex mb-2">
          <input onChange={onDropdownEdit} type="text" placeholder="Search Donor" className="flex-1 border border-gray-300 px-4 py-2 rounded-l-md" />
        </div>
        {loading && <div className='flex justify-center items-center'> <img width={74} src="/loading.svg" alt="" /> </div>
        }
        <div className="dropcontainer absolute w-[72vw] border-1 bg-purple-100 rounded-md ">

          {dropdown.map(item => {
            return <div key={item.name_location} className="container flex justify-between p-2 my-1 border-b-2">

                <span className="name_location"> {item.name_location} </span>
              <div className='mx-5'>
                {/* <button onClick={() => { buttonAction("minus", item.name_location, item.organ) }} disabled={loadingaction} className="subtract inline-block px-3 py-1 cursor-pointer bg-purple-500 text-white font-semibold rounded-lg shadow-md disabled:bg-purple-200"> - </button> */}

                <span className="organ inline-block  min-w-3 mx-3">(Organ: {item.organ}, Hospital Contact : {item.hospitalcontact})</span>
                {/* <button onClick={() => { buttonAction("plus", item.name_location, item.organ) }} disabled={loadingaction} className="add inline-block px-3 py-1 cursor-pointer bg-purple-500 text-white font-semibold rounded-lg shadow-md disabled:bg-purple-200">  + </button> */}

              </div>
            </div>
          })}
        </div>
      </div>

    
      <div className="container my-8 mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Display Donor Details</h1>

        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name-Location</th>
              <th className="px-4 py-2">Organ Name</th>
              <th className="px-4 py-2">Hospital Contact</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => {
              return <tr key={product.name_location}>
                <td className="border px-4 py-2">{product.name_location}</td>
                <td className="border px-4 py-2">{product.organ}</td>
                <td className="border px-4 py-2">{product.hospitalcon}</td>
              </tr>
            })}

          </tbody>
        </table>

      </div>
    </>
  )
}
