import { Code2, Cloud, Database, Shield, GitBranch, Layers, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface TechCategory {
    category: string;
    icon: LucideIcon;
    items: string[];
}

const technologies: TechCategory[] = [
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

export function TechnologyStack() {
    return (
        <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                        Our Tech Arsenal
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Cutting-Edge{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Technology Stack
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We leverage best-in-class technologies to build scalable, secure, and future-ready solutions.
                    </p>
                </motion.div>

                {/* Tech Cards */}
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
                    {technologies.map((tech) => (
                        <motion.div
                            key={tech.category}
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: { y: 0, opacity: 1 },
                            }}
                            whileHover={{ y: -5 }}
                            className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-shadow hover:shadow-lg"
                        >
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                                    <tech.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-card-foreground">{tech.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tech.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-muted-foreground text-lg mb-2">Don't see your technology?</p>
                    <p className="text-foreground font-semibold">
                        We're constantly expanding our expertise. Let's discuss your specific needs.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
