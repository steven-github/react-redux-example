// src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions';
import './App.css'; // Add this line

const App = ({ counter, increment, decrement }) => {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Counter: {counter}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
