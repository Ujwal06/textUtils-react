import React,{useState} from 'react'

export const About
 = (props) => {
  return (
    <div>
        <div className="accordion my-3" id="accordionExample" >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">About Us</button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'gray':'light'}}>
                <strong>TextUtils </strong>is a versatile tool designed to simplify text management and formatting tasks. With TextUtils, users can easily convert text to uppercase or lowercase, copy content to the clipboard, and even extract email addresses from any text. Ideal for users who need quick text modifications and email extraction, TextUtils makes handling text efficient and user-friendly.
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About;