import axios from 'axios';
import React, { useState }  from 'react'
import toast from 'react-hot-toast';
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

{/* https://app.getform.io/forms - for form data show
    https://react-hot-toast.com/ - for notifications in website
  */}
  {/* What are the exceptional options to Tailwind CSS? 
    Bootstrap, Bulma, Foundation, Materialize CSS, Semantic UI, UIkit, Tachyons,
     Spectre CSS, Pure CSS, and Shoelace CSS */}

function Contact() {
  return (
    <>
        <div name="Contact" className="container mx-auto px-4 py-10">
      {/* <h1 className="text-4xl font-bold text-center text-primary mb-10 opacity-0 -translate-y-5 animate-fadeInDown">Contact Us</h1> */}
      <header className="bg-gradient-to-r from-purple-500 to-purple-800 text-white text-center py-10 mb-10 clip-polygon">
             <h1 className="text-4xl font-bold mb-2 animate-fadeInDown">Contact Us</h1>
            </header>
      <div className="flex flex-wrap gap-10">
        <div className="flex-1 min-w-[300px] bg-white p-8 rounded-lg shadow-md opacity-0 translate-y-5 animate-fadeInUp">
          <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
          <div className="mb-4 flex items-center">
            <span><FaHome size={24}/></span>
            <span className='ml-3'>11,Shree Shyam Society, Bavla,Gujarat,</span>
          </div>
          <div className="mb-4 flex items-center">
            <i><IoCall size={24}/></i>
            <span className='ml-3'>91+ 1234567891</span>
          </div>
          <div className="mb-4 flex items-center">
            <i><MdOutlineEmail size={24}/></i>
            <span className='ml-3'>jaiminrathod412@gmail.com</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
    </>
  )
}


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', phone: '', message: '' });
       const userInfo = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    }
    try{
      await axios.post("https://getform.io/f/bgdyqmva",userInfo);
      toast.success("Your Massage has been sent")
    }catch(error){
      toast.error("Something went wrong")
      console.log(error);
    }
 
    console.log('Form submitted:', formData);
    // alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="flex-1 min-w-[300px] bg-white p-8 rounded-lg shadow-md opacity-0 translate-y-5 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
      <h2 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-1 text-secondary">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-0 py-2 border-b-2 border-secondary bg-transparent focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-1 text-secondary">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-0 py-2 border-b-2 border-secondary bg-transparent focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block mb-1 text-secondary">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-0 py-2 border-b-2 border-secondary bg-transparent focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block mb-1 text-secondary">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-0 py-2 border-b-2 border-secondary bg-transparent focus:outline-none focus:border-primary transition-colors h-24 resize-y"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-5 py-3 rounded-md hover:bg-secondary transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group"
        >
          Send Message
          <span className="absolute inset-0 h-full w-full bg-white/20 scale-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-100"></span>
        </button>
      </form>
    </div>
  );
};

export default Contact







// import React, { useState } from 'react';

// function Contact(){
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setFormData({ name: '', email: '', phone: '', message: '' });
//     alert('Thank you for your message. We will get back to you soon!');
//   };

