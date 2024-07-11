import React, { useState } from 'react';
import "./Faq.css";

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "Why should I hire a professional resume writing service?",
      answer: "Professional resume writers have the expertise to highlight your strengths, optimize keywords, and create a compelling resume that stands out to recruiters. Investing in a professional service increases your chances of landing interviews."
    },
    {
      id: 2,
      question: "How do you ensure my resume gets past applicant tracking systems (ATS)?",
      answer: "We optimize your resume with relevant keywords and follow industry best practices to ensure compatibility with ATS. Our goal is to help your resume pass through ATS scans and reach the hands of hiring managers."
    },
    {
      id: 3,
      question: "Can I update my resume in the future?",
      answer: "Absolutely! We understand that your career evolves. We offer resume updating services free for upto 3 times for our previous clients."
    },
    {
      id: 4,
      question: "What makes your resume writing service different from others?",
      answer: "A: Our service is personalized, results-driven, and backed by experienced professionals. We focus on showcasing your unique value proposition and offer a satisfaction guarantee for our clients."
    },
    {
      id: 5,
      question: "How do I get started with your resume writing service?",
      answer: "To get started, simply choose a service package, fill out our questionnaire, and schedule a consultation. Our team will guide you through the process to ensure a seamless experience."
    },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        {faqData.map(item => (
          <div className="accordion-item" key={item.id}>
            <button
                className='faq_btn'
              id={`accordion-button-${item.id}`}
              aria-expanded={activeItem === item.id ? 'true' : 'false'}
              onClick={() => toggleAccordion(item.id)}
            >
              <span className="accordion-title">{item.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className={`accordion-content ${activeItem === item.id ? 'open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
