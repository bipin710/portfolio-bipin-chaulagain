import React from 'react'
import con  from "../../assets/contact.png"
import "./Contact.css"

function Contact() {
  return (
    <div id="contact">
        <div className="leftcontact">
          <img src={con} alt="" /> 
        </div>
        <div className="rightcontact">
        <div class="rightcontact">
    <form action="https://formspree.io/f/xovvjabz" method="POST">
        <input name="Username" type="text" placeholder="Name" required />
        <input name="Email" type="email" placeholder="Email" required />
        <textarea name="message" id="textarea" placeholder="Message me" required></textarea>
        <input type="submit" id="btn" value="Submit" />
    </form>
</div>

    </div>
    </div>
  )
}

export default Contact
