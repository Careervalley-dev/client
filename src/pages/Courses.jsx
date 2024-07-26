import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Btech from './Course/Btech'
import BaPage from './Course/BaPage'
import BbaPage from './Course/BbaPage'
import BcaPage from './Course/BcaPage'
import BcomPage from './Course/BcomPage'
import BscPage from './Course/BscPage'
import MbaPage from './Course/MbaPage'
import MtechPage from './Course/MtechPage'
import LlbPage from './Course/LlbPage'

const Courses = () => {
  return (
    <div>
         <Routes>
            <Route path="btech" element={<Btech />} />
            <Route path="ba" element={<BaPage />} />
            <Route path="bba" element={<BbaPage />} />
            <Route path="bca" element={<BcaPage />} />
            <Route path="bcom" element={<BcomPage />} />
            <Route path="bsc" element={<BscPage />} />
            <Route path="mba" element={<MbaPage />} />
            <Route path="mtech" element={<MtechPage />} />
            <Route path="llb" element={<LlbPage />} />
          </Routes>
    </div>
  )
}

export default Courses;