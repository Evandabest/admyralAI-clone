import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const testimonials = [
  {
    id: 1,
    quote: "Admyral.ai has transformed our prospecting approach. The speed and accuracy of obtaining owner contact details have significantly boosted our lead generation efforts.",
    author: "Carl Beardsworth",
    role: "Commercial Real Estate Broker",
    company: "Reality Executives",
    avatar: "CB"
  },
  {
    id: 2,
    quote: "Admyral's finder tool saves several steps in my research process. It helps streamline finding ownership information that typically requires searching through multiple databases. It's a useful tool for any broker looking to make their work more efficient.",
    author: "Mason Turner",
    role: "Commercial Real Estate Broker",
    company: "Turner Commercial Properties",
    avatar: "MT"
  },
  {
    id: 3,
    quote: "Admyral.ai's AI-driven approach to skip tracing has given us a competitive edge, allowing us to connect with property owners more efficiently than ever before.",
    author: "Commercial Real Estate Broker",
    location: "San Diego, CA",
    avatar: "SD"
  },
  {
    id: 4,
    quote: "The platform is user-friendly, and the quick skip tracing is now a key part of our real estate work.",
    author: "Commercial Real Estate Broker",
    location: "Minneapolis, MN",
    avatar: "MN"
  },
  {
    id: 5,
    quote: "I spend 2 hours less researching per day and easily doubled my outreach. This is incredible!",
    author: "Commercial Real Estate Broker",
    location: "Austin, TX",
    avatar: "TX"
  },
  {
    id: 6,
    quote: "Admyral's tool has been a game-changer for my business. It's helped me quickly find and connect with property owners, allowing me to scale my prospecting efforts in a way I couldn't before. Chris and the team have built an impressive product.",
    author: "Mike Belzer",
    role: "Retail Commercial Real Estate Broker",
    company: "Bloom Commercial Real Estate",
    avatar: "MB"
  },
  {
    id: 7,
    quote: "Admyral.ai makes deal sourcing a breeze. Creating prospecting lists is quick and easy, saving us a ton of time.",
    author: "Commercial Real Estate Broker",
    location: "Miami, FL",
    avatar: "FL"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-yellow-500 mr-1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-4 text-sm">{testimonial.quote}</p>
      <div className="flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarFallback className="bg-gray-200 text-gray-600">{testimonial.avatar}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-gray-900">{testimonial.author}</p>
          {testimonial.role && (
            <p className="text-xs text-gray-500">{testimonial.role} {testimonial.company ? `@ ${testimonial.company}` : ''}</p>
          )}
          {testimonial.location && (
            <p className="text-xs text-gray-500">from {testimonial.location}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-2">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mx-1">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mx-1">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Check out what</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">our customers have to say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
