import React from "react";
import './maps.css'

function Maps() {
  return (
    <section className="map-box mb-16">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:max-w-4xl mx-auto text-center">
          <h2 className="text-center text-3xl text-red-600 font-bold sm:text-1xl ">
            Visit Our Location
          </h2>
          <p className="mt-4 text-lg text-gray-400 text-center">
            Drop by to meet our team and experience the quality of our halal meat products firsthand.
          </p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="col-span-2 rounded-lg overflow-hidden">
              <iframe
                title="Partex Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19886.236736610553!2d36.826391150763175!3d-1.2891017586434257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16650a3d78d9%3A0x49ff7e99e56c6ff7!2sPostbank%20House%2C%205th%20Floor%2C%20Banda%20Street%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1694685267113!5m2!1sen!2sus"
                width="100%"
                height="480"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-red-500">
                    Our Address
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Postbank House, 5th Floor, Banda Street, Nairobi, Kenya
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-red-500">Hours</h3>
                  <p className="mt-1 text-gray-600">
                    Monday - Friday: 9am - 5pm
                  </p>
                  <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                  <p className="mt-1 text-gray-600">Sunday: Closed</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-red-500">Contact</h3>
                  <p className="mt-1 text-gray-600">Email: partexpropeties@gmail.com</p>
                  <p className="mt-1 text-gray-600">Phone: +254723166711</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Maps;
