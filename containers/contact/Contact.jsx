import React from 'react'
import './contact.css'
import {BsFillPersonFill, BsFillTelephoneFill} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
 
const Contact = () => {
    return (
        <div className='coffee__contact section__padding' id='contact'>
            <h1 className='coffee__contact-title'><span>CONTACT</span> US</h1>
            <div className='coffee__contact-container'>
                <div className='coffee__contact-container-mapbox'>
                    <iframe title='map' class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.411592794254!2d44.75290271493825!3d41.71163648379476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447339de54668d%3A0xa8a2e3fde5bd7203!2z4YOn4YOY4YOk4YOo4YOY4YOr4YOY4YOhIOGDpeGDo-GDqeGDkA!5e0!3m2!1sen!2sge!4v1646590264363!5m2!1sen!2sge" ></iframe>
                </div>

                <div className = 'coffee__contact-container-content'>
                    <h1>GET IN TOUCH</h1>
                    <form>
                        <div className='coffee__contact-container-content-inputbox'>
                            <span><BsFillPersonFill /></span>
                            <input type='text' placeholder='name' />
                        </div>
                        <div className='coffee__contact-container-content-inputbox'>
                            <span><MdOutlineEmail /></span>
                            <input type='text' placeholder='email' />
                        </div>
                        <div className='coffee__contact-container-content-inputbox'>
                            <span><BsFillTelephoneFill /></span>
                            <input type='text' placeholder='number' />
                        </div>
                    </form>

                    <div className='coffee__contact-container-content-button'>
                        <button>Contact Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact