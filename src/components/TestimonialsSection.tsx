
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';

type Testimonial = {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
};

const TestimonialCard = ({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) => {
  return (
    <div className="scroll-reveal opacity-0 transition-transform duration-700 translate-y-8" 
         style={{ transitionDelay: `${index * 150}ms` }}>
      <Card className="p-6 border-border/40 card-hover shadow-lg shadow-azynctra-secondary/10 hover:shadow-azynctra-secondary/30">
        <div className="mb-4 text-primary">
          <Quote className="h-8 w-8" />
        </div>
        <blockquote className="text-lg text-foreground/80 mb-6">
          "{testimonial.content}"
        </blockquote>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 border-2 border-primary/30">
            <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
            <AvatarFallback>{testimonial.author.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <p className="font-medium">{testimonial.author}</p>
            <p className="text-sm text-foreground/60">{testimonial.role}, {testimonial.company}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Azynctra's AI automation solutions transformed our customer support operations. We've seen a 40% increase in response efficiency while maintaining personalized interactions.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechVision Inc.",
      avatar: "/images/avatar-1.jpg"
    },
    {
      id: 2,
      content: "The data science team at Azynctra helped us extract actionable insights from our massive datasets. Their custom analytics dashboards have become essential to our decision-making process.",
      author: "Michael Rodriguez",
      role: "Data Director",
      company: "Global Analytics",
      avatar: "/images/avatar-2.jpg"
    },
    {
      id: 3,
      content: "Working with Azynctra on our mobile app development was seamless. They delivered a polished product ahead of schedule, with intuitive UX and powerful backend integration.",
      author: "Amara Johnson",
      role: "Product Manager",
      company: "NextGen Mobile",
      avatar: "/images/avatar-3.jpg"
    },
    {
      id: 4,
      content: "Implementing Mahasen AI has unified our customer communications across platforms. The analytics and automation features have saved our team countless hours of manual work.",
      author: "David Park",
      role: "Customer Success Lead",
      company: "Elemental Brands",
      avatar: "/images/avatar-4.jpg"
    }
  ];
  
  return (
    <section id="testimonials" className="section-with-bg py-16 relative">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] dark:opacity-[0.05] pointer-events-none"></div>
      
      {/* Animated tech patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract tech lines */}
        <div className="absolute top-0 left-[25%] right-[25%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
        <div className="absolute top-20 bottom-20 left-[10%] w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
        <div className="absolute top-40 bottom-40 right-[10%] w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 left-[5%] w-40 h-40 border border-primary/10 rounded-full opacity-70 animate-pulse-gentle"></div>
        <div className="absolute bottom-1/4 right-[5%] w-64 h-64 border border-secondary/10 rounded-full opacity-70 animate-float"></div>
        
        {/* Animated glowing blobs */}
        <div className="absolute -top-20 left-1/4 w-96 h-96 glow-blob blob-primary animate-drift"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 glow-blob blob-secondary animate-pulse-gentle delay-2"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 scroll-reveal opacity-0 transition-transform duration-700 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Don't take our word for it - hear what our clients have to say about working with Azynctra.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
