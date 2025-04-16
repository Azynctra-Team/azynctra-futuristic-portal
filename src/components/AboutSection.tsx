
import { Target, Code, ChevronRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-azynctra-muted/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Company <span className="text-gradient">Overview</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Azynctra is a forward-thinking technology company focused on delivering 
            AI-powered software products and services that transform how businesses operate.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-azynctra-primary/10 via-transparent to-azynctra-secondary/10 p-1">
                <div className="w-full h-full rounded-lg bg-azynctra-muted/30 overflow-hidden flex items-center justify-center">
                  <div className="relative w-4/5 h-4/5">
                    <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-azynctra-primary/20 filter blur-xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-azynctra-secondary/20 filter blur-xl"></div>
                    <div className="absolute inset-0 bg-[url('/abstract-pattern.svg')] bg-center bg-no-repeat bg-contain opacity-60"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/4 -right-3 w-1 h-24 rounded-full bg-gradient-to-b from-azynctra-primary to-azynctra-secondary opacity-70"></div>
              <div className="absolute -bottom-3 left-1/3 w-24 h-1 rounded-full bg-gradient-to-r from-azynctra-secondary to-azynctra-primary opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
