import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Target, Eye, Lightbulb, Users, Award, Globe, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients, treating their challenges as our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do.",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "We focus on creating measurable difference for our clients.",
  },
];

const timeline = [
  { year: "2009", title: "Founded", description: "Started with 5 passionate technologists" },
  { year: "2013", title: "First Major Client", description: "Secured Fortune 500 partnership" },
  { year: "2017", title: "Global Expansion", description: "Opened offices in Europe and Asia" },
  { year: "2020", title: "Cloud Pioneer", description: "Multi-cloud solutions provider" },
  { year: "2024", title: "Industry Leader", description: "Top IT services company globally" },
];

const stats = [
  { icon: Users, value: "500+", label: "Projects Delivered" },
  { icon: Globe, value: "40+", label: "Countries Served" },
  { icon: Award, value: "150+", label: "Team Members" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </motion.div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-300 font-medium text-sm tracking-wider uppercase mb-4"
            >
              Who We Are
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              About Infonexa
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/70"
            >
              Empowering businesses through technology since 2009. We're passionate about transforming ideas into reality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center"
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="order-2 lg:order-1"
            >
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
                Our Story
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Building the Future of Technology
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2009, Infonexa began with a simple mission: to help businesses harness the power of technology. What started as a small team of five passionate technologists has grown into a global company serving clients across 40+ countries.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, we're proud to be at the forefront of digital transformation, helping organizations of all sizes navigate the complexities of modern technology landscapes.
              </p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="grid grid-cols-2 gap-4"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Mission</h3>
                    <p className="text-xs text-muted-foreground">Empower with innovative solutions</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Vision</h3>
                    <p className="text-xs text-muted-foreground">Most trusted tech partner globally</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-[400px] object-cover"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl -z-10 hidden sm:block blur-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
              Our Values
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground">
              Our core values shape every decision we make.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-xl p-5 lg:p-6 text-center border border-border hover:border-primary/30 transition-all group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-4"
                >
                  <value.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-base lg:text-lg font-semibold text-card-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-xs lg:text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
              Our Journey
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Milestones
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  whileHover={{ x: 5 }}
                  className="flex gap-4 sm:gap-6 mb-6 last:mb-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm shrink-0 z-10 cursor-pointer"
                  >
                    {item.year.slice(2)}
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-card rounded-lg p-4 border border-border hover:border-primary/30 transition-all cursor-pointer"
                  >
                    <p className="text-xs text-primary font-semibold mb-1">{item.year}</p>
                    <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Want to Learn More?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-lg text-white/80 mb-8 max-w-xl mx-auto"
          >
            Meet the talented team behind our success.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;