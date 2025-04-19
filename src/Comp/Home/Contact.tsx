import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';  // Lucide icons

// Contact Info Item Component
const ContactDetail = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold mb-1 text-lg">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  </div>
);

// Contact Form
const ContactForm = () => (
  <div className="border-none shadow-lg rounded-lg">
    <div className="p-6">
      <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">First Name</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Last Name</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Phone</label>
          <input
            type="tel"
            className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <textarea
            rows={4}
            className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

// Contact Section for Mechanique
const ContactSection = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Need help with a car issue, want to schedule a service, or just have a question? Reach out to our expert team at Mechanique.
          </p>
          <div className="space-y-6">
            <ContactDetail icon={<MapPin className="h-5 w-5 text-red-600" />} title="Our Garage">
              17/8 Sector 10, Near Vishwakarma Market, Jaipur, Rajasthan
            </ContactDetail>
            <ContactDetail icon={<Phone className="h-5 w-5 text-red-600" />} title="Call Us">
             +91 84323 12345
            </ContactDetail>
            <ContactDetail icon={<Clock className="h-5 w-5 text-red-600" />} title="Garage Hours">
              Mon - Fri: 9:00 AM – 7:00 PM
              <br />
              Sat - Sun: 10:00 AM – 5:00 PM
            </ContactDetail>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
