'use client';

import { useState } from 'react';
import styles from '@/styles/Home.module.css';
import {
  FaEnvelope, FaPhone, FaMapMarker, FaLinkedin, FaGithub, FaTwitter
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.sectionHeading}>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I'd love to hear from you! Send me a message and I'll get back to you soon.
        </motion.p>
      </div>

      <div className={styles.contactContainer}>
        {/* Contact Info */}
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Contact Information</h3>
          <p><FaEnvelope className={styles.icon} /><strong>Email:</strong>virendrasingh6011@gmail.com</p>
          <p><FaPhone className={styles.icon} /><strong>Phone:</strong>+91 9651460817</p>
          <p><FaMapMarker className={styles.icon} /><strong>Location:</strong>Lucknow, UP</p>

          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/virendra-vikram-singh-532a7a268" className={styles.socialLink}>
              <FaLinkedin className={styles.icon} /> LinkedIn
            </a>
            <a href="https://github.com/virendra0817" className={styles.socialLink}>
              <FaGithub className={styles.icon} /> GitHub
            </a>
            <a href="https://x.com/VirendraSi3280?t=KrsKtzUPi2LqM1t5Ej8kKQ&s=09" className={styles.socialLink}>
              <FaTwitter className={styles.icon} /> Twitter
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className={styles.contactForm}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {submitted && (
            <motion.p
              className={styles.successMessage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Thank you! Your message has been sent successfully.
            </motion.p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}
