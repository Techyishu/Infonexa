import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats?: string;
  delay?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, stats, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <Card
        className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 h-full"
      >
        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-lg"
          whileHover={{
            background: "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))",
          }}
          transition={{ duration: 0.3 }}
        />

        <CardHeader className="relative z-10">
          <motion.div
            whileHover={{
              scale: 1.15,
              rotate: [0, -5, 5, -5, 0],
            }}
            transition={{ duration: 0.5 }}
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl"
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>
          <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10">
          {stats && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg"
            >
              <p className="text-sm font-semibold text-primary">{stats}</p>
            </motion.div>
          )}
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <Button
              variant="ghost"
              className="w-full group/btn justify-between hover:bg-primary/10"
              asChild
            >
              <Link to="/services">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
