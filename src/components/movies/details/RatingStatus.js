import React from 'react'

const RatingStatus = ({ vote_average, status }) => {
  return (
    <div className="flex ta-center mb-2">
      <div className="w-50 mr-1 bg b-dotted-primary">
        <p className="text-head text-primary font-bold my-1">Rating</p>
        <p className="font-l btn bg-primary text-white mb-1">{vote_average}/10</p>
      </div>
      <div className="w-50 bg b-dotted-primary">
        <p className="text-head text-primary font-bold my-1">Status</p>
        <p className="font-l btn bg-primary text-white mb-1">{status}</p>
      </div>
    </div>
  )
}

export default RatingStatus
