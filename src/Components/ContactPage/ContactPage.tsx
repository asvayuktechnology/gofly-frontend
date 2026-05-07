import React from 'react'
import OfficeLocations from './OfficeLocations'
import ContactForm from './ContactForm'
import MapSection from '../Common/MapSection'

const ContactPage = () => {
    return (
        <>
            <div className="contact-page pt-100 mb-100">

                <OfficeLocations />
                <ContactForm />
                <>
                    <img
                        alt=""
                        loading="lazy"
                        width={90}
                        height={110}
                        decoding="async"
                        data-nimg={1}
                        className="vector1"
                        style={{ color: "transparent" }}
                        src="/assets/img/contact-page-vector1.svg"
                    />
                    <img
                        alt=""
                        loading="lazy"
                        width={100}
                        height={80}
                        decoding="async"
                        data-nimg={1}
                        className="vector2"
                        style={{ color: "transparent" }}
                        src="/assets/img/contact-page-vector2.svg"
                    />
                    <img
                        alt=""
                        loading="lazy"
                        width={130}
                        height={80}
                        decoding="async"
                        data-nimg={1}
                        className="vector3"
                        style={{ color: "transparent" }}
                        src="/assets/img/contact-page-vector3.svg"
                    />
                </>

            </div>
            <div className="contact-map-section">

                <MapSection width='full' height='auto' mapUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5647631857846!2d90.36311167605992!3d23.83407118555764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1700138349574!5m2!1sen!2sbd' />
            </div>
        </>
    )
}

export default ContactPage