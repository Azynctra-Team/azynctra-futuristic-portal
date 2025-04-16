
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with overlay and effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-azynctra-muted to-background z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5 z-20"></div>
        
        {/* Animated circles for futuristic effect */}
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-azynctra-primary/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-azynctra-secondary/20 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-6xl font-bold opacity-0 animate-fade-in">
                <span className="text-gradient">Empowering Business</span> <br />
                through AI Innovation
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-lg opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
                Next-generation AI solutions for forward-thinking businesses. 
                Transform your data into insights and your challenges into opportunities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button asChild className="group" size="lg">
                <a href="#products">
                  Explore Our Products 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="relative">
              {/* Abstract AI visual */}
              <div className="relative w-full h-[400px] overflow-hidden rounded-xl glass animate-glow">
                <div className="absolute inset-0 bg-[url('/images/ai-visual.svg')] bg-center bg-no-repeat bg-contain"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-azynctra-primary/30 to-azynctra-secondary/30"></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg bg-azynctra-accent/80 animate-float"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-azynctra-secondary/80 animate-float" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
