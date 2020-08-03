import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ChatPopup from './Components/ChatPopup'

function App() {
  return (
    <div className="body">
      <div>
        <nav class="navbar navbar-expand-lg fixed-top my-2 py-5">
          <div class="container">
            <a href="#" class="navbar-brand font-weight-bold">
              Maxeon
            </a>

            <div class="collapse navbar-collapse">
              <ul class="navbar-nav">
                <li class="nav-item item-1">
                  <a href="#" class="nav-link ">
                    Products
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item ml-4">
                  <a href="#" class="nav-link ">
                    Features
                  </a>
                </li>
                <li class="nav-item ml-4">
                  <a href="#" class="nav-link ">
                    Use Cases
                  </a>
                </li>
                <li class="nav-item ml-4">
                  <a href="#" class="nav-link ">
                    Pricing
                  </a>
                </li>
                <li class="nav-item ml-4">
                  <a href="#" class="nav-link">
                    <div class="login">Login</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div class="textarea text-white">Where words fail, Music speaks.</div>
      </div>
      <ChatPopup />
    </div>
  )
}

export default App
