
import { useState } from 'react';
import { Settings, Database, Briefcase, Smartphone, PenTool, Bot } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  index = 0
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  index?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`scroll-reveal opacity-0 transition-transform duration-700 translate-y-8`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card 
        className={`p-6 card-hover shadow-lg h-full ${isHovered ? 'bg-gradient-to-br from-azynctra-muted to-background border-primary/40 shadow-azynctra-primary/30' : 'bg-card border-border/40 shadow-azynctra-accent/10'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`p-3 rounded-lg w-fit mb-4 ${isHovered ? 'bg-primary/20' : 'bg-muted'}`}>
          <Icon className={`h-6 w-6 ${isHovered ? 'text-primary' : 'text-foreground/80'}`} />
        </div>
        <h3 className="text-xl font-semibold mb-2 transition-colors">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </Card>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "AI Automation Services",
      description: "Streamline your operations with intelligent automation solutions that learn and adapt to your business needs.",
      icon: Settings
    },
    {
      title: "Data Science Solutions",
      description: "Transform raw data into actionable insights with our advanced analytics and machine learning capabilities.",
      icon: Database
    },
    {
      title: "Automation Consulting",
      description: "Expert guidance on implementing automation strategies that drive efficiency and reduce operational costs.",
      icon: Briefcase
    },
    {
      title: "Web & Mobile Development",
      description: "Create powerful, intuitive digital experiences with our cutting-edge development services.",
      icon: Smartphone
    },
    {
      title: "Handcrafted Software",
      description: "Custom-built software solutions designed specifically for your unique business challenges.",
      icon: PenTool
    },
    {
      title: "Agentic AI Products",
      description: "Deploy autonomous AI agents that perform complex tasks with minimal human intervention.",
      icon: Bot
    }
  ];
  
  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal opacity-0 transition-transform duration-700 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-foreground/70">
            At Azynctra Labs, we're dedicated to creating innovative solutions that bridge the gap between complex AI technology and practical business applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
