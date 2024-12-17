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
          <hr className='mt-12' />
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

      {/* FAQ Section */}
      <section id='faq' className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Here are some of the most common questions we get asked. If you have any other questions, feel free to contact us.
            </p>
          </div>
          <div className="space-y-8">
            <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200 dark:divide-neutral-700">
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-gray-900 dark:text-white">
                    <span>What is MScholar?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-neutral-400">MScholar is an online platform offering comprehensive Islamic education with modern learning tools and qualified instructors.</p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-gray-900 dark:text-white">
                    <span>How do I sign up?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-neutral-400">You can sign up by clicking the 'Get Started Now' button and following the registration process.</p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-gray-900 dark:text-white">
                    <span>Is there a free trial available?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-neutral-400">Yes, we offer a 7-day free trial for new users to explore our platform and courses.</p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-gray-900 dark:text-white">
                    <span>What courses are available?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-neutral-400">We offer a wide range of courses covering various aspects of Islamic knowledge, including Quran, Hadith, Fiqh, and more.</p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-gray-900 dark:text-white">
                    <span>How can I contact support?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-neutral-400">You can contact our support team through the 'Contact' section on our website or by emailing support@mscholar.com.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          {/* Text */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {description}
            </p>
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