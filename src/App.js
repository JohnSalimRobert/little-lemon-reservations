import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import BookingTable from  './components/BookingTable'
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import {Routes, Route, useNavigate} from "react-router-dom";
import React, {useReducer, useState} from 'react';
import ConfirmedBooking from './components/ConfirmedBooking';

const availableTimesReducer = (state, action) => {
  switch(action.type){
    case 'SET_TIMES':
      return action.payload
    default:
      return state
  }
}

function App() {

  const updateTimes = (selectedTime) => {
    // const newTimes = calculateTimeBasedOnDAte(selectedDate);
    // console.log(availableTimes);
    console.log(selectedTime);
    dispatch({type:'SET_TIMES', payload: availableTimes})
  }

  const initializeTimes = () => {
    return ["17:00","18:00","19:00","20:00","21:00","22:00"]
  }

  const [availableTimes, dispatch] = useReducer(availableTimesReducer, initializeTimes())
  const navigate = useNavigate()

  const submitForm = (form) => {
    if(form) {
      navigate('/confirmedBooking')
    }
  }

  // console.log(availableTimes)

   return (
    <>
    <div className='App'>
    <Header />
    <Nav />
    <Routes>
    <Route path='/bookingTable' element= { <BookingTable availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm}/> } />
    <Route path='/' element= { <Homepage /> } />
    <Route path='/confirmedBooking' element= { <ConfirmedBooking /> } />
    </Routes>
    <Footer />
    </div>
    </>
  );
}

export default App;
