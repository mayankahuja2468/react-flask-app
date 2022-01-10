import React, { useState } from 'react';
import FAQ from './Faq';
import './MLCFaq.css';
function MLCFaq () {
  const [faqs, setfaqs] = useState([
    {
      question: 'What innovations are helping the fight against lung cancer?',
      answer: 'Treatment advances in lung cancer are moving in two different directions: targeted therapy and immunotherapy. Targeted therapies are designed to interrupt the function of certain molecules driving the growth of cancer cells, stopping the cells from dividing and spreading. Immunotherapy taps the immune system’s illness-fighting tendencies, directing it to locate and kill cancer cells. The FDA has approved a number of targeted therapies and immunotherapies for the treatment of lung cancer.',
      open: true
    },
    {
      question: 'Is genomic testing an option for me?',
      answer: 'Advanced genomic testing has become the standard of care for some lung cancer patients, including those diagnosed with non-small cell lung cancer. These assessments examine cancer at a cellular level, identifying DNA mutations that are responsible for driving the growth of a particular tumor. The U.S. Food and Drug Administration has approved several drugs designed to target certain abnormalities that are revealed during genomic tests. Genomic testing may not be right for every patient, so it’s important for you to talk to your oncologist about whether you are a candidate.',
      open: false
    },
    {
      question: 'What treatment-related side effects should I expect?',
      answer: 'Lung cancer and its treatments may cause a number of side effects that impact your quality of life and your ability to continue with treatment. No two people have the same response to cancer treatment, and side effects may vary depending on what type of treatment you pursue. Common lung cancer-related side effects include pain, fatigue, anxiety, depression and weight loss. Evidence-based supportive therapies like pain management, nutrition therapy, mind-body medicine, oncology rehabilitation and spiritual support may help reduce the severity or frequency of side effects, allowing patients to continue treatment and get back to life.',
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

export default MLCFaq;