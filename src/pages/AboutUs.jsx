// src/pages/AboutUs.jsx
import React from "react";

function AboutUs() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-12 px-8">
        <h1 className="text-4xl font-bold mb-4">About LomApp</h1>
        <p className="text-lg max-w-3xl">
          At <span className="font-semibold">LomApp</span>, we believe education
          should be simple, engaging, and accessible. Our platform combines
          cutting-edge technology with expert teaching to create powerful
          learning experiences.
        </p>
      </div>

      {/* Mission Section */}
<div className="p-8 bg-gray-50">
  <div className="p-6 rounded-lg shadow-md border-l-4 border-green-500 bg-white hover:shadow-lg transition">
    <div className="flex items-center gap-3 mb-3">
      <span className="text-green-600 text-3xl">🎯</span>
      <h2 className="text-2xl font-semibold text-green-700">Our Mission</h2>
    </div>
    <p className="text-gray-700 leading-relaxed">
      To provide industry-relevant, skill-based education that empowers learners 
      to succeed in the digital age. We focus on innovation, inclusivity, and 
      real-world application of knowledge.
    </p>
  </div>
</div>

{/* Vision Section */}
<div className="p-8 bg-white">
  <div className="p-6 rounded-lg shadow-md border-l-4 border-blue-500 bg-gray-50 hover:shadow-lg transition">
    <div className="flex items-center gap-3 mb-3">
      <span className="text-blue-600 text-3xl">🌍</span>
      <h2 className="text-2xl font-semibold text-blue-700">Our Vision</h2>
    </div>
    <p className="text-gray-700 leading-relaxed">
      To make learning global, breaking barriers of cost, location, and background.
    </p>
    <p className="text-gray-700 leading-relaxed mt-2">
      While fostering <span className="font-semibold text-blue-600">innovation</span> 
      and <span className="font-semibold text-blue-600">creativity</span> across all learners.
    </p>
  </div>
</div>


      {/* Values Section */}
      <div className="bg-white-100 py-10 px-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          Our Core Values
        </h2>
        <ul className="list-disc list-inside space-y-2 max-w-3xl">
          <li>Commitment to quality learning</li>
          <li>Innovation in teaching methods</li>
          <li>Inclusivity and accessibility</li>
          <li>Continuous improvement</li>
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          Why Choose LomApp?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
            <p>
              Learn from industry professionals with years of teaching and
              real-world experience.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
            <p>
              Study anytime, anywhere, with our adaptive learning platform
              designed for students worldwide.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Career Support</h3>
            <p>
              Get access to placement assistance, interview preparation, and
              career guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Key Stats Section */}
      <div className="bg-green-50 py-10 px-8 grid md:grid-cols-4 gap-6 text-center">
        <div>
          <h3 className="text-3xl font-bold text-green-600">5000+</h3>
          <p>Learners</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green-600">200+</h3>
          <p>Courses</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green-600">100+</h3>
          <p>Expert Mentors</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green-600">95%</h3>
          <p>Success Rate</p>
        </div>
      </div>

      <div className="bg-white-100 py-16 px-8">
  <h2 className="text-3xl font-bold mb-10 text-center text-green-700">
    Meet Our Team
  </h2>
  <div className="flex justify-center gap-12 flex-wrap">
    <div className="text-center max-w-xs">
      <img
        src="/pictures/person.png"
        alt="John Doe"
        className="w-36 h-36 mx-auto rounded-full border-4 border-green-500 mb-4"
      />
      <h3 className="text-xl font-semibold">John Doe</h3>
      <p className="text-green-600 font-medium">CEO & Founder</p>
      <p className="text-gray-600 mt-2">
        Visionary leader with 10+ years in EdTech.
      </p>
    </div>

    <div className="text-center max-w-xs">
      <img
        src="/pictures/person.png"
        alt="Jane Smith"
        className="w-36 h-36 mx-auto rounded-full border-4 border-blue-500 mb-4"
      />
      <h3 className="text-xl font-semibold">Jane Smith</h3>
      <p className="text-green-600 font-medium">Head of Learning</p>
      <p className="text-gray-600 mt-2">
        Leading innovation in teaching methodologies.
      </p>
    </div>

    <div className="text-center max-w-xs">
      <img
        src="/pictures/person.png"
        alt="Mark Wilson"
        className="w-36 h-36 mx-auto rounded-full border-4 border-purple-500 mb-4"
      />
      <h3 className="text-xl font-semibold">Mark Wilson</h3>
      <p className="text-green-600 font-medium">Tech Lead</p>
      <p className="text-gray-600 mt-2">
        Building scalable, user-friendly education systems.
      </p>
    </div>
  </div>
</div>
      </div>

  );
}

export default AboutUs;
