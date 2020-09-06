import React from 'react'
import './Backdrop.css'

const Backdrop = ({click}) => {
    return (
        <div onClick={click} className="backdrop_global">

        </div>
    )
}

export default Backdrop

