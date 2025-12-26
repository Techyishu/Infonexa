import { AnimatedSection } from "@/components/ui/animated-section";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "CTO",
    company: "TechVision India",
    content: "Working with Infonexa has been transformative for our business. Their cloud solutions reduced our infrastructure costs by 40% while improving performance significantly.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    position: "CEO",
    company: "DataFlow Systems",
    content: "The team's expertise in digital transformation helped us modernize our entire tech stack. The results exceeded our expectations in every way.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    position: "Director of IT",
    company: "SecureNet Solutions",
    content: "Their cybersecurity solutions gave us peace of mind. The comprehensive approach and 24/7 monitoring is exactly what we needed.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    position: "VP of Operations",
    company: "InnovateCorp",
    content: "Infonexa's AI and data analytics platform revolutionized how we make business decisions. The insights we've gained are invaluable.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    position: "Founder",
    company: "StartupHub",
    content: "From consultation to implementation, the entire process was seamless. They truly understand what modern businesses need to succeed.",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    position: "IT Manager",
    company: "GlobalTech Industries",
    content: "The level of professionalism and technical expertise is outstanding. Our systems have never been more reliable and efficient.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl relative z-10">
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders worldwide. See how we've helped
            businesses transform and thrive.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={index * 0.1}
              className="h-full"
            >
              <div
                className={`h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group ${hoveredIndex === index ? "scale-105" : ""
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                  {testimonial.content}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust Badge */}
        <AnimatedSection direction="up" delay={0.6} className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full ring-2 ring-white bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold"
                >
                  {testimonial.name.charAt(0)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">100+ Happy Clients</p>
              <p className="text-sm text-gray-600">Join our success stories</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};