import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I know the right courses for me?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae architecto aliquid nostrum numquam quibusdam.",
    },
    {
      question: "How do I know the right courses for me?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae architecto aliquid nostrum numquam quibusdam.",
    },
    {
      question: "How do I know the right courses for me?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae architecto aliquid nostrum numquam quibusdam.",
    },
    {
      question: "How do I know the right courses for me?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae architecto aliquid nostrum numquam quibusdam.",
    },
    {
      question: "How do I know the right courses for me?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae architecto aliquid nostrum numquam quibusdam.",
    },
    {
      question: "How do I know the right courses for me?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium quis qui similique quidem at voluptatem ex. Est dolorum minima dolor aut ut, accusantium vitae architecto aliquid nostrum numquam quibusdam.",
    },
    // Add more FAQ items as needed
  ];

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="container faqs__container">
        {faqs.map((faq, index) => (
          <article
            key={index}
            className={`faq ${index === openIndex ? "open" : ""}`}
            onClick={() => handleToggle(index)}
          >
            <div className="faq__icon">
              {index === openIndex ? <Unicons.UilMinus /> : <Unicons.UilPlus />}
            </div>
            <div className="question__answer">
              <h4>{faq.question}</h4>
              <p style={{ display: index === openIndex ? "block" : "none" }}>
                {faq.answer}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Faqs;