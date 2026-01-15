import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    company: "TechVision India",
    content: "Working with Infonexa has been transformative for our business. Their cloud solutions reduced our infrastructure costs by 40% while improving performance.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "DataFlow Systems",
    content: "The team's expertise in digital transformation helped us modernize our entire tech stack. The results exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "SecureNet Solutions",
    content: "Their cybersecurity solutions gave us peace of mind. The comprehensive approach and 24/7 monitoring is exactly what we needed.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    company: "InnovateCorp",
    content: "Infonexa's AI and data analytics platform revolutionized how we make business decisions. The insights we've gained are invaluable.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "StartupHub",
    content: "From consultation to implementation, the entire process was seamless. They truly understand what modern businesses need.",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    company: "GlobalTech Industries",
    content: "The level of professionalism and technical expertise is outstanding. Our systems have never been more reliable.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders worldwide. See how we've helped businesses transform and thrive.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-lg font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full ring-2 ring-white bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold"
                >
                  {t.name.charAt(0)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">100+ Happy Clients</p>
              <p className="text-sm text-gray-600">Join our success stories</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}