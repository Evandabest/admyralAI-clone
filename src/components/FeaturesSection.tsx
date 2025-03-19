import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start mb-16">
          <span className="text-sm text-gray-500 mb-2">AI Skip tracer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skip tracing your future <br className="hidden md:block" />
            listings.
          </h2>
          <div className="flex items-center mt-4">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-3">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
            <p className="text-gray-600">
              Supercharge your outcomes: get more deals with less time spent on tedious owner research.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-700"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Owner Research</h3>
            <p className="text-sm text-gray-600">
              Find verified property owner name, email, phone number through intelligent skip tracing done by our AI.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-700"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Property information</h3>
            <p className="text-sm text-gray-600">
              Get comprehensive property information on any address to uncover off-market opportunities.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-700"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">List creation</h3>
            <p className="text-sm text-gray-600">
              Generate actionable prospecting lists of off-market commercial properties, streamlining your deal sourcing process.
            </p>
          </div>
        </div>

        {/* Contact Database Visualization */}
        <div className="mt-20 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reach out and win listings</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-4 md:col-span-1">
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-xs text-gray-500 mb-1">Property</div>
                  <div className="text-sm font-medium">Address</div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-1">
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-xs text-gray-500 mb-1">Owner</div>
                  <div className="text-sm font-medium">Name</div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-1">
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-xs text-gray-500 mb-1">Contact</div>
                  <div className="text-sm font-medium">Email/Phone</div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-1">
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-xs text-gray-500 mb-1">Status</div>
                  <div className="text-sm font-medium">Active</div>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="grid grid-cols-4 gap-4">
                  <div className="col-span-4 md:col-span-1">
                    <div className="p-3 border-b border-gray-100">
                      <div className="text-sm">{`${123 * item} Main St, Suite ${item * 100}`}</div>
                    </div>
                  </div>
                  <div className="col-span-4 md:col-span-1">
                    <div className="p-3 border-b border-gray-100">
                      <div className="text-sm">{`Owner ${item}`}</div>
                    </div>
                  </div>
                  <div className="col-span-4 md:col-span-1">
                    <div className="p-3 border-b border-gray-100">
                      <div className="text-sm">{`owner${item}@example.com`}</div>
                    </div>
                  </div>
                  <div className="col-span-4 md:col-span-1">
                    <div className="p-3 border-b border-gray-100">
                      <div className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Available</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
