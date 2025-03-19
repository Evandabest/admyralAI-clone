import Image from 'next/image';

const partners = [
  {
    name: 'Commercial Platform 1',
    logo: 'https://ext.same-assets.com/3122990553/443197193.svg+xml',
  },
  {
    name: 'Commercial Platform 2',
    logo: 'https://ext.same-assets.com/2590139166/1112053129.svg+xml',
  },
  {
    name: 'Commercial Platform 3',
    logo: 'https://ext.same-assets.com/3049856595/2805321406.svg+xml',
  },
  {
    name: 'Commercial Platform 4',
    logo: 'https://ext.same-assets.com/3797078464/4007151959.svg+xml',
  },
  {
    name: 'Commercial Platform 5',
    logo: 'https://ext.same-assets.com/3005476030/852474122.svg+xml',
  },
];

const PartnersSection = () => {
  return (
    <section className="w-full py-12 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-lg font-medium text-gray-500">
            Seamlessly integrates with leading commercial real estate platforms
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-20"
            >
              <div className="relative w-full h-10">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
