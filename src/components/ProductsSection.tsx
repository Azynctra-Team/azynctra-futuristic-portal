import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard = ({
  title,
  description,
  image,
  url,
  delay = 0,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  delay?: number;
}) => {
  return (
    <Card
      className="overflow-hidden flex flex-col h-full border-border/40 opacity-0 animate-fade-in card-hover shadow-lg shadow-azynctra-accent/10 hover:shadow-azynctra-accent/30"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-foreground/70 mb-6 flex-grow">{description}</p>
        <Button asChild className="mt-auto w-full group">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Visit {title}
            <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </Button>
      </div>
    </Card>
  );
};

const ProductsSection = () => {
  const products = [
    {
      title: "Mahasen AI",
      description:
        "Mahasen AI is your intelligent digital twin—a personal AI that learns your style, shields you from digital overwhelm, and handles routine communications so you can focus on what truly matters. Experience digital liberation and reclaim your time.",
      image: "/images/mahasen-preview.jpg",
      url: "http://Mahasen47.azynctra.com",
    },
  ];

  return (
    <section id="products" className="section-with-bg py-16 bg-background">
      {/* Tech-inspired background with subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.07] pointer-events-none"></div>
      
      {/* Animated technical elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Circuit-like paths */}
        <div className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute top-2/3 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-secondary/20 to-transparent"></div>
        <div className="absolute right-[10%] top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
        <div className="absolute left-[25%] top-1/2 bottom-0 w-px bg-gradient-to-b from-primary/20 to-transparent"></div>
        
        {/* Animated node points */}
        <div className="absolute top-1/4 left-0 w-2 h-2 rounded-full bg-primary/30 animate-pulse-gentle"></div>
        <div className="absolute top-2/3 right-0 w-2 h-2 rounded-full bg-secondary/30 animate-pulse-gentle delay-1"></div>
        <div className="absolute top-10 right-[10%] w-2 h-2 rounded-full bg-accent/30 animate-pulse-gentle delay-2"></div>
        <div className="absolute top-1/2 left-[25%] w-2 h-2 rounded-full bg-primary/30 animate-pulse-gentle delay-3"></div>
        
        {/* Remove glowing blobs */}
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Introducing <span className="text-gradient">Mahasen AI</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Mahasen AI is the only product we build—your digital shield in an accelerating world. No more digital chaos. Just you, your time, and your priorities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
              url={product.url}
              delay={0.3 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
