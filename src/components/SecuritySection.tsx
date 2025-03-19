import { Shield, Lock, FileCheck } from 'lucide-react';

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Data Protection',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols. Your sensitive information is always protected.'
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-500" />,
      title: 'Secure Authentication',
      description: 'Multi-factor authentication and robust access controls ensure only authorized users can access your account and information.'
    },
    {
      icon: <FileCheck className="h-8 w-8 text-blue-500" />,
      title: 'Compliance Standards',
      description: 'We adhere to strict data privacy regulations and industry compliance standards to ensure your data is handled responsibly.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Security and Compliance
          </h2>
          <p className="text-lg text-gray-600">
            We take the security of your data and the privacy of property owners seriously.
            Our platform is built with security and compliance at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center text-gray-600 font-medium">
              <Lock className="h-5 w-5 mr-2 text-gray-500" />
              SOC 2 Compliant
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center text-gray-600 font-medium">
              <Shield className="h-5 w-5 mr-2 text-gray-500" />
              GDPR Ready
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center text-gray-600 font-medium">
              <FileCheck className="h-5 w-5 mr-2 text-gray-500" />
              256-bit Encryption
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
