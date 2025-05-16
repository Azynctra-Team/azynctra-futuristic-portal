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
  
  const testimonials = [
    {
      id: 1,
      content: "Mahasen AI has completely changed how I handle digital communications. My inbox is finally under control, and I only see what truly matters. It's like having a second brain that knows exactly what I need.",
      author: "Sarah Chen",
      role: "Productivity Coach",
      company: "FocusFlow",
      avatar: "/images/avatar-1.jpg"
    },
    {
      id: 2,
      content: "With Mahasen AI, I reclaimed hours every week. It responds to routine emails and messages just like I would, so I can focus on my real priorities.",
      author: "Michael Rodriguez",
      role: "Entrepreneur",
      company: "Self-Employed",
      avatar: "/images/avatar-2.jpg"
    },
    {
      id: 3,
      content: "I was skeptical, but Mahasen AI really does feel like a digital twin. It filters out the noise and only brings me what matters most. Total digital liberation!",
      author: "Amara Johnson",
      role: "Writer & Creator",
      company: "Independent",
      avatar: "/images/avatar-3.jpg"
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
        
        {/* Remove animated glowing blobs */}
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 scroll-reveal opacity-0 transition-transform duration-700 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Hear how Mahasen AI is transforming digital lives and giving people back their time.
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
