import React from 'react'
import { useState, useEffect } from 'react';
import Cards from './cards';
import Slider from './slider';
import Review from './review';
import Rating from './rating';
import Skcards from './skcards';

function Homepage() {
    const [loading,setLoading] =useState(true);
  
    useEffect(() => {
      setTimeout (() => {
        setLoading(false);
      },500);
    }, []);
  return (
    <div>

  {loading ? <Skcards/> : <Slider/> }
  {loading ? <Skcards/> : <Cards/> }
  {loading ? <Skcards/> : <Review/> }
  {loading ? <Skcards/> :  <Rating/> }
  </div>
  )
}

export default Homepage