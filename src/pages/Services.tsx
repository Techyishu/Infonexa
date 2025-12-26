import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import {
  Cloud, Shield, BarChart3, Cpu, Code, Headphones, CheckCircle2, ArrowRight,
  Zap, Database, Server, Activity, Workflow, Users, Bot, Snowflake, Settings,
  Box, UserCheck, PenTool, Gauge, Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Brain,
    title: "AI & Data Analytics",
    description: "Unlock actionable insights and drive decision-making with advanced AI and data analytics.",
    features: ["Predictive Modeling", "Big Data Processing", "Computer Vision", "NLP"],
  },
  {
    icon: Zap,
    title: "Digital Acceleration",
    description: "Fast-track your digital journey with agile methodologies and cutting-edge technologies.",
    features: ["Agile Transformation", "Cloud Native Dev", "Microservices", "API First Design"],
  },
  {
    icon: Code,
    title: "Application Modernization",
    description: "Revitalize legacy applications for the cloud era to improve performance and scalability.",
    features: ["Cloud Migration", "Legacy Refactoring", "Containerization", "Tech Stack Upgrade"],
  },
  {
    icon: Database,
    title: "Database Modernization",
    description: "Migrate and optimize your data infrastructure for modern, high-performance applications.",
    features: ["Cloud Databases", "Data Assessment", "Performance Tuning", "NoSQL Adoption"],
  },
  {
    icon: Server,
    title: "Infrastructure Modernization",
    description: "Build a resilient, scalable, and cost-effective IT infrastructure for the future.",
    features: ["Hybrid Cloud", "Infrastructure as Code", "Network Optimization", "Disaster Recovery"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Safeguard your business with comprehensive security strategies and threat protection.",
    features: ["Threat Detection", "Identity Management", "Compliance", "Security Audits"],
  },
  {
    icon: Activity,
    title: "Site Reliability Services",
    description: "Ensure maximum uptime and performance with our expert SRE practices.",
    features: ["Incident Management", "Performance Monitoring", "Capacity Planning", "Automated Recovery"],
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Streamline operations and reduce manual effort with intelligent process automation.",
    features: ["Workflow Automation", "CI/CD Pipelines", "RPA Integration", "Scripting"],
  },
  {
    icon: Users,
    title: "Staffing & IT Consulting",
    description: "Access top-tier talent and strategic advice to augment your technical capabilities.",
    features: ["Resource Augmentation", "Strategic Planning", "Project Management", "Technical Training"],
  },
];

const solutions = [
  {
    icon: Bot,
    title: "Robotic Process Automation",
    description: "Automate repetitive tasks to boost efficiency and reduce operational costs.",
    features: ["Bot Development", "Process Mining", "Unattended Bots", "Orchestration"],
  },
  {
    icon: Brain,
    title: "Data & AI",
    description: "Harness the power of data and artificial intelligence to transform your business models.",
    features: ["Data Lakes", "ML Ops", "Business Intelligence", "Data Governance"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Accelerate delivery and innovation with integrated cloud and DevOps solutions.",
    features: ["Cloud Architecture", "DevSecOps", "Continuous Delivery", "Kubernetes Management"],
  },
  {
    icon: Snowflake,
    title: "Snowflake & Informatica",
    description: "Leverage leading data platforms for superior data warehousing and integration.",
    features: ["Data Warehousing", "ETL Pipelines", "Data Ingestion", "Cloud Data Sharing"],
  },
  {
    icon: Settings,
    title: "ServiceNow",
    description: "Optimize IT service management and enterprise workflows with ServiceNow.",
    features: ["ITSM Implementation", "Asset Management", "HR Service Delivery", "CSM"],
  },
  {
    icon: Box,
    title: "ERP",
    description: "Streamline enterprise resource planning to integrate and manage core business processes.",
    features: ["System Integration", "Module Configuration", "Data Migration", "Reporting"],
  },
  {
    icon: UserCheck,
    title: "CRM",
    description: "Enhance customer relationships and drive sales with robust CRM implementations.",
    features: ["Pipeline Management", "Customer 360", "Marketing Automation", "Service Cloud"],
  },
  {
    icon: PenTool,
    title: "Adobe Experience Manager",
    description: "Deliver personalized and consistent experiences across all digital touchpoints.",
    features: ["Content Management", "Digital Asset Management", "Headless CMS", "Forms & Documents"],
  },
  {
    icon: Gauge,
    title: "Optimizely",
    description: "Experiment and optimize customer experiences to maximize conversion and engagement.",
    features: ["A/B Testing", "Personalization", "Feature Flags", "Customer Data Platform"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Services = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
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
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl relative z-10">
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
              What We Offer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Services & Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/70"
            >
              Comprehensive technology capabilities designed to transform your business and drive sustainable growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">

          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Zap className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-card rounded-xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-5"
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Box className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-bold">Enterprise Solutions</h2>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {solutions.map((solution) => (
                <motion.div
                  key={solution.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-card rounded-xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-5"
                  >
                    <solution.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The Infonexa Advantage
            </h2>
            <p className="text-muted-foreground">
              We combine technical expertise with deep understanding of your business needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "150+", title: "Experts", description: "Certified professionals" },
              { number: "500+", title: "Projects", description: "Successfully delivered" },
              { number: "24/7", title: "Support", description: "Round-the-clock" },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-card rounded-xl border border-border cursor-pointer"
              >
                <motion.p
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  viewport={{ once: false }}
                  className="text-3xl lg:text-4xl font-bold text-primary mb-2"
                >
                  {item.number}
                </motion.p>
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-lg text-white/80 mb-8 max-w-xl mx-auto"
          >
            Let's discuss how we can tailor our services to meet your specific requirements.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;