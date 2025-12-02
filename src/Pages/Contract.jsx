import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTelegram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Contract = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary-content mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-12">
          Have any questions or want to collaborate? Reach out to us using the
          form or through our various contact channels below.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-4 bg-base-100 shadow-lg rounded-2xl p-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="btn-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Multiple Contact Options */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-base-100 border border-accent shadow-lg rounded-2xl p-6 flex items-center space-x-4 hover:scale-105 transform transition-all duration-300">
              <FaMapMarkerAlt className="text-primary-content text-2xl" />
              <div>
                <h4 className="font-semibold text-primary-content">Address</h4>
                <p className=" text-primary-content">
                  123 Main Street, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-base-100 border border-accent shadow-lg rounded-2xl p-6 flex items-center space-x-4 hover:scale-105 transform transition-all duration-300">
              <FaPhone className="text-green-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-primary-content">Phone</h4>
                <p className="text-primary-content">+880 1234 567890</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-base-100 border border-accent  shadow-lg rounded-2xl p-6 flex items-center space-x-4 hover:scale-105 transform transition-all duration-300">
              <FaEnvelope className="text-red-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-primary-content">Email</h4>
                <p className="text-primary-content">info@institution.com</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-base-100 border border-accent shadow-lg rounded-2xl p-6 flex items-center space-x-4 hover:scale-105 transform transition-all duration-300">
              <FaWhatsapp className="text-green-600 text-2xl" />
              <div>
                <h4 className="font-semibold text-primary-content">WhatsApp</h4>
                <p className="text-primary-content">+880 1234 567890</p>
              </div>
            </div>

            {/* Telegram */}
            <div className="bg-base-100 border border-accent shadow-lg rounded-2xl p-6 flex items-center space-x-4 hover:scale-105 transform transition-all duration-300">
              <FaTelegram className="text-blue-400 text-2xl" />
              <div>
                <h4 className="font-semibold text-primary-content">Telegram</h4>
                <p className="text-primary-content">@institution_support</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-base-100 border border-accent shadow-lg rounded-2xl p-6 flex flex-col space-y-4 hover:scale-105 transform transition-all duration-300">
              <h4 className="font-semibold text-gray-700 mb-2">Follow Us</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
