import { CheckCircle2, Target, Users, Zap, Award, Shield, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Reason {
    icon: LucideIcon;
    title: string;
    description: string;
}

const reasons: Reason[] = [
    {
        icon: Target,
        title: "Results-Driven Approach",
        description: "We focus on delivering measurable business outcomes, not just technical solutions.",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Certified professionals with years of experience across diverse industries.",
    },
    {
        icon: Zap,
        title: "Agile & Fast",
        description: "Rapid deployment without compromising quality. We adapt quickly to change.",
    },
    {
        icon: Award,
        title: "Proven Track Record",
        description: "500+ successful projects delivered for Fortune 500 companies and startups.",
    },
    {
        icon: Shield,
        title: "Security First",
        description: "Enterprise-grade security built into every solution we deliver.",
    },
    {
        icon: CheckCircle2,
        title: "End-to-End Support",
        description: "From consultation to deployment and maintenance, we're with you all the way.",
    },
];

const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "150+", label: "Expert Professionals" },
    { value: "24/7", label: "Support Available" },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 md:py-32 bg-muted/30">
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
                        Why Partner With Us
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        The{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Infonexa
                        </span>{" "}
                        Difference
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We combine technical excellence with business acumen to deliver solutions that drive real value.
                    </p>
                </motion.div>

                {/* Cards Grid */}
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
                    {reasons.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: { y: 0, opacity: 1 },
                            }}
                            whileHover={{ y: -5 }}
                            className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-shadow hover:shadow-lg"
                        >
                            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-5">
                                <item.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-card-foreground mb-3">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            variants={{
                                hidden: { scale: 0.8, opacity: 0 },
                                visible: { scale: 1, opacity: 1 },
                            }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                            <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
