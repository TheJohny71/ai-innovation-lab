import React from 'react';
import ContactForm from './ContactForm';

const CallToAction = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="max-w-4xl w-full mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Get in touch with us to schedule a personalized demo and discover how our AI solutions can drive innovation in your organization.
        </p>
      </div>
      
      <ContactForm />
    </section>
  );
};

export default CallToAction;