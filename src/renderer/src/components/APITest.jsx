import axios from 'axios'
import React, { useState } from 'react'

const APITest = () => {
  const [reqApi, setReqApi] = useState({
    requestUrl: '',
  })
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [apiCollection, setApiCollection] = useState([])
  const [errorMessage, setErrorMessage] = useState('') // State for error messages

  const handleInputChange = (e) => {
    setReqApi({
      ...reqApi,
      requestUrl: e.target.value,
    })
  }

  const handleRequest = async (e) => {
    e.preventDefault()
    setError(null)
    setErrorMessage('') // Reset error message

    try {
      axios.get(reqApi.requestUrl)
        .then(res => {
          setResponse(res.data)

          // Send the URL to the backend to add it to the collection
          window.Electron.addApiToCollection(reqApi.requestUrl)
            .then((result) => {
              if (result.success) {
                // Update the collection UI with the new URL
                setApiCollection(result.collection)
              } else {
                setErrorMessage(result.message) // Show error message in the UI
              }
            })
            .catch(err => {
              console.error('Error adding API to collection:', err)
              setErrorMessage('Failed to add the API URL to the collection')
            })
        })
        .catch(err => {
          console.error('API Test Error:', err.response ? err.response.data : err.message)
          setErrorMessage('Error occurred while testing the API')
        })
    } catch (err) {
      console.error('Unexpected Error:', err.message)
      setErrorMessage('Unexpected error occurred')
    }
  }

  return (
    <div>
      <div className="bg-white w-full py-4 px-2">
        <div className="py-4 w-full">
          <h1 className="text-2xl">Test APIs</h1>
          <form method="post" onSubmit={handleRequest}>
            <div className="mx-4 mt-4 flex">
              <input
                type="text"
                onChange={handleInputChange}
                className="bg-gray-200/40 pl-2 w-full h-12 border rounded"
                placeholder="Enter or Paste API URL"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 w-1/4 ml-2 rounded text-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Response Section */}
        <div className="bg-white border-t">
          <div className="py-4 w-full">
            <h1>Response</h1>
            {!response ? 
              <div>Enter Your Backend API to Test</div> 
              :
              <div>
                <pre>{JSON.stringify(response, null, 2)}</pre>
              </div>
            }
          </div>
        </div>

        {/* Error Section */}
        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-2 mt-2 rounded">
            <strong>Error:</strong> {errorMessage}
          </div>
        )}

        {/* Collection Section */}
        <div className="bg-white border-t">
          <div className="py-4 w-full">
            <h1 className="text-xl">API Collection</h1>
            <ul>
              {apiCollection.map((url, index) => (
                <li key={index} className="p-2 bg-gray-100 rounded">
                  {url}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default APITest
