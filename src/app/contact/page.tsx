import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about Admyral.ai? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-gray-700" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us an email and we'll respond within 24 hours
              </p>
              <a href="mailto:chris@admyral.ai" className="text-black font-medium hover:underline">
                chris@admyral.ai
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-gray-700" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule a Call</h3>
              <p className="text-gray-600 mb-4">
                Book a 30-minute call with our product specialists
              </p>
              <Link
                href="https://calendar.app.google/TZeVjSWUs4yQn9aRA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-medium hover:underline"
              >
                Schedule Now
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-gray-700" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Headquarters</h3>
              <p className="text-gray-600 mb-4">
                San Francisco, California
              </p>
              <span className="text-black font-medium">
                YC W25 Batch
              </span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Tell us about your inquiry..."
                  required
                ></textarea>
              </div>
              <Button type="submit" className="bg-black text-white hover:bg-gray-800 px-8 py-2">
                Send Message
              </Button>
            </form>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need immediate assistance?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a call with our product specialists to get your questions answered right away.
            </p>
            <Link href="https://calendar.app.google/n9AafugTwE6r95uG7" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black text-white hover:bg-gray-800 px-8">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
