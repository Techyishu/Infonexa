import {
  Cloud, Shield, Code, Workflow, Database, Zap,
  Server, Activity, Users, Bot, Snowflake, Settings, Box,
  UserCheck, PenTool, Gauge, Brain, ArrowRight, type LucideIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
}

const services: Service[] = [
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

const solutions: Service[] = [
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

function ServiceCard({ icon: Icon, title, description, stats }: Service) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-5 shadow-md">
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{description}</p>

      {/* Stats Badge */}
      <div className="mb-4">
        <span className="inline-block text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
          {stats}
        </span>
      </div>

      {/* Learn More */}
      <Link
        to="/services"
        className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors group"
      >
        <span className="text-sm font-medium">Learn More</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}


export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">

        {/* Services */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Core{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive technology services designed to modernize and secure your business operations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Solutions */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Platforms
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Enterprise{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Leveraging world-class platforms and tools to drive specific business outcomes.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.title}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <ServiceCard {...solution} />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}