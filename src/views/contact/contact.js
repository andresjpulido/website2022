import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { db } from '../../services/firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";

export default function Contact(props) {
  
  const [visibleForm, setvisibleform] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const  onSubmit = async (values) => {
    alert(JSON.stringify(values, null, 2));
    let creationdate = new Date();

    try {
        let response = await db.ref('messages').push({
            name: values.name,
            email: values.email,
            message: values.message,
            subject: values.subject,
            creation_date: creationdate.toString(),
        });

        response.then(setvisibleform(false));
    } catch (error) {
        console.log(error.description);
    }
  }
  return (
    <section id={props.id} className="contact">
      <h3>CONTACT</h3>
      <h2>Contact Me</h2>
      <p>Looking for new challenges and learning</p>

      {visibleForm ? (

      <form
        action="#"
        className="bg-light p-4 p-md-5 contact-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          {errors.name && <span>Invalid name</span>}
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            {...register("name", {
              required: false,
              value: "" 
            })}
          />
        </div>

        <div className="form-group">
          {errors.email && <span>Invalid email</span>}
          <input
            type="email"
            className="form-control"
            placeholder="Your Email*"
            name="email"
            {...register("email", {
              required: true,
              value: "",
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
          />
        </div>

        <div className="form-group">
          {errors.subject && <span>Invalid subject</span>}
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="Subject"
            {...register("subject", {
              required: false,
              value: ""
            })}
          />
        </div>

        <div className="form-group">
          {errors.message && <span>Invalid message</span>}
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            className="form-control"
            placeholder="Message*"
            {...register("message", {
              required: true,
              value: "" 
            })}
          ></textarea>
        </div>
        <span className="form-note">* required values</span>
        <div className="form-group">
          <input
            type="submit"
            value="Send Message"
            className="btn btn-primary py-3 px-5"
          />
        </div>
        
      </form>

) : (
  <div className="contact-response">
      <FontAwesomeIcon icon={['far', 'check-circle']} />
      <p>Thanks for contact me, I&apos;ll be in touch soon!</p>
  </div>
)}

    </section>
  );
}
