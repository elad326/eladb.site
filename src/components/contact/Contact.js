import React, { useRef, useState } from 'react';
import './contact.css';


import { contains_heb, validateEmail, phoneNumber } from './contactFunc';

const Contact = () => {

  const user_full_name = useRef();
  const user_tel = useRef();
  const user_email = useRef();
  const user_when_back = useRef();

  const [error, setError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  

  const sendEmail = () => {

    if(!user_full_name.current.value || !user_tel.current.value || !user_email.current.value || !user_when_back.current.value){
      setError("יש למלא את כל השדות.. ");
    }else if(!contains_heb(user_full_name.current.value)){
      setError("שדה שם מלא חייב להיות בעברית...");
    }else if(!phoneNumber(user_tel.current.value)){
      setError("טלפון צריך להיות בפורמט 05x-xxx-xxxx..");
    }else if(!validateEmail(user_email.current.value)){
      setError("שדה מייל לא תקין ... ");
    }else{
      setError("");
      setSubmitSuccess("הטופס נשלח בהצלחה ... ");
    }

  };


  return (
    <section>
      <h1 className='page-header'>צרו קשר עוד היום</h1>

      <div className='wrap-contact'>

        <form action="" method="POST">

          <input type='text' placeholder='שם מלא' ref={user_full_name} name="user_full_name"/>
          <input type='tel' placeholder='טלפון' ref={user_tel} name="user_tel"/>
          <input type='email' placeholder='מייל לחזרה' ref={user_email} name="user_email"/>
          <input type='text' placeholder='זמן נח לחזרה' ref={user_when_back} name="user_when_back"/>

          <div className='wrap-submit'>
            <input type="button" name="submit_contact" value="שלחו פרטים לשיחה ללא התחייבות" onClick={sendEmail}/> 
          </div>
           

          {error && 
            <span className='err-red'>{error}</span>
          }

          {submitSuccess && 
            <span className='success-green'>{submitSuccess}</span>
          }



        </form>

        <div className='contact-coffee' aria-hidden="true"></div>

      </div>
      
    </section>
  )
}

export default Contact