import React, { useState } from 'react'

const ApiForm = ({ onAddApi }) => {
  const [apiName, setApiName] = useState('')
  const [apiUrl, setApiUrl] = useState('')
  const [apiMethod, setApiMethod] = useState('GET')
  const [apiBody, setApiBody] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const apiData = {
      name: apiName,
      url: apiUrl,
      method: apiMethod,
      body: apiBody,
    }
    onAddApi(apiData)
    setApiName('')
    setApiUrl('')
    setApiMethod('GET')
    setApiBody('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={apiName}
        onChange={(e) => setApiName(e.target.value)}
        placeholder="API Name"
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        value={apiUrl}
        onChange={(e) => setApiUrl(e.target.value)}
        placeholder="API URL"
        className="border p-2 w-full"
        required
      />
      <select
        value={apiMethod}
        onChange={(e) => setApiMethod(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <textarea
        value={apiBody}
        onChange={(e) => setApiBody(e.target.value)}
        placeholder="Request Body (optional)"
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add API
      </button>
    </form>
  )
}

export default ApiForm
