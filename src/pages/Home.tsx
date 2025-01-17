import { Button } from "@/components/ui/button";

import HotelCarousel from "@/components/HotelCarousel";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "@/lib/content";
import { images } from "../../public/assets/export";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer hook
import WhyChooseSaavi from "@/components/whychoosesaavi";
import PerfectGateway from "@/components/perfectgateway";
import background_Image2 from "../../public/assets/backgroundImage2.png";
import background_Image1 from "../../public/assets/backgroundImage1.png";
import Experience from "../components/experience";
import Testimonial from "@/components/testimonial";
import SaaviCards from "@/components/saaviCards";
import homeImage1 from "../../public/assets/homeImage1.png";
import homeImage2 from "../../public/assets/homeImage2.png";
import homeImage3 from "../../public/assets/HomeImage3.png";

import "react-datepicker/dist/react-datepicker.css";


import HomeForm from "@/components/homeForm";

// import SearchFrom from "@/components/searchform";


function Facilities({ }) {
  return (
    <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center font-serif text-red-700 mb-12">
        Our Facilities
      </h2>
  
      {/* Responsive Grid for Flip Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
        {/* Render all facilities */}
        {content.facilities.map((facility, index) => (
          <div
            key={index}
            className="group h-96 w-full [perspective:1000px] mx-auto"
          >
            <div className="relative h-full w-full rounded-lg shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Face */}
              <div className="absolute inset-0 h-full w-full rounded-lg [backface-visibility:hidden]">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="object-cover h-full w-full rounded-lg"
                />
                <p className="absolute bottom-4 left-4 text-xl text-white bg-red-700 px-2 py-1 rounded-md">
                  {facility.title}
                </p>
              </div>
              {/* Back Face */}
              <div className="absolute inset-0 h-full w-full rounded-lg bg-black/80 px-8 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h3 className="text-xl font-bold mb-4">{facility.title}</h3>
                  <p className="text-sm mb-4">{facility.description}</p>
                  <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  

  );
}


export default function Home() {
  const [currentImage, setCurrentImage] = useState(homeImage1);
  const imageArray = [homeImage1, homeImage2, homeImage3];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = imageArray.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % imageArray.length;
        return imageArray[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={currentImage}
            alt="Luxury Hotel"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 w-full mt-10 max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center">
        <div className="hidden md:block">
        <HomeForm />
      </div>

          <Link to="/booking" className="mt-6">
            <Button size="lg" className="animate-fade-up animate-delay-400 transform hover:scale-105">
              Book Your Stay Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>


      {/* Hide HomeForm on mobile screens */}
     


      {/* Featured Hotels */}
      <section className="py-20 bg-gray-50 w-full "style={{ backgroundImage: `url(${background_Image1})` }}>
        <div className="w-full px-0">
          <h2 className="text-3xl font-serif text-red-700 font-bold text-center mb-12 animate-slide-in-top">
            Experience Saavi Hospitality
          </h2>
          <div className="w-full">
            <HotelCarousel />
          </div>
        </div>
      </section>


      <WhyChooseSaavi />

      {/* Our Facilities */}
      
      <Facilities />


      <div style={{ backgroundImage:`url(${background_Image2})`}}>
        {/* <OurStory /> */}
        {/* Our Story Section */}
        <section
          ref={storyRef}
          className={`py-20 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${storyInView ? "opacity-100" : "opacity-0"
            } transform ${storyInView ? "translate-y-0" : "translate-y-10"}`}
          
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg py-10 relative">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center text-left">
                <h2 className="text-3xl font-serif font-bold mb-4 animate-slide-in-left">
                  Our Story
                </h2>
                <h3 className="text-2xl font-serif font-semibold text-red-700 mb-6 animate-slide-in-left animate-delay-200">
                  A Legacy of Luxury
                </h3>
                <p className="text-sm text-gray-600 mb-4 font-light animate-slide-in-left animate-delay-400">
                  <span className="font-bold text-red-700">SAAVI HOTELS</span>, a name synonymous with luxury and comfort, has been redefining the hospitality industry since [Year]. With a rich legacy and a commitment to excellence, we have established ourselves as a leading hotel chain in India.
                </p>
                <p className="text-sm text-gray-600 mb-4 font-light animate-slide-in-left animate-delay-500">
                  Our journey began with a vision to create world-class accommodations that cater to the diverse needs of our guests. Over the years, we have expanded our footprint across various locations, each hotel a testament to our dedication to quality and innovation.
                </p>
                <p className="text-sm text-gray-600 animate-slide-in-left animate-delay-600">
                  We pride ourselves on offering exceptional hospitality, from the moment you step into our lobby to the time you check out. Our experienced staff is committed to providing personalized service and ensuring your stay is truly memorable.
                </p>
              </div>
              <div className="flex items-center justify-center animate-scale-up animate-delay-700">
                <img
                  src={images.Image_3}
                  alt="Our Story"
                  className="w-9/12 h-9/12 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            {/* Learn More Button */}
            <div className="absolute">
              <button className="flex items-center bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>


        </section>


        <PerfectGateway />

        <div >
          <Experience />
        </div>
        {/* <Guest /> */}
      </div>
      <Testimonial />
      <SaaviCards />
      {/* Upcoming Projects */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slide-in-bottom">
            Upcoming Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.upcomingProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p>Coming Soon - {project.openingDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {content.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
