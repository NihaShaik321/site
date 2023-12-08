import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  const handleScroll = (direction) => {
    const newIndex = direction === 'next' ? startIndex + 4 : startIndex - 4;
    setStartIndex(Math.max(0, Math.min(newIndex, totalImages.length - 4)));
  };
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

  const totalImages = [
    "https://placekitten.com/100/100?image=1",
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
    "https://placekitten.com/100/100?image=7",
    // Add more image URLs as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const testimonies = [
    "As a dedicated student using the StudyTap app, I have experienced an unparalleled transformation in my learning journey. The app's intuitive interface and diverse range of study materials have been my constant companions, making every study session efficient and enjoyable. The interactive quizzes and personalized progress tracking have fueled my motivation and helped me stay on top of my academic goals.",
    "The quick brown fox jumps over the lazy dog. This sentence is often used as a typing exercise, as it contains every letter of the alphabet.",
    "In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.",
    "To be or not to be, that is the question. Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles and, by opposing, end them.",
    "This is another testimony text for the example. It provides additional content to showcase the flexibility of the testimonies section.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length);
  };


  const heroImages = [
    {
      title: 'Title 1',
      imageUrl: 'https://placekitten.com/1200/500?image=1',
    },
    {
      title: 'Title 2',
      imageUrl: 'https://placekitten.com/1200/500?image=2',
    },
    {
      title: 'Title 3',
      imageUrl: 'https://placekitten.com/1200/500?image=3',
    },
    // Add more hero images as needed
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Set autoplay to true
    autoplaySpeed: 1500,  // Set the autoplay speed in milliseconds (3 seconds in this case)
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };


  return (
    <>
    {/* slider */}
      <div className="w-full h-1/2 relative">
      <Slider {...sliderSettings}>
        {heroImages.map((image, index) => (
          <div key={index} className="relative">
            <img src={image.imageUrl} alt={`Hero ${index + 1}`} className="w-full h-full object-cover" />
            {currentSlide === index && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
                {image.title}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>


      {/* services */}
      <div className='bg-green-100 pb-7 pt-7'>
        <h1 className='text-center text-4xl font-bold'>Our services</h1>
        <div className='flex flex-wrap justify-center mt-9'>
          {/* Service 1 */}
          <div className='service-box mb-6 sm:w-full md:w-1/2 lg:w-1/4 relative'>
            <div className="relative">
              <img src='https://placekitten.com/600/600?image=7' alt='HD Flower' className='rounded-md w-60 h-auto mx-auto' />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 hover:bg-slate-400 text-black font-bold py-2 w-40 px-4 mt-24 rounded-md pb-1 " >Know More</button>
            </div>

            <h1 className='text-center mt-3'>Service 1</h1>
            <p className='text-center mt-3'>Description about Service 1</p>
          </div>


          {/* Service 2 */}
          <div className='service-box mb-6 sm:w-full md:w-1/2 lg:w-1/4'>
          <div className="relative">
              <img src='https://placekitten.com/600/600?image=7' alt='HD Flower' className='rounded-md w-60 h-auto mx-auto' />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 hover:bg-slate-400 text-black font-bold py-2 w-40 px-4 mt-24 rounded-md pb-1" >Know More</button>
            </div>
            <h1 className='text-center mt-3'>Service 2</h1>
            <p className='text-center mt-3'>Description about Service 2</p>
          </div>

          {/* Service 3 */}
          <div className='service-box mb-6 sm:w-full md:w-1/2 lg:w-1/4'>
          <div className="relative">
              <img src='https://placekitten.com/600/600?image=7' alt='HD Flower' className='rounded-md w-60 h-auto mx-auto' />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 hover:bg-slate-400 text-black font-bold py-2 w-40 px-4 mt-24 rounded-md pb-1" >Know More</button>
            </div>
            <h1 className='text-center mt-3'>Service 3</h1>
            <p className='text-center mt-3'>Description about Service 3</p>
          </div>

          {/* Service 4 */}
          <div className='service-box mb-6 sm:w-full md:w-1/2 lg:w-1/4'>
          <div className="relative">
              <img src='https://placekitten.com/600/600?image=7' alt='HD Flower' className='rounded-md w-60 h-auto mx-auto' />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 hover:bg-slate-400 text-black font-bold py-2 w-40 px-4 mt-24 rounded-md pb-1" >Know More</button>
            </div>
            <h1 className='text-center mt-3'>Service 4</h1>
            <p className='text-center mt-3'>Description about Service 4</p>
          </div>
        </div>
      </div>

      {/* video */}
      <div className="text-center mt-8 mb-8 px-4 lg:px-12">
        <div className="relative">
          {/* Replace the video URL with the actual path to your video file */}
          <video controls className=" w-10/12 h-6/12   mx-auto  rounded-md">
            <source src="/path/to/your/video.mp4" type="video/mp4" />
            {/* Add additional source tags for other video formats if needed */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* Testimonials */}
      <div className="text-center  mb-8  pb-24 pt-12 bg bg-pink-100">
        <h1 className="text-4xl mb-8 font-bold">Testimonials</h1>
        <div className="flex items-center justify-between" style={{ maxWidth: '100%' }}>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 focus:outline-none"
          >
            &lt;
          </button>
          <div className="w-full lg:w-3/4 mb-6">
            <p className="text-base sm:text-lg md:text-xl lg:text-1xl">{testimonies[currentIndex]}</p>
          </div>
          <button
            onClick={handleNext}
            disabled={currentIndex === testimonies.length - 1}
            className="rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 focus:outline-none"
          >
            &gt;
          </button>
        </div>
      </div>
      {/* Certifications */}
      {/* <div className="text-center mt-8 mb-8 px-4 lg:px-12">
        <h1 className="text-4xl mb-8 font-bold">Certifications</h1>
        <div className="flex flex-wrap justify-between overflow-hidden" style={{ maxWidth: '100%' }}>
          <button onClick={() => handleScroll('prev')} disabled={startIndex === 0}>
            <span>&lt;</span>
          </button>
          {totalImages.slice(startIndex, startIndex + 4).map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${startIndex + index + 1}`}
              className="rounded-full w-24 h-24 m-2 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
          ))}
          <button onClick={() => handleScroll('next')} disabled={startIndex + 4 >= totalImages.length}>
            <span>&gt;</span>
          </button>
        </div>
      </div>  */}
      {/* <div className="text-center mt-8 mb-8 px-4 lg:px-12">
        <h1 className="text-4xl mb-8 font-bold">Certifications</h1>
        <div
          className="flex overflow-x-auto space-x-4 pb-8 animate-scroll " // Use the "animate-scroll" class
        >
          {totalImages.map((imageUrl, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ marginRight: '20px' }} // Adjust the space between images
            >
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
              />
            </div>
          ))}
        </div>
      </div> */}
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

{/* 
      contact */}
      <div className="text-center py-8">
  <h1 className="text-4xl font-bold text-indigo-800">Contact</h1>
  <div className="flex flex-col lg:flex-row justify-center items-center mt-8 ml-9">
    {/* Contact Form */}
    <div className="bg-gray-200 p-6 rounded-md lg:mr-4 lg:w-1/2">
      <form>
        <div className='lg:flex lg:justify-between mb-4'>
          <div className="mb-4 lg:w-1/2">
            <input type="text" id="name" name="name" className="w-full lg:w-full border-gray-300 rounded-md p-2" placeholder='Name' required />
          </div>
          <div className="mb-4 lg:w-1/2 lg:ml-2">
            <input type="email" id="email" name="email" className="w-full lg:w-full border-gray-300 rounded-md p-2" placeholder='Email' required />
          </div>
        </div>
        <div className='lg:flex lg:justify-between mb-4'>
          <div className="mb-4 lg:w-1/2">
            <input type="tel" id="phone" name="phone" className="w-full lg:w-full border-gray-300 rounded-md p-2" placeholder='Phone number' required />
          </div>
          <div className="mb-4 lg:w-1/2 lg:ml-2">
            <input type="text" id="designation" name="designation" className="w-full lg:w-full border-gray-300 rounded-md p-2 focus:border-pink-400" required placeholder='Designation' />
          </div>
        </div>
        <div className="mb-4">
          <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md p-2" required placeholder='Message'></textarea>
        </div>
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>

    {/* Map */}
    <div className="lg:w-1/2 mt-4 lg:mt-0 bg-transparent">
      <div className="bg-gray-200 p-6 rounded-md h-64 mr-9">
        {/* Replace the iframe with your map embed code */}
        <iframe
          title="Location Map"
          className="w-full h-full rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</div>



    </>
  );
};

export default Home;









