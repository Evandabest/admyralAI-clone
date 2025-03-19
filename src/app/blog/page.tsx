import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'AI Skip Tracing: A Game Changer for Commercial Real Estate Brokers',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way commercial real estate professionals find and connect with property owners.',
    date: 'March 15, 2025',
    category: 'Technology',
    author: 'Chris Grittner',
    readTime: '5 min read',
    image: 'https://ext.same-assets.com/345293410/1448262271.png',
    slug: '#'
  },
  {
    id: 2,
    title: '5 Ways to Improve Your Cold Outreach Success Rate in CRE',
    excerpt: 'Learn proven strategies to enhance your cold outreach efforts and connect with more commercial property owners effectively.',
    date: 'March 8, 2025',
    category: 'Strategy',
    author: 'Sarah Johnson',
    readTime: '7 min read',
    image: 'https://ext.same-assets.com/1803023155/305319795.png',
    slug: '#'
  },
  {
    id: 3,
    title: 'The Future of Commercial Real Estate Prospecting',
    excerpt: 'Explore how technology trends like AI, data analytics, and automation are shaping the future of commercial real estate prospecting.',
    date: 'February 28, 2025',
    category: 'Industry Trends',
    author: 'Michael Rodriguez',
    readTime: '6 min read',
    image: 'https://ext.same-assets.com/4092284210/556993549.png',
    slug: '#'
  },
  {
    id: 4,
    title: 'How to Build a Scalable Lead Generation System for Your Brokerage',
    excerpt: 'A step-by-step guide to creating an efficient and scalable lead generation system for commercial real estate brokerages of any size.',
    date: 'February 20, 2025',
    category: 'Business Growth',
    author: 'Chris Grittner',
    readTime: '8 min read',
    image: 'https://ext.same-assets.com/343528623/571821319.png',
    slug: '#'
  },
  {
    id: 5,
    title: 'Ethical Property Owner Research: Best Practices for CRE Professionals',
    excerpt: 'Understanding the ethical considerations and best practices for property owner research in the commercial real estate industry.',
    date: 'February 12, 2025',
    category: 'Ethics',
    author: 'Jennifer Paterson',
    readTime: '4 min read',
    image: 'https://ext.same-assets.com/3817115090/2747543970.png',
    slug: '#'
  },
];

export default function BlogPage() {
  return (
    <div className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Admyral Blog
          </h1>
          <p className="text-lg text-gray-600">
            Insights, strategies, and resources for commercial real estate professionals to enhance their prospecting and deal-making capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>
                  <Link href={post.slug} className="text-sm font-medium text-gray-900 hover:text-gray-700 flex items-center">
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-gray-300 px-8">
            Load more articles
          </Button>
        </div>

        <div className="mt-24 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest insights and tips delivered straight to your inbox. No spam, just valuable content for CRE professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <Button className="bg-black text-white hover:bg-gray-800 px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
