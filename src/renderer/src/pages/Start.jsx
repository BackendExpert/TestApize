import axios from "axios";
import React, { useState } from "react";

const Start = () => {
  const [reqApi, setReqApi] = useState({
    requestUrl: '',
  });
  const [response, setResponse] = useState(null); 
  const [error, setError] = useState(null); 

  const [urlOut, seturlOut] = useState('')

  const handleInputChange = (e) => {
    setReqApi({
      ...reqApi,
      requestUrl: e.target.value,
    });
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    setError(null); 

    try {
        // seturlOut(reqApi.requestUrl)

        axios.get(reqApi.requestUrl)
        .then(res => setResponse(res.data))
        .catch(err => setError(err))
    }
    catch (err) {
      setError(err.message); 
    }
  };

  const ReloadAll = () => {
    window.location.reload()
  }

  return (
    <div>
      <div className="flex">
        <div className="bg-gray-200/20 border-r min-h-screen w-1/4">
          <h1 className="p-4 text-gray-500 font-semibold">My Collections</h1>
        </div>

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
            <div className="">
                <button className="bg-red-500 text-white mt-4 py-2 px-4 rounded" onClick={ReloadAll}>Reload</button>
            </div>

          </div>

          {/* Response Section */}
          <div className="bg-white border-t">
            <div className="py-4 w-full">
              <h1 className="">Response</h1>
              {
                !response ? 
                    <div className="">Enter Your Backend API to Test</div>
                :
                    <div>
                        <pre>{JSON.stringify(response, null, 2)}</pre>
                    </div> 
              }
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
