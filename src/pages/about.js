import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import m1 from '../images/m1.jpeg';
import m2 from '../images/m2.jpeg';
import m4 from '../images/m4.jpeg';
import m5 from '../images/m5.jpeg';
import m6 from '../images/m6.jpeg';
import m7 from '../images/m7.jpeg';

const AboutUs = () => {
  const certificateImages = ["https://placekitten.com/100/100?image=1",
  "https://placekitten.com/100/100?image=2",
  "https://placekitten.com/100/100?image=3",
  "https://placekitten.com/100/100?image=4",
  "https://placekitten.com/100/100?image=5",
  "https://placekitten.com/100/100?image=6",
  "https://placekitten.com/100/100?image=7",
  "https://placekitten.com/100/100?image=1",
  "https://placekitten.com/100/100?image=2",
  "https://placekitten.com/100/100?image=3",
  "https://placekitten.com/100/100?image=4",
  "https://placekitten.com/100/100?image=5",
  "https://placekitten.com/100/100?image=6",
  "https://placekitten.com/100/100?image=7",];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-8 bg-slate-200">
      {/* First div */}
      <div className="w-full text-center">
        <h2 className="text-2xl font-bold">OUR Story</h2>
      </div>

      {/* Second div */}
      <div className="flex flex-col lg:flex-row w-full p-12">
        <div className="lg:w-1/2 ">
          <img src={m4} alt="Left Image" className="w-full h-auto rounded-lg" />
        </div>
        <div className="lg:w-1/2 p-4 ml-4 text-justify">
          <p className="text-lg">
          In this article, we define the company profile and discuss its importance, deliver steps for writing a company profile, list tips for a strong profile and offer a template and example of a typical company profile, plus we take a look at Indeed’s Company Pages.
          Before you begin writing the company profile, it's important to identify its purpose. Company profiles can include different elements depending on their target audience and end goal.

Once you have identified the profile's purpose, you can think about elements to incorporate that emphasize that purpose. Here are some elements to consider including in the profile:
          </p>
        </div>
      </div>

      {/* Third div */}
      <div className="flex flex-col lg:flex-row w-full p-12">
        <div className="lg:w-1/2 p-4 mr-4 text-justify">
          <p className="text-lg">
          In this article, we define the company profile and discuss its importance, deliver steps for writing a company profile, list tips for a strong profile and offer a template and example of a typical company profile, plus we take a look at Indeed’s Company Pages....
          Vanilla-swipe wrapper in React, created by the same individual.

The React Alice Carousel is a straightforward slider with responsive choices, fading animations, auto-play mode, RTL support, and drag functionality. Custom rendering, numerous items in a slide, and a “control strategy” option to tweak the navigation components are among the more complex features.

It’s straightforward to set up and use, and you won’t be overwhelmed by it. Simple carousels are ideal.


          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={m7} alt="Right Image" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Fourth div with the Slider component */}
      <div className="w-full text-center relative">
        <h2 className="text-2xl font-bold">Certificate</h2>
        <div className="mx-auto w-full max-w-4xl mt-8 rounded-lg overflow-hidden relative" style={{ overflowX: 'auto' }}>
          <Slider {...settings} scrollbar-hide>
            {certificateImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-full rounded-full overflow-hidden"> 
                  <img src={image} alt={`Certificate Image ${index + 5}`} className="w-1/2 h-auto object-cover rounded-full" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


// overflow-hidden