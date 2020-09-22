import React, { useState, useEffect } from 'react';

export default function Input() {
  return (
    <div id="input-container">
        <div id="overlay"></div>
        <div id="find">Find a restaurant...</div>
        <div id="filter-section">
            <select>
                <option>Area</option>
            </select>

            <select>
                <option>Station</option>
            </select>

            <select>
                <option>Food Type</option>
            </select>

            <select>
                <option>Budget</option>
            </select>
        </div>
        <div id="button-container"> 
            <button id="filter-button">Let's Eat!</button>
        </div>
    </div>
  )
}