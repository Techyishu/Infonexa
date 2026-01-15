import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white/50"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white/50"
                      required
                    />
                    <Textarea
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white/50 min-h-[120px]"
                      required
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-white text-purple-600 hover:bg-white/90 shadow-lg"
                    >
                      Start Project
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Alternative CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Prefer to Talk?</h3>
                <p className="text-white/90 mb-6">
                  Schedule a free consultation call with our team to discuss your needs.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                  asChild
                >
                  <Link to="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Explore Our Work</h3>
                <p className="text-white/90 mb-6">
                  See how we've helped other businesses transform with our solutions.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                  asChild
                >
                  <Link to="/services">
                    View Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}