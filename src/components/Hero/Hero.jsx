import React from 'react';
import './Hero.css'

const specialties = [
  { icon: 'tools', color: 'primary', title: 'Expert Technicians' },
  { icon: 'clock-history', color: 'success', title: 'Quick Turnaround' },
  { icon: 'cash-coin', color: 'warning', title: 'Affordable Pricing' },
];

const Hero = () => {
  return (
    <div className="container my-5 position-relative">

      {/* Advertisement Poster */}
      <div className="bg-dark text-white text-center p-5 rounded shadow mb-5 animate_animated animate_fadeIn position-relative">
        <div className="position-absolute top-0 end-0 m-3">
          <a href="#contact" className="btn btn-success btn-sm">Book a Complaint</a>
        </div>
        <h1 className="display-5 fw-bold">Smart Services</h1>
        <p className="lead mt-3">Fast. Reliable. Affordable Appliance Repairs at Your Doorstep!</p>
        <p className="mb-0">Washing Machines | ACs | Refrigerators | Microwaves | More...</p>
      </div>

      {/* Our Services */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <p className="text-center lead">
          At <strong>Smart Services</strong>, we offer comprehensive repair, maintenance, and installation services 
          for a wide range of household appliances. Whether it’s routine servicing or urgent repairs, our certified 
          experts are ready to assist you.
        </p>
      </section>

      {/* Our Speciality */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Our Speciality</h2>
        <div className="row g-4 text-center">
          {specialties.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="p-4 bg-light rounded shadow h-100 speciality-tile">
                <i className={`bi bi-${item.icon} fs-1 text-${item.color}`}></i>
                <h5 className="mt-3">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="mb-5">
        <h2 className="text-center mb-3">About Us</h2>
        <p className="text-center lead">
          Welcome to <strong>Smart Services</strong> – your trusted partner in appliance repair and maintenance. 
          We specialize in fast, affordable, and expert service for all major home appliances. Our certified 
          technicians ensure top-notch quality and customer satisfaction, with same-day services available in many areas.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-light p-4 rounded shadow-sm">
        <h4 className="text-center mb-3">Contact Us</h4>
        <div className="row">
          <div className="col-md-6 text-center mb-3 mb-md-0">
            <p><strong>Address:</strong><br />
              Smart Services,<br />
              123 Main Street,<br />
              Kochi, Kerala - 682001
            </p>
          </div>
          <div className="col-md-6 text-center">
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> support@smartservices.in</p>
            <p><strong>Working Hours:</strong> Mon - Sat, 9 AM to 7 PM</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;
