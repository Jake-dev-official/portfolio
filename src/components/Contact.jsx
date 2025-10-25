import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-10">I'm currently open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out!</p>
        
        {/* The form action needs to be replaced with your own Formspree endpoint. 
            1. Go to https://formspree.io/
            2. Create a new form.
            3. Replace the action URL below with your form's endpoint URL.
        */}
        <form 
          action="https://formspree.io/f/[User to provide: Your Formspree ID]" 
          method="POST"
          className="max-w-xl mx-auto"
        >
          <div className="mb-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="5" 
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
