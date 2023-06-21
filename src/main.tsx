import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/about"
          element={
            <>
              <div className="text-center">
                <h1 className="text-xl">About</h1>
                <div>
                  <Link to="/" className="text-purple-400 underline">
                    Home
                  </Link>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
