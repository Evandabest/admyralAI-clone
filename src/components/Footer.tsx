import Link from 'next/link';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Skip Tracer for</h3>
              <p className="text-2xl font-bold text-gray-900">Commercial Real Estate Brokers.</p>
            </div>
            <Link
              href="https://calendar.app.google/TZeVjSWUs4yQn9aRA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              Contact founders
            </Link>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://docs.google.com/document/d/1Pre_aRKzCnJinuT_VKQGm3FH_nnHbRthVOrO58iUtFU/edit?usp=sharing"
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.google.com/document/d/1GB_oTFC-xATx_nRUoGnhw60sbFWcyDOAXhkPq2H6-V0/edit?usp=sharing"
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:chris@admyral.ai"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Remove your profile from our service: chris@admyral.ai
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Get started</h3>
            <Link href="https://calendar.app.google/n9AafugTwE6r95uG7" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Start search
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>2025 Admyral Technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
