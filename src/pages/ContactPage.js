import React from 'react';
import ContactItem from '../components/ContactItem';
import phone from '../images/phone1.svg';
import email from '../images/email1.svg';
import location from '../images/location1.svg';
import Title from '../components/Title'

function ContactPage() {
    return (
        <div>
            <div className="title-contact">
                <Title title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">

                {/* <Title title={'Contact Me'} span={'Contact Me'} /> */}
                <div className="map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.3738546332775!2d-84.35710218515652!3d33.776842680681746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5041fd6cae2db%3A0xed428333b7a3fe74!2s990%20Greenwood%20Ave%20NE%2C%20Atlanta%2C%20GA%2030306!5e0!3m2!1sen!2sus!4v1620705673389!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-section">
                    <ContactItem icon={phone} text1={'(770)294-5935'} title={"Phone"} />
                    <ContactItem icon={email} text1={'saeediarash84@gmail.com'} title={"Email"} />
                    <ContactItem icon={location} text1={'Atlanta, Ga'} title={"Location"} />
                </div>
            </div>
        </div>

    )
}

export default ContactPage;