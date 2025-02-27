import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Contact } from "./components/contact";
import ImageCarousel from "./components/ImageCarousel";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

const AnnouncementBar = () => {
  return (
    <section className="relative z-10 py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-2xl shadow-xl p-8 border border-primary/10 backdrop-blur-sm">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-white rounded-full p-4 mr-4 shadow-md">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                <path d="M12 7c2.5 0 4.5 2 4.5 4.5S14.5 16 12 16s-4.5-2-4.5-4.5S9.5 7 12 7z" />
                <path d="M12 9v2M12 13v2M10 11h4" />
                <path d="M15.5 8.5c.5.5.5 1.5 0 2s-1.5.5-2 0-.5-1.5 0-2 1.5-.5 2 0z" />
                <path d="M8.5 8.5c-.5.5-.5 1.5 0 2s1.5.5 2 0 .5-1.5 0-2-1.5-.5-2 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-primary font-bold text-base uppercase tracking-wider mb-1">Next Event</h3>
              <p className="text-gray-800 font-semibold text-lg">December 25, 2024 • 6:00 PM IST</p>
            </div>
          </div>
          <div className="flex gap-4">
            <a 
              href="#rsvp" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all duration-300 flex items-center hover:scale-105 shadow-lg text-base group"
            >
              <span className="group-hover:translate-x-1 transition-transform">Get Invitation</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <button 
              className="px-8 py-3 bg-white border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-all duration-300 flex items-center hover:scale-105 shadow-lg text-base group"
              onClick={() => {
                const event = {
                  text: 'Harikripa Foundation Event',
                  dates: '20241225T123000Z/20241225T153000Z',
                  details: 'Join us for a special event at Harikripa Foundation',
                  location: 'Mumbai, India'
                };
                window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.text)}&dates=${event.dates}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`);
              }}
            >
              <span className="group-hover:translate-x-1 transition-transform">Add to Calendar</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Visit
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Map Container */}
          <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-xl bg-white p-2 h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6627536421654!2d72.8270016!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>

          {/* Info Cards */}
          <div className="md:col-span-2 space-y-6">
            {/* Direction Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Here</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Peace Avenue, Spiritual Gardens, Mumbai 400001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Temple Hours</h4>
                    <p className="text-gray-600">Daily: 6:00 AM - 8:00 PM<br />Special Events: Check Calendar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transportation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Public Transport</h4>
                    <p className="text-gray-600">Bus Routes: 101, 102, 103<br />Nearest Metro: Peace Gardens Station</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Parking</h4>
                    <p className="text-gray-600">Free parking available on premises<br />Valet service during events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <AnnouncementBar />
      <ImageCarousel />
      <MapSection />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
