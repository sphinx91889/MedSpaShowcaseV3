import React from "react";
import { BackgroundVideo } from "../components/BackgroundVideo";

const AppointmentPage = () => {
  return (
    <div className="min-h-screen bg-light-brown/30">
      {/* Hero Section with Background Video */}
      <div className="relative h-64 overflow-hidden">
        <BackgroundVideo />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 bg-black/50">
          <h1 className="text-4xl font-display text-white mb-4">Enhance Your Image</h1>
          <h2 className="text-3xl font-display text-white mb-4">Improve Your Wellness</h2>
          <p className="text-xl font-body text-white">Make an Appointment at our Examplus Med Spa Today</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="mb-8 text-center">
            <p className="text-lg font-body text-dark-green max-w-2xl mx-auto">
              Examplus Medical Spa is here to accompany you on your journey toward optimal wellness and your most
              authentically beautiful appearance using advanced treatments and holistic therapies. Schedule your
              consultation to meet with one of our knowledgeable and experienced specialists to discuss your
              personalized Examplus med spa treatment.
            </p>
          </div>

          <form className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-dark-brown text-sm font-bold mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full border rounded py-2 px-3 text-dark-brown focus:outline-none focus:ring-2 focus:ring-light-brown"
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-dark-brown text-sm font-bold mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="w-full border rounded py-2 px-3 text-dark-brown focus:outline-none focus:ring-2 focus:ring-light-brown"
                  required
                />
              </div>

              <div>
                <label htmlFor="emailAddress" className="block text-dark-brown text-sm font-bold mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  className="w-full border rounded py-2 px-3 text-dark-brown focus:outline-none focus:ring-2 focus:ring-light-brown"
                  required
                />
              </div>

              <div>
                <label htmlFor="procedureOfInterest" className="block text-dark-brown text-sm font-bold mb-1">
                  Procedure of Interest*
                </label>
                <input
                  type="text"
                  id="procedureOfInterest"
                  className="w-full border rounded py-2 px-3 text-dark-brown focus:outline-none focus:ring-2 focus:ring-light-brown"
                  required
                />
              </div>

              <div>
                <label htmlFor="decisionStage" className="block text-dark-brown text-sm font-bold mb-1">
                  Decision Stage
                </label>
                <select
                  id="decisionStage"
                  className="w-full border rounded py-2 px-3 text-dark-brown focus:outline-none focus:ring-2 focus:ring-light-brown"
                >
                  <option>Researching</option>
                  <option>Ready to book</option>
                  <option>Just curious</option>
                </select>
              </div>

              <div>
                <label htmlFor="bestTimeToReach" className="block text-dark-brown text-sm font-bold mb-1">
                  Best Time to Reach You
                </label>
                <input
                  type="text"
                  id="bestTimeToReach"
                  className="w-full border rounded py-2 px-3 text-dark-brown focus:outline-none focus:ring-2 focus:ring-light-brown"
                />
              </div>

              <div>
                <label htmlFor="preferredLocation" className="block text-dark-brown text-sm font-bold mb-1">
                  Preferred Location
                </label>
                <select
                  id="preferredLocation"
                  className="w-full border rounded py-2 px-3 text-dark-brown focus:outline-none focus:ring-2 focus:ring-light-brown"
                >
                  <option>St. Johns</option>
                  <option>Gate Parkway</option>
                  <option>Fleming Island</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="aestheticNeeds" className="block text-dark-brown text-sm font-bold mb-1">
                  How can we assist your aesthetic needs?
                </label>
                <textarea
                  id="aestheticNeeds"
                  className="w-full border rounded py-2 px-3 text-dark-brown focus:outline-none focus:ring-2 focus:ring-light-brown"
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-6">
              <button
                type="submit"
                className="bg-light-brown hover:bg-light-brown/90 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-dark-brown flex items-center"
              >
                Schedule Appointment
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15.75m-7.5-7.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
              <a
                href="tel:(904)712-1448"
                className="text-light-brown hover:text-light-brown/80 font-bold text-sm mt-4 md:mt-0"
              >
                Call Us: (904) 712-1448
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
