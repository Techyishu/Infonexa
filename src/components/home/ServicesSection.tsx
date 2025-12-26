import {
  Cloud, Shield, BarChart3, Cpu, Code, Workflow, Database, Zap,
  Server, Activity, Users, Bot, Snowflake, Settings, Box,
  UserCheck, PenTool, Gauge, Brain
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    icon: Brain,
    title: "AI & Data Analytics",
    description: "Unlock actionable insights and drive decision-making with advanced AI and data analytics.",
    stats: "Data-Driven Results",
  },
  {
    icon: Zap,
    title: "Digital Acceleration",
    description: "Fast-track your digital journey with agile methodologies and cutting-edge technologies.",
    stats: "2x Faster to Market",
  },
  {
    icon: Code,
    title: "Application Modernization",
    description: "Revitalize legacy applications for the cloud era to improve performance and scalability.",
    stats: "Modern Architecture",
  },
  {
    icon: Database,
    title: "Database Modernization",
    description: "Migrate and optimize your data infrastructure for modern, high-performance applications.",
    stats: "High Availability",
  },
  {
    icon: Server,
    title: "Infrastructure Modernization",
    description: "Build a resilient, scalable, and cost-effective IT infrastructure for the future.",
    stats: "Optimized Costs",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Safeguard your business with comprehensive security strategies and threat protection.",
    stats: "Zero Trust Security",
  },
  {
    icon: Activity,
    title: "Site Reliability Services",
    description: "Ensure maximum uptime and performance with our expert SRE practices.",
    stats: "99.99% Uptime",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Streamline operations and reduce manual effort with intelligent process automation.",
    stats: "Efficiency Boost",
  },
  {
    icon: Users,
    title: "Staffing & IT Consulting",
    description: "Access top-tier talent and strategic advice to augment your technical capabilities.",
    stats: "Expert Teams",
  },
];

const solutions = [
  {
    icon: Bot,
    title: "Robotic Process Automation",
    description: "Automate repetitive tasks to boost efficiency and reduce operational costs.",
    stats: "Process Automation",
  },
  {
    icon: Brain,
    title: "Data & AI",
    description: "Harness the power of data and artificial intelligence to transform your business models.",
    stats: "Intelligent Insights",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Accelerate delivery and innovation with integrated cloud and DevOps solutions.",
    stats: "Scalable Operations",
  },
  {
    icon: Snowflake,
    title: "Snowflake & Informatica",
    description: "Leverage leading data platforms for superior data warehousing and integration.",
    stats: "Unified Data",
  },
  {
    icon: Settings,
    title: "ServiceNow",
    description: "Optimize IT service management and enterprise workflows with ServiceNow.",
    stats: "Workflow Excellence",
  },
  {
    icon: Box,
    title: "ERP",
    description: "Streamline enterprise resource planning to integrate and manage core business processes.",
    stats: "Integrated Systems",
  },
  {
    icon: UserCheck,
    title: "CRM",
    description: "Enhance customer relationships and drive sales with robust CRM implementations.",
    stats: "Customer Success",
  },
  {
    icon: PenTool,
    title: "Adobe Experience Manager",
    description: "Deliver personalized and consistent experiences across all digital touchpoints.",
    stats: "Digital Experience",
  },
  {
    icon: Gauge,
    title: "Optimizely",
    description: "Experiment and optimize customer experiences to maximize conversion and engagement.",
    stats: "Optimization",
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

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">

        {/* Services Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Core <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-lg text-muted-foreground"
            >
              Comprehensive technology services designed to modernize and secure your business operations.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  stats={service.stats}
                  delay={0}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Solutions Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block"
            >
              Our Platforms
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Enterprise <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Solutions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-lg text-muted-foreground"
            >
              Leveraging world-class platforms and tools to drive specific business outcomes.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {solutions.map((solution, index) => (
              <motion.div key={solution.title} variants={itemVariants}>
                <ServiceCard
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  stats={solution.stats}
                  delay={0}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};