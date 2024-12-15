import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Shield, Clock, Award, ArrowRight, Play } from 'lucide-react';
import { Navbar } from './Navbar';
import PartnerLogos from './about/PartnerLogos';

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


  const features = [
    {
      icon: BookOpen,
      title: 'Diverse Courses',
      description: 'Access a wide range of Islamic courses tailored for different age groups and learning levels.'
    },
    {
      icon: Users,
      title: 'Gender-Specific Classes',
      description: 'Separate classes for brothers and sisters, ensuring comfort and adherence to Islamic principles.'
    },
    {
      icon: Shield,
      title: 'Verified Teachers',
      description: 'Learn from qualified and verified Islamic scholars and teachers.'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Choose from various time slots that suit your schedule.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Active Students' },
    { number: '100+', label: 'Islamic Courses' },
    { number: '50+', label: 'Expert Teachers' },
    { number: '95%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* /* Hero Section */}
      <section id='home' className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-white/[0.02]" />
        <div className="max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 dark:bg-blue-900/50">
                <Award size={16} className="text-blue-200" />
                <span className="text-sm text-blue-200">Premier Islamic Education Platform</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Discover the Path of
                <span className="block text-blue-200">Sacred Knowledge</span>
              </h1>

              <p className="text-lg text-blue-100">
                Join our comprehensive Islamic education platform offering authentic courses
                for all age groups. Learn from qualified scholars and progress at your own pace.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Browse Courses
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-blue-300 text-white rounded-lg font-semibold hover:bg-blue-800/50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              {/* Gradient overlay container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[25rem] h-[25rem] bg-blue-200/80  rounded-full" />
              </div>

              {/* Image container */}
              <div className="relative">
                <img
                  src="https://s3-alpha-sig.figma.com/img/bb20/2203/b83ab34801c7608725e622acbb0840e4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mC8R6Gf~ne69nFAFtxaZdQQEUogzmh14WtQIBf9xAyUhUPqdy~6lqwdKQs7TW8gZGctlIjUxt2ZutDB2SOBKw-oT~U4nYfSEsH0MDV8NzI057hAvdpvqrn8hqNLf2j3x0r6pxEuC3g-2x-7~eoANjEp9B~elk5dA4sOFBGNxsgLinD6E1NE3CT500gMDmmVAEgq5pPVzfAEa6FSm3Uh~jl1bzpdPYUEZ2vgOHtAxd-6n8I27VTDnZQVstDXeNJHNW6iN5tDTENcb98UI16y4P5-E5LyNvlk2tnjjf-854tgg9iYjIHhNDnyY4HPBKFehaFs9qr3XDIB4~61wnsKIyw__"
                  alt="Islamic Education"
                  className="relative z-10 w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /* Stats Section */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='about' className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About IslamicEdu
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Discover our mission to provide authentic Islamic education worldwide through
              modern technology and traditional teaching methods.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 aspect-video max-w-4xl mx-auto">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/s5z0of91dXA?si=-kthxzVgX-DfgvvA"
              title="About IslamicEdu"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

          <div className="mt-10">
            <hr />
            <PartnerLogos />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose IslamicEdu?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our platform offers comprehensive Islamic education with modern learning tools
              and qualified instructors to guide you on your journey of knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};