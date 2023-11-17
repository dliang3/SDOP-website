import React, { useState } from 'react';
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // populate questions and answers here
  const accordionData = [
    {
      title: 'Questions obtained from survey.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare sem quis risus euismod, id sagittis eros laoreet. Phasellus viverra nunc vitae scelerisque molestie. Nulla facilisi. Aliquam et placerat risus, scelerisque congue neque. Suspendisse eget dolor finibus, ultricies odio eget, blandit tellus. Proin lacinia dolor nec ante placerat tempus. Maecenas sed maximus sapien. Curabitur facilisis a quam at accumsan. Mauris pharetra suscipit eleifend.',
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
