import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { show_details } from '../Action'

const Content_view = (props) => {

  const [jobURL,setJobUrl] = useState(props.state.jobUrl)
  // Emptying the argument
  const closeWindow = () => props.show_details('','')
  // Set location url
  const applyJob = () => window.location = jobURL;

    useEffect(() => {
      // Put job details inside this element
        document.querySelector('.job-details-container')
        .innerHTML = props.state.jobDetails;
        // replace the job url
        setJobUrl(props.state.jobUrl)
        
    },[props.state.jobDetails])

    return (
          <>
            <div className={`overflow-x-hidden overflow-y-auto outline-none focus:outline-none fixed flex justify-center top-0 left-0 right-0 md:relative z-50 h-full bg-white window ${props.state.jobDetails ? 'block' : 'hidden'}`}>
              <div className="relative h-full md:w-auto mt-1 md:mx-auto md:max-w-sm">
                <div className="border-0 md:rounded-lg md:shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none md:border-2 md:border-gray-400 md:rounded h-full w-full md:w-auto md:h-auto">
                  <div className="pb-3 flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-xl font-semibold">
                      Job Details
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none block md:hidden"
                      onClick={closeWindow}
                      >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-gray-600 text-lg leading-relaxed job-details-container">
                    </p>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={closeWindow}
                      >
                      Close
                    </button>
                    <button
                      className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={applyJob}
                      >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
    )
}

export default connect(state => {
    return {
        state
    }
}, { show_details })(Content_view);