import React, { useState } from 'react';
import "./Testimonial.css"

const Testimonial = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      title:'Helpful for me in writing an ATS compliant resume',
      text: 'The service has been helpful for me in writing an ATS compliant resume and giving me job suggestions.',
      author: '👤  Kaustuv Bhattacharya',
    },
    {
      id: 2,
      title:'Increasing chances of resume selection',
      text: 'Good for increasing chances of resume selection',
      author: '👤  Manish Himanshu',
    },
    {
      id: 3,
      title:'Accurate and appealing resume',
      text: 'Thanks for helping me with an accurate and appealing resume. You were very supportive in communication of expectations and deliverables of the same in the resume.',
      author: 'Bob Johnson',
    },
  ];

  // State to track the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to handle previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
    <h2 className='testi_head'>What our Customers Say</h2>
    <div className="testimonial">
    <button className="arrow arrow-left" onClick={handlePrev} disabled={currentIndex === 0}>{'<'}</button>
    <div>
        <p className='testimonials_title'>{testimonials[currentIndex].title}</p>
      <p className='testimonials_desc'>{testimonials[currentIndex].text}</p>
      <p className="author">{testimonials[currentIndex].author}</p>
    </div>
    <button className="arrow arrow-right" onClick={handleNext} disabled={currentIndex === testimonials.length - 1}>{'>'}</button>
  </div>
  </>
  );
};

export default Testimonial;
