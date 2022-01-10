import React, { useState } from 'react';
import FAQ from './Faq';
import './MCFaq.css';
function MCFaq () {
  const [faqs, setfaqs] = useState([
    {
      question: 'What should you do if you have been exposed to COVID-19?',
      answer: 'Those who may have been exposed to someone with COVID-19 and those who have recently travelled to a country or region with the widespread transmission have been advised to self-quarantine for 14 days from the time of last possible exposure.',
      open: true
    },
    {
      question: 'Can people with mild COVID-19 symptoms recover at home?',
      answer: 'People with mild symptoms who are otherwise healthy should manage their symptoms at home. On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.',
      open: false
    },
    {
      question: 'What are the common symptoms of COVID-19?',
      answer: 'The most common symptoms of COVID-19 are dry cough, tiredness and fever. Some people may develop more severe forms of the disease, such as pneumonia. The best way to confirm if you have the virus producing COVID-19 disease is with a laboratory test.',
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

export default MCFaq;