import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const features = [
    { name: 'Find owner contact details', traditional: true, admyral: true },
    { name: 'Property information lookup', traditional: true, admyral: true },
    { name: 'Time required', traditional: '3-4 hours', admyral: '60 seconds' },
    { name: 'Accuracy rate', traditional: '60-70%', admyral: '96%' },
    { name: 'Multiple database search', traditional: false, admyral: true },
    { name: 'AI-powered verification', traditional: false, admyral: true },
    { name: 'Automatic contact discovery', traditional: false, admyral: true },
    { name: 'Integrated with CRM', traditional: false, admyral: true },
    { name: 'Cost effective', traditional: false, admyral: true },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Admyral.ai?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our AI-powered skip tracer compares to traditional manual research methods
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[640px] bg-white rounded-lg shadow-sm">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left font-medium text-gray-500 bg-gray-50 rounded-tl-lg">
                  Feature
                </th>
                <th className="px-6 py-4 text-center font-medium text-gray-600 bg-gray-50">
                  Traditional Methods
                </th>
                <th className="px-6 py-4 text-center font-medium text-black bg-orange-50 rounded-tr-lg">
                  Admyral.ai
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                    {feature.name}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {typeof feature.traditional === 'boolean' ? (
                      feature.traditional ? (
                        <Check className="inline-block text-green-500 h-5 w-5" />
                      ) : (
                        <X className="inline-block text-red-500 h-5 w-5" />
                      )
                    ) : (
                      <span className="text-sm text-gray-600">{feature.traditional}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center bg-orange-50">
                    {typeof feature.admyral === 'boolean' ? (
                      feature.admyral ? (
                        <Check className="inline-block text-green-500 h-5 w-5" />
                      ) : (
                        <X className="inline-block text-red-500 h-5 w-5" />
                      )
                    ) : (
                      <span className="text-sm font-medium">{feature.admyral}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
