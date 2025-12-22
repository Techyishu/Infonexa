import { AnimatedSection } from "@/components/ui/animated-section";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechVision Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    content: "Working with Infonexa has been transformative for our business. Their cloud solutions reduced our infrastructure costs by 40% while improving performance significantly.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "DataFlow Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    content: "The team's expertise in digital transformation helped us modernize our entire tech stack. The results exceeded our expectations in every way.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    position: "Director of IT",
    company: "SecureNet Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    content: "Their cybersecurity solutions gave us peace of mind. The comprehensive approach and 24/7 monitoring is exactly what we needed.",
    rating: 5,
  },
  {
    name: "David Park",
    position: "VP of Operations",
    company: "InnovateCorp",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    content: "Infonexa's AI and data analytics platform revolutionized how we make business decisions. The insights we've gained are invaluable.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    position: "Founder",
    company: "StartupHub",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    content: "From consultation to implementation, the entire process was seamless. They truly understand what modern businesses need to succeed.",
    rating: 5,
  },
  {
    name: "James Williams",
    position: "IT Manager",
    company: "GlobalTech Industries",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}
                    </p>
                    <p className="text-blue-600 text-sm font-semibold">
                      {testimonial.company}
                    </p>
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
                <img
                  key={index}
                  src={testimonial.image}
                  alt=""
                  className="w-10 h-10 rounded-full ring-2 ring-white object-cover"
                />
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