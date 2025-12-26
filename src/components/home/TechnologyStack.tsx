import {
    Code2, Cloud, Database, Shield, Cpu, Network,
    Container, GitBranch, Server, Layers
} from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
    {
        category: "Cloud Platforms",
        icon: Cloud,
        items: ["AWS", "Azure", "Google Cloud", "Oracle Cloud"],
    },
    {
        category: "Development",
        icon: Code2,
        items: ["React", "Next.js", "Node.js", "Python", "Java", ".NET"],
    },
    {
        category: "Data & AI",
        icon: Database,
        items: ["Snowflake", "Informatica", "TensorFlow", "PyTorch"],
    },
    {
        category: "DevOps & Automation",
        icon: GitBranch,
        items: ["Kubernetes", "Docker", "Jenkins", "Terraform", "Ansible"],
    },
    {
        category: "Security",
        icon: Shield,
        items: ["Zero Trust", "SIEM", "IAM", "Compliance Frameworks"],
    },
    {
        category: "Enterprise Platforms",
        icon: Layers,
        items: ["ServiceNow", "Salesforce", "SAP", "Adobe AEM", "Optimizely"],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { y: 30, opacity: 0, rotateX: -15 },
    visible: {
        y: 0,
        opacity: 1,
        rotateX: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
};

export const TechnologyStack = () => {
    return (
        <section className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
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
                        Our Tech Arsenal
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: false }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                    >
                        Cutting-Edge <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="text-lg text-muted-foreground"
                    >
                        We leverage best-in-class technologies to build scalable, secure, and future-ready solutions.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.category}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                transition: { duration: 0.3 },
                            }}
                            className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-5">
                                <motion.div
                                    whileHover={{
                                        rotate: 360,
                                        scale: 1.1,
                                    }}
                                    transition={{ duration: 0.6 }}
                                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center"
                                >
                                    <tech.icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <h3 className="text-xl font-semibold text-card-foreground">
                                    {tech.category}
                                </h3>
                            </div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                transition={{ staggerChildren: 0.05 }}
                                className="flex flex-wrap gap-2"
                            >
                                {tech.items.map((item, itemIndex) => (
                                    <motion.span
                                        key={item}
                                        variants={tagVariants}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: itemIndex * 0.05 }}
                                        viewport={{ once: false }}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "rgba(var(--primary), 0.1)",
                                            transition: { duration: 0.2 },
                                        }}
                                        className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: false }}
                    className="mt-16 text-center"
                >
                    <p className="text-muted-foreground text-lg mb-2">
                        Don't see your technology?
                    </p>
                    <motion.p
                        whileHover={{ scale: 1.02 }}
                        className="text-foreground font-semibold"
                    >
                        We're constantly expanding our expertise. Let's discuss your specific needs.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};
