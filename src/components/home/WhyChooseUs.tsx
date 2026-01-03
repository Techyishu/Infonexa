import { CheckCircle2, Target, Users, Zap, Award, Shield } from "lucide-react";
import { motion, Variants } from "framer-motion";

const whyChooseUsData = [
    {
        icon: Target,
        title: "Results-Driven Approach",
        description: "We focus on delivering measurable business outcomes, not just technical solutions. Our strategies are aligned with your goals.",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Our certified professionals bring years of experience across diverse industries and cutting-edge technologies.",
    },
    {
        icon: Zap,
        title: "Agile & Fast",
        description: "Rapid deployment without compromising quality. We adapt quickly to changing requirements and market dynamics.",
    },
    {
        icon: Award,
        title: "Proven Track Record",
        description: "500+ successful projects delivered across Fortune 500 companies and fast-growing startups.",
    },
    {
        icon: Shield,
        title: "Security First",
        description: "Enterprise-grade security built into every solution. We ensure compliance with industry standards and regulations.",
    },
    {
        icon: CheckCircle2,
        title: "End-to-End Support",
        description: "From consultation to deployment and ongoing maintenance, we're with you every step of the way.",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
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

const statVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

export const WhyChooseUs = () => {
    return (
        <section className="py-24 md:py-32 bg-muted/30 overflow-hidden">
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
                        Why Partner With Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: false }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                    >
                        The <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Infonexa</span> Difference
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="text-lg text-muted-foreground"
                    >
                        We combine technical excellence with business acumen to deliver solutions that drive real value.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {whyChooseUsData.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                        >
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-5"
                            >
                                <item.icon className="w-7 h-7 text-white" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-card-foreground mb-3">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
                >
                    {[
                        { value: "500+", label: "Projects Delivered" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "150+", label: "Expert Professionals" },
                        { value: "24/7", label: "Support Available" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            variants={statVariants}
                            whileHover={{ scale: 1.05 }}
                            className="text-center"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                viewport={{ once: false }}
                                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-sm md:text-base text-muted-foreground font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
