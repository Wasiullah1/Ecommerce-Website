import React from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Usually 2-5 working days depending on location.",
    },
    {
      question: "Can I return products?",
      answer: "Yes, returns are accepted within 7 days if items are unopened.",
    },
    {
      question: "Is my payment secure?",
      answer: "Absolutely. We use secure encrypted payment gateways.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, support is available 24/7 through email or chat.",
    },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((item, index) => (
        <div key={index} className="faq-item">
          <h4>{item.question}</h4>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
