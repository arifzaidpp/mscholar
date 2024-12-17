import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

export function Contact() {
  return (
    <div className="py-16 bg-white dark:bg-gray-900 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-16 xl:px-24">
        <div className="space-y-6 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Connect with Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have any questions or concerns? Feel free to reach out to us.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7 justify-center items-center">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}