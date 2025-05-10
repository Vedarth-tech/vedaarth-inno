import React from 'react'

const Blob = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute -top-24 -left-24 w-96 h-96 shadow-2xl bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blob-animate backdrop-blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full custom-shadow bg-gradient-to-br from-green-400 to-blue-500 blob-animate backdrop-blur-3xl" />
        </div>
        
    )
}

export default Blob
