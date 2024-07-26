import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UndergraduatePage from './Colleges/UndergraduatePage'
import PostgraduatePage from './Colleges/PostgraduatePage'

const Colleges = () => {
  return (
    <div>
         <Routes>
            <Route path="ug" element={<UndergraduatePage />} />
            <Route path="pg" element={<PostgraduatePage />} />
          </Routes>
    </div>
  )
}

export default Colleges