
import { Target, Code, ChevronRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-with-bg py-16 dark:bg-azynctra-muted/30 bg-gradient-light dark:bg-gradient-dark">
      <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.07] pointer-events-none"></div>
      
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 glow-blob blob-primary animate-pulse-gentle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 glow-blob blob-secondary animate-pulse-gentle delay-2"></div>
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 glow-blob blob-accent animate-float delay-3"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Company <span className="text-gradient">Overview</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Azynctra is a forward-thinking technology company focused on delivering 
            AI-powered software products and services that transform how businesses operate.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-azynctra-primary/20 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-foreground/70">
                  To be at the forefront of AI innovation, creating intelligent solutions 
                  that solve complex business problems and drive meaningful change.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-azynctra-secondary/20 text-secondary">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
                <p className="text-foreground/70">
                  We combine cutting-edge AI technology with deep industry expertise 
                  to deliver solutions that are not just intelligent, but also practical and scalable.
                </p>
              </div>
            </div>
            
            <ul className="space-y-2 pl-10">
              {[
                "Customized AI solutions for unique business needs",
                "Ethical AI development with transparent practices",
                "Continuous innovation and research",
                "Client-centered approach with ongoing support"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="relative">
              {/* Abstract shape design */}
              <div className="w-full aspect-square rounded-2xl p-1 bg-gradient-to-br from-azynctra-primary/40 via-azynctra-secondary/40 to-azynctra-accent/40">
                <div className="w-full h-full rounded-xl bg-azynctra-muted/80 overflow-hidden flex items-center justify-center">
                  <div className="relative w-4/5 h-4/5">
                    {/* Abstract pattern */}
                    <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-azynctra-primary/30 filter blur-xl"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-azynctra-secondary/30 filter blur-xl"></div>
                    <div className="absolute inset-0 bg-[url('/images/ai-visual.svg')] bg-center bg-no-repeat bg-contain opacity-80"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-lg glass"></div>
              <div className="absolute -bottom-5 -right-5 w-10 h-10 rounded-full glass"></div>
              <div className="absolute top-1/4 -right-3 w-6 h-32 rounded-full bg-gradient-to-b from-azynctra-primary to-azynctra-secondary opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
