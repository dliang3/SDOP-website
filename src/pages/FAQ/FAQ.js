import React, { useState } from 'react';
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Questions obtained from survey.',
      content: 'Answer 1',
    },
    {
      title: 'Question 2',
      content: 'Answer 2',
    },
    {
      title: 'Question 3',
      content: 'Answer 3',
    },
  ];

  return (
    <div className="FAQ">

      <h1>Frequenty Asked Questions</h1>
      <div className="accordionContainer">
        <div className="accordion">
          <ul>
            {accordionData.map((item, index) => (
              <li key={index}>
                <h3 className={openIndex === index ? 'open' : ''} onClick={() => handleToggle(index)}>
                  {item.title}
                </h3>
                {openIndex === index && <p>{item.content}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
