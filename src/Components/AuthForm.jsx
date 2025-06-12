import React, { useState } from 'react';
import { FiPhone, FiMail, FiUser, FiMessageSquare, FiX } from 'react-icons/fi';
import { FaRupeeSign } from "react-icons/fa";
import axios from 'axios';
import  toast  from 'react-hot-toast';

const ContactForm = ({ setShowLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    requirement: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const Info = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      requirement: formData.requirement,
      budget: formData.budget,
    };

      try {
      await axios.post("https://getform.io/f/aqomqqqa", Info);
      toast.success("Your message has been sent successfully!");
       setFormData({
        fullName: '',
        email: '',
        phone: '',
        requirement: '',
        budget: '',
      });
      setIsSubmitting(false);
      setShowLogin(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  const budgetOptions = [
    { value: '', label: 'Select Budget Range' },
    { value: '5000-15000', label: '₹5,000 - ₹15,000' },
    { value: '15000-30000', label: '₹15,000 - ₹30,000' },
    { value: '30000-50000', label: '₹30,000 - ₹50,000' },
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000+', label: '₹1,00,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto relative overflow-hidden">
      {/* Close Button */}
      <button
        onClick={() => setShowLogin(false)}
        className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
      >
        <FiX size={20} />
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 text-white">
        <h2 className="text-2xl font-bold text-center mb-2">Let's Work Together</h2>
        <p className="text-purple-100 text-center text-sm">
          Tell me about your project and I'll get back to you
        </p>
      </div>

      {/* Form */}
      <div className="px-8 py-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
              required
            />
          </div>

          {/* Budget */}
          <div className="relative">
            <FaRupeeSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 appearance-none bg-white"
              required
            >
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Requirement */}
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-4 text-gray-400" size={18} />
            <textarea
              name="requirement"
              placeholder="Tell me about your project requirements..."
              value={formData.requirement}
              onChange={handleInputChange}
              rows="4"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-3">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-2 text-gray-500 text-sm font-medium">OR</span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Call Button */}
        <a
          href="tel:+919574589604"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <FiPhone size={18} />
          <span>Call Now: +91 95745 89604</span>
        </a>

        {/* Quick Contact Info */}
        <div className=" p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong className="text-gray-800">Response Time:</strong> Usually within 2-4 hours
          </p>
          <p className="text-xs text-gray-500 text-center mt-1">
            Available Mon-Sat, 9 AM - 8 PM IST
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;