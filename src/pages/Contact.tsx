import { useState } from "react";
import { Layout } from "@/components/layout";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
const contactInfo = [{
  icon: Mail,
  title: "Email Us",
  details: "info@techflow.com",
  description: "We'll respond within 24 hours"
}, {
  icon: Phone,
  title: "Call Us",
  details: "+1 (234) 567-890",
  description: "Mon-Fri, 9am-6pm EST"
}, {
  icon: MapPin,
  title: "Visit Us",
  details: "123 Tech Street",
  description: "Silicon Valley, CA 94000"
}, {
  icon: Clock,
  title: "Business Hours",
  details: "Mon - Fri: 9AM - 6PM",
  description: "Weekend support available"
}];
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl">
            <p className="text-blue-300 font-medium text-sm tracking-wider uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white/70">
              Have a question or ready to start your next project? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8 text-sm">
                Our team is ready to answer all your questions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map(item => <div key={item.title} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-foreground text-sm">{item.details}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-64 sm:h-80 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <MapPin className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">Interactive map would be displayed here</p>
            <p className="text-xs text-muted-foreground mt-1">123 Tech Street, Silicon Valley, CA 94000</p>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;