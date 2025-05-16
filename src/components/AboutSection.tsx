import { Target, Code, ChevronRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-with-bg py-16 bg-background">
      <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.07] pointer-events-none"></div>
      
      {/* Remove animated background blobs */}
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-lg text-foreground/70">
            We believe life shouldn't be consumed by endless notifications and digital noise. Our mission is to build your perfect digital twin—an AI that knows you so well it can act on your behalf, shielding you from distractions and giving you back control of your time and attention. Mahasen AI is designed to respond as you would, handle routine communications, and only bring truly important matters to your attention. We're building the future of digital liberation.
          </p>
        </div>
        <div className="h-24" /> 
        <div className="h-24" />
        <div className="h-24" />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-azynctra-primary/20 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-foreground/70">
                  To give people back their most precious resource: time. In a world overwhelmed by digital demands, Mahasen AI will be the essential shield for anyone who wants to focus on what truly matters.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-azynctra-secondary/20 text-secondary">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Why Mahasen AI?</h3>
                <p className="text-foreground/70">
                  Mahasen AI learns your communication style, manages your digital life, and lets you reclaim your attention. It's not just an assistant—it's your intelligent digital twin.
                </p>
              </div>
            </div>
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
