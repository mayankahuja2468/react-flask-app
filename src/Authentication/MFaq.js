import React, { useState } from 'react';
import FAQ from './Faq';
import './MFaq.css';
function MFaq () {
  const [faqs, setfaqs] = useState([
    {
      question: 'What should you not do when you have pneumonia?',
      answer: 'Stay away from smoke to let your lungs heal. This includes smoking, secondhand smoke, lit fireplaces, and polluted air. Exposure to smoke may increase risk for future lung problems, including another round of pneumonia.',
      open: true
    },
    {
      question: 'Should you stay home if you have pneumonia?',
      answer: 'Keep your body in good health with exercise and a healthy diet. If you have any ongoing health problems, take all medications as prescribed. Try to limit contact with people who are sick when possible. If you have pneumonia, stay home until you are well and your doctor says you are no longer contagious.',
      open: false
    },
    {
      question: 'How long is recovery from pneumonia?',
      answer: 'However, most people recover from pneumonia in about a week. Bacterial pneumonia usually starts to improve shortly after starting antibiotics, while viral pneumonia usually starts to improve after about three days. If you have a weakened immune system or a severe case of pneumonia, the recovery period might be longer.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
    
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default MFaq;