import React from 'react'
import image from '../assets/sparrowfavicon.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Chatpopup.css'

function ChatPopup() {
  function startConvo() {
    document.getElementById('part-div-before').style.display = 'none'
    document.getElementById('part-div-after').style.display = 'block'
    document.getElementById('myForm').style.width = '24%'
    document.getElementById('chat-head-content').style.opacity = '0.5'
    document.getElementById('chat-head-content').innerHTML =
      'The team typically replies in a few minutes.'
    document.getElementById('foot').style.display = 'block'
    document.getElementById('typed-msg').style.display = 'block'
  }

  function openForm() {
    console.log('btn clicked')
    document.getElementById('myForm').style.display = 'block'
    document.getElementById('pre-btn').style.display = 'none'
    document.getElementById('post-btn').style.display = 'block'
  }

  function closeForm() {
    console.log('btn2 clicked')
    document.getElementById('myForm').style.display = 'none'
    document.getElementById('pre-btn').style.display = 'block'
    document.getElementById('post-btn').style.display = 'none'
  }

  return (
    <div>
      <div>
        <button class="initial-btn" id="pre-btn" onClick={openForm}></button>
        <button class="btn-clicked" id="post-btn" onClick={closeForm}></button>
      </div>
      <div class="chat-popup" id="myForm">
        <div class="container chat-head">
          <h5>
            <b>Hi There</b>
          </h5>
          <small id="chat-head-content">
            Hello Ask US Anything, Share Your Feedback
          </small>
        </div>

        <div class="container my-3 ml-3" id="part-div-before">
          <div>
            <small>
              <b>Start a Conversation</b>
            </small>
            <br />
            <small class="small">
              <b>The team typically replies in a few minutes.</b>
            </small>
          </div>
          <div class="my-2">
            <button class="start-btn" onClick={startConvo}>
              New Conversation
            </button>
          </div>
        </div>

        <div id="part-div-after" class="my-3">
          <div class="msg-sent my-2">
            <small>
              Is there any offline version available for Maxeon Player?
            </small>
          </div>
          <div class="my-2 msg-recv ">
            <div class="circle"></div>
            <div class="msg-body">
              <small>Currently we don't have but we will launch soon.</small>
            </div>
          </div>
        </div>

        <footer id="foot">
          <img src={image} alt="icon" />
          We run on surveysparrow
        </footer>

        <div id="typed-msg">
          <hr />

          <form action="">
            <input type="text" placeholder="Write a reply..." required />
            <button class="send-btn"></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatPopup
