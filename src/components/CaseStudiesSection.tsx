import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const caseStudies = [
  {
    id: 1,
    title: 'How Oak Ridge Commercial Doubled Their Cold Outreach Success Rate',
    description: 'Learn how a mid-size commercial brokerage leveraged Admyral.ai to identify hard-to-reach property owners and significantly improve their conversion rates.',
    category: 'Retail',
    readTime: '4 min read',
    link: '#'
  },
  {
    id: 2,
    title: 'From 20 Hours to 5 Minutes: Mountain View Partners Revolutionized Their Research Process',
    description: 'Discover how a leading CRE firm automated their owner research workflow and freed up valuable time for their agents to focus on relationship building.',
    category: 'Office Space',
    readTime: '5 min read',
    link: '#'
  },
  {
    id: 3,
    title: 'Scaling Operations: How Beacon Commercial Added 200+ New Prospects Monthly',
    description: 'A startup brokerage shares how they used Admyral.ai to rapidly build their prospect database and compete with established firms in their market.',
    category: 'Industrial',
    readTime: '3 min read',
    link: '#'
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-sm text-gray-500 mb-2 block">SUCCESS STORIES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real results from real brokers
            </h2>
            <p className="text-gray-600 max-w-2xl">
              See how commercial real estate professionals like you are using Admyral.ai to uncover hidden opportunities and close more deals.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="outline" className="border-gray-300 flex items-center">
              View all case studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {study.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {study.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold leading-tight">
                  {study.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {study.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={study.link} className="text-sm font-medium text-gray-900 hover:text-gray-700 flex items-center">
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
