import React from "react";
import { FaDharmachakra, FaHeart, FaHandsHelping } from "react-icons/fa";

interface AboutProps {
  data?: {
    paragraph: string;
    Why: {
      paragraph: string;
      paragraph2: string;
      paragraph3: string;
    };
  };
}

export const About: React.FC<AboutProps> = (props) => {
  return (
    <div id="about" className="section-padding bg-background-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="section-title text-4xl font-heading font-bold text-primary mb-4">
            About Us
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            {props.data ? props.data.paragraph : "loading..."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-8 text-center animate-fadeIn hover:scale-105 transition-transform">
            <div className="flex justify-center mb-6">
              <FaDharmachakra className="text-5xl text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4">Our Mission</h3>
            <p className="text-textSecondary">
              {props.data ? props.data.Why.paragraph : "loading..."}
            </p>
          </div>

          <div className="card p-8 text-center animate-fadeInDelay hover:scale-105 transition-transform">
            <div className="flex justify-center mb-6">
              <FaHeart className="text-5xl text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4">Our Values</h3>
            <p className="text-textSecondary">
              {props.data ? props.data.Why.paragraph2 : "loading..."}
            </p>
          </div>

          <div className="card p-8 text-center animate-fadeInDelay hover:scale-105 transition-transform">
            <div className="flex justify-center mb-6">
              <FaHandsHelping className="text-5xl text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-4">Our Impact</h3>
            <p className="text-textSecondary">
              {props.data ? props.data.Why.paragraph3 : "loading..."}
            </p>
          </div>
        </div>

        <div className="text-center mt-16 animate-fadeInDelay">
          <a href="#contact" className="btn-primary inline-flex items-center hover:scale-105 transition-transform">
            <span className="mr-2">Join Our Journey</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About; 