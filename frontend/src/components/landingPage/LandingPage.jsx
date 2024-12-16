import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Shield, Clock, Landmark, ArrowRight, Heart } from 'lucide-react';
import { Navbar } from './Navbar';
import PartnerLogos from './PartnerLogos';
import { Footer } from './Footer';
import { Contact } from './Contact';
import { Banner } from './banner/Banner';

export function LandingPage() {

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const target = e.target;
      if (!(target instanceof HTMLAnchorElement)) return;
      const id = target.getAttribute('href')?.replace('#', '');
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, "");
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section id='home' className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900">
        <Banner />
      </section>

      { /* Features Section */}
      <section id='features' className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose MScholar?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our platform offers comprehensive Islamic education with modern learning tools
              and qualified instructors to guide you on your journey of knowledge.
            </p>
          </div>

          {/* Feature Blocks */}
          <FeatureBlock
            title="Natural Language Processing (NLP)"
            description="The AI product utilizes advanced NLP algorithms to understand and interpret human language,
        enabling it to accurately process and analyze text-based inputs."
            imageSrc="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
            imageAlt="NLP feature"
            reverse={false}
          />

          <FeatureBlock
            title="Sentiment Analysis"
            description="The product has built-in sentiment analysis capabilities, allowing it to determine the
        sentiment (positive, negative, or neutral) expressed in text or customer feedback."
            imageSrc="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
            imageAlt="Sentiment analysis feature"
            reverse={true}
          />

          <FeatureBlock
            title="Natural Language Processing (NLP)"
            description="The AI product utilizes advanced NLP algorithms to understand and interpret human language,
        enabling it to accurately process and analyze text-based inputs."
            imageSrc="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
            imageAlt="NLP feature"
            reverse={false}
          />

          <FeatureBlock
            title="Sentiment Analysis"
            description="The product has built-in sentiment analysis capabilities, allowing it to determine the
        sentiment (positive, negative, or neutral) expressed in text or customer feedback."
            imageSrc="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
            imageAlt="Sentiment analysis feature"
            reverse={true}
          />

          {/* Add additional blocks as needed */}
          <PartnerLogos />
        </div>
      </section>

      <section className="bg-blue-600 dark:bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students worldwide in pursuing authentic Islamic knowledge.
            Start your learning journey today.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact'>
        <Contact />
      </section>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

const FeatureBlock = ({ title, description, imageSrc, imageAlt, reverse }) => {
  return (
    <div className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Content */}
      <div className={`max-w-xl px-6 lg:max-w-none lg:py-16 ${reverse ? 'lg:col-start-2' : ''}`}>
        <div>
          {/* Icon */}
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
            <FeatureIcon />
          </span>
          {/* Text */}
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              {description}
            </p>
            <div className="mt-6">
              <a
                href="/login"
                className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-pink-700"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className={`mt-12 lg:mt-0 ${reverse ? ' pr-6' : ' pl-6'}`}>
        <img
          loading="lazy"
          className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

const FeatureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);