//   return (
//     <div name="Contact" className="max-w-5xl mx-auto px-4 py-10 bg-purple-50 text-gray-800">
//       <h1 className="text-center text-4xl font-bold text-purple-600 mb-10">Contact Us</h1>
//       <div className="flex flex-wrap gap-10">
//         <div className="flex-1 min-w-[300px] bg-white p-8 rounded-lg shadow-lg transform transition-opacity duration-1000 ease-in-out opacity-0 translate-y-5 animate-fade-in-up">
//           <h2 className="text-2xl font-semibold text-purple-600 mb-6">Contact Information</h2>
//           <div className="mb-6 flex items-center">
//             <i className="fas fa-map-marker-alt text-purple-500 text-lg mr-3"></i>
//             <span>123 Main Street, City, Country</span>
//           </div>
//           <div className="mb-6 flex items-center">
//             <i className="fas fa-phone text-purple-500 text-lg mr-3"></i>
//             <span>+1 (123) 456-7890</span>
//           </div>
//           <div className="mb-6 flex items-center">
//             <i className="fas fa-envelope text-purple-500 text-lg mr-3"></i>
//             <span>info@example.com</span>
//           </div>
//           <div className="flex items-center">
//             <i className="fas fa-clock text-purple-500 text-lg mr-3"></i>
//             <span>Mon-Fri: 9am-5pm</span>
//           </div>
//         </div>
//         <div className="flex-1 min-w-[300px] bg-white p-8 rounded-lg shadow-lg transform transition-opacity duration-1000 ease-in-out opacity-0 translate-y-5 animate-fade-in-up delay-200">
//           <h2 className="text-2xl font-semibold text-purple-600 mb-6">Send Us a Message</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label htmlFor="name" className="block text-purple-600 mb-2">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-2 border-b-2 border-purple-500 bg-transparent text-gray-800 focus:outline-none focus:border-purple-600"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="email" className="block text-purple-600 mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 border-b-2 border-purple-500 bg-transparent text-gray-800 focus:outline-none focus:border-purple-600"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="phone" className="block text-purple-600 mb-2">Phone</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-2 border-b-2 border-purple-500 bg-transparent text-gray-800 focus:outline-none focus:border-purple-600"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="message" className="block text-purple-600 mb-2">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full p-2 border-b-2 border-purple-500 bg-transparent text-gray-800 focus:outline-none focus:border-purple-600"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transform transition-all ease-out hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
//             >
//               Send Message
//               <span className="absolute inset-0 w-0 h-0 bg-white opacity-20 rounded-full transform translate-x-1/2 translate-y-1/2 transition-all duration-500 ease-out group-hover:w-[300px] group-hover:h-[300px]"></span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        :root {
            --primary-color: #8e44ad;
            --secondary-color: #9b59b6;
            --text-color: #333;
            --bg-color: #f3e5f5;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        h1 {
            text-align: center;
            margin-bottom: 40px;
            color: var(--primary-color);
            font-size: 2.5em;
            opacity: 0;
            transform: translateY(-20px);
            animation: fadeInDown 1s forwards;
        }

        .contact-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
        }

        .contact-info, .contact-form {
            flex: 1 1 300px;
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            opacity: 0;
            transform: translateY(20px);
        }

        .contact-info {
            animation: fadeInUp 1s forwards 0.5s;
        }

        .contact-form {
            animation: fadeInUp 1s forwards 0.7s;
        }

        h2 {
            margin-bottom: 20px;
            color: var(--primary-color);
        }

        .info-item {
            margin-bottom: 20px;
            display: flex;
            align-items: center;
        }

        .info-item i {
            margin-right: 10px;
            color: var(--secondary-color);
            font-size: 1.2em;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        .form-group {
            margin-bottom: 20px;
            position: relative;
        }

        label {
            display: block;
            margin-bottom: 5px;
            color: var(--secondary-color);
        }

        input, textarea {
            width: 100%;
            padding: 10px 0;
            border: none;
            border-bottom: 2px solid var(--secondary-color);
            background-color: transparent;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        input:focus, textarea:focus {
            outline: none;
            border-color: var(--primary-color);
        }

        textarea {
            height: 100px;
            resize: vertical;
        }

        button {
            background-color: var(--primary-color);
            color: #fff;
            border: none;
            padding: 12px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        button::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.5s ease;
        }

        button:hover::after {
            width: 300px;
            height: 300px;
        }

        button:hover {
            background-color: var(--secondary-color);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(155, 89, 182, 0.3);
        }

        @keyframes fadeInDown {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 768px) {
            .contact-wrapper {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Contact Us</h1>
        <div class="contact-wrapper">
            <div class="contact-info">
                <h2>Contact Information</h2>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>123 Main Street, City, Country</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <span>+1 (123) 456-7890</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-envelope"></i>
                    <span>info@example.com</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <span>Mon-Fri: 9am-5pm</span>
                </div>
            </div>
            <div class="contact-form">
                <h2>Send Us a Message</h2>
                <form id="contactForm">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </div>

    <script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossorigin="anonymous"></script>
    <script>
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            console.log('Form submitted:', { name, email, phone, message });

            // Clear form fields
            this.reset();

            // Show a success message (you can replace this with a more sophisticated notification)
            alert('Thank you for your message. We will get back to you soon!');
        });
    </script>
</body>
</html> */