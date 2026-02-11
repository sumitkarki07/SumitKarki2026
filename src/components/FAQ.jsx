import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    question: "What programming languages does Sumit Karki specialize in?",
    answer: "Sumit Karki specializes in multiple programming languages including Python, Java, JavaScript, TypeScript, and C. He has extensive experience building full-stack applications using React, Node.js for frontend, and Spring Boot, Flask for backend development. His work spans web development, mobile app development, and cloud computing."
  },
  {
    id: 2,
    question: "What technologies and frameworks is Sumit proficient in?",
    answer: "Sumit is proficient in modern web technologies including React, Next.js, React Native, Tailwind CSS, and Bootstrap for frontend. For backend, he works with Spring Boot, Flask, Express.js, and Node.js. He also has experience with cloud platforms (AWS, Vercel), databases (MySQL, PostgreSQL, MongoDB), and DevOps tools (Docker, Git, Apache Kafka)."
  },
  {
    id: 3,
    question: "What kind of projects has Sumit Karki worked on?",
    answer: "Sumit has worked on diverse projects including a NASA Space Apps Challenge-winning weather event planner using real-time APIs, an event-driven transaction processing system with Apache Kafka, mobile fitness tracking applications with React Native, and full-stack e-commerce platforms. His projects demonstrate expertise in API integration, microservices architecture, real-time data processing, and responsive UI/UX design."
  },
  {
    id: 4,
    question: "Is Sumit Karki available for freelance or full-time opportunities?",
    answer: "Yes, Sumit Karki is actively seeking software engineering internships and full-time opportunities for Summer 2025 and beyond. He is open to roles in full-stack development, backend engineering, mobile app development, and cloud computing. You can reach him via email at sumitkarki7777@gmail.com or connect on LinkedIn."
  },
  {
    id: 5,
    question: "What are Sumit's notable achievements and awards?",
    answer: "Sumit's achievements include winning the NASA Space Apps Challenge 2024 (Galactic Problem Solver award), receiving the prestigious UWGB Presidential Scholarship (2024-2028), being named to the Dean's List at University of Wisconsin-Green Bay, and receiving the National Scholarship from the Nepal Government. He also serves as Vice-President of Google Developer Groups on Campus at UW-Green Bay."
  },
  {
    id: 6,
    question: "Where is Sumit Karki studying and what is his educational background?",
    answer: "Sumit Karki is currently pursuing a Bachelor of Science in Computer Science and Software Engineering at the University of Wisconsin-Green Bay (Expected graduation: May 2028). He maintains a strong GPA of 3.8/4.0 and is actively involved in tech organizations including Beta Alpha Psi and Google Developer Groups. His coursework includes data structures, algorithms, software engineering, and cloud computing."
  },
  {
    id: 7,
    question: "How can I contact Sumit Karki for collaboration or job opportunities?",
    answer: "You can contact Sumit through multiple channels: Email at sumitkarki7777@gmail.com, phone at +1 (920) 617-2172, LinkedIn (linkedin.com/in/sumit-karki-sk), GitHub (github.com/sumitkarki07), or via the contact form on his portfolio website at www.sumit-karki.com.np. He responds promptly to professional inquiries."
  },
  {
    id: 8,
    question: "What makes Sumit Karki stand out as a software engineer?",
    answer: "Sumit stands out through his combination of technical excellence, proven problem-solving abilities (NASA hackathon winner), leadership experience (GDG Vice-President), and diverse project portfolio spanning web, mobile, and cloud technologies. His rapid learning ability, dedication to modern development practices, and strong academic performance (Dean's List, Presidential Scholar) make him a valuable asset to any development team."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Common questions about Sumit Karki's skills, experience, and availability for software engineering opportunities
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-slate-800/80 backdrop-blur border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-700/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-white pr-4" itemProp="name">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <FaChevronUp className="text-cyan-400" />
                  ) : (
                    <FaChevronDown className="text-cyan-400" />
                  )}
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="px-6 pb-4 border-t border-cyan-500/10">
                  <p className="text-gray-400 leading-relaxed pt-4" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
