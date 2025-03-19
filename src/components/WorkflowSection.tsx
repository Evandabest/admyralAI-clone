import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const WorkflowSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start mb-16">
          <span className="text-sm text-gray-500 mb-2">How it works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Keep your existing workflow — <br className="hidden md:block" />
            accelerated.
          </h2>
          <div className="flex items-center mt-4">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-3">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
            <p className="text-gray-600">
              Three simple steps to gain an edge over fellow brokers. Uncover the off-market details others are not seeing — without the extra work.
            </p>
          </div>
        </div>

        {/* Step 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Enter the address</h3>
            <div className="flex items-center mt-4">
              <div className="w-3 h-3 rounded-full bg-gray-200 mr-3"></div>
              <Button className="bg-black text-white hover:bg-gray-800 mt-4">
                Start search
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center p-6">
            <Image
              src="https://ext.same-assets.com/3851645463/2064557693.svg+xml"
              alt="Enter the address"
              width={300}
              height={200}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[300px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center p-6">
            <Image
              src="https://ext.same-assets.com/789037414/4122666608.svg+xml"
              alt="Get owner contact details"
              width={300}
              height={200}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Get owner contact details</h3>
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-md">
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium">Property Owner Details</span>
                <span className="text-xs text-gray-500">AI Generated</span>
              </div>
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Owner Name</span>
                  <span className="text-sm font-medium">John Smith</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Email</span>
                  <span className="text-sm font-medium">john@example.com</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Phone</span>
                  <span className="text-sm font-medium">(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Reach out and win listings</h3>
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-md">
              <div className="space-y-3">
                <div className="flex items-center p-2 bg-gray-50 rounded">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">123 Main St</span>
                      <span className="text-xs text-gray-500">Today</span>
                    </div>
                    <p className="text-xs text-gray-500">Owner: John Smith</p>
                  </div>
                </div>
                <div className="flex items-center p-2 bg-gray-50 rounded">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">456 Oak Ave</span>
                      <span className="text-xs text-gray-500">Yesterday</span>
                    </div>
                    <p className="text-xs text-gray-500">Owner: Jane Doe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center p-6">
            <Image
              src="https://ext.same-assets.com/3123011776/2306583572.svg+xml"
              alt="Reach out and win listings"
              width={300}
              height={200}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
