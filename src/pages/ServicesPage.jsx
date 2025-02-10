import React from "react";

const services = [
  {
    category: "Cosmetic Injectables",
    services: ["Wrinkle Relaxers", "Fillers", "Fat Dissolvents", "Botox", "RHA"],
    image: "https://images.pexels.com/photos/7582560/pexels-photo-7582560.jpeg",
  },
  {
    category: "Skin Rejuvenation",
    services: [
      "Facials",
      "Lasers",
      "Microneedling",
      "Chemical Peels",
      "PDO Threads",
      "Skin Resurfacing",
      "Morpheus8",
    ],
    image: "https://dermindy.com/wp-content/uploads/2016/03/ThinkstockPhotos-187923649.jpg",
  },
  {
    category: "Wellness Services",
    services: [
      "Hormone Therapy (HRT)",
      "Women's Wellness",
      "Men's Wellness",
      "Medical Weight Loss",
      "IV Therapy",
    ],
    image: "https://images.pexels.com/photos/16571736/pexels-photo-16571736/free-photo-of-lights-in-room.jpeg",
  },
  {
    category: "Hair Treatments",
    services: ["Laser Hair Removal", "Hair Restoration", "Electrolysis"],
    image: "https://images.pexels.com/photos/19239092/pexels-photo-19239092/free-photo-of-laser-hair-removal-in-the-beauty-salon-woman-having-professional-laser-epilation-procedure-of-arm.jpeg",
  },
  {
    category: "Body Treatments",
    services: ["Body Sculpting", "Permanent Makeup"],
    image: "https://images.pexels.com/photos/3865560/pexels-photo-3865560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-light-brown/50 pt-32 pb-20">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?spa,relaxation')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl font-display font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl font-body max-w-2xl mx-auto">
            Enhance your beauty and wellness with our wide range of professional medical spa treatments.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={service.image} alt={service.category} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h2 className="text-3xl font-display text-dark-brown mb-4">{service.category}</h2>
                <ul className="text-lg font-body text-dark-green">
                  {service.services.map((item, i) => (
                    <li key={i} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-dark-brown text-white py-16 text-center">
        <h2 className="text-4xl font-display mb-4">Experience the Ultimate in Beauty & Wellness</h2>
        <p className="text-xl font-body mb-6 max-w-2xl mx-auto">
          Book a consultation today to discover the perfect treatments for your unique needs.
        </p>
        <a
          href="/appointment"
          className="px-6 py-3 bg-light-brown text-white rounded-full text-xl hover:bg-light-brown/90 transition duration-300"
        >
          Schedule a Consultation
        </a>
      </div>
    </div>
  );
};

export default ServicesPage;
