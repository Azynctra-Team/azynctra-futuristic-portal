
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductCard = ({
  title,
  description,
  image,
  url,
  delay = 0
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  delay?: number;
}) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full border-border/40 opacity-0 animate-fade-in card-hover" style={{ animationDelay: `${delay}s` }}>
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
      description: "Manage customer conversations across WhatsApp, Facebook, and Instagram in one unified platform. Streamline your customer communications and boost engagement.",
      image: "/images/mahasen-preview.jpg",
      url: "http://Mahasen47.azynctra.com"
    },
    {
      title: "Gyma",
      description: "A SaaS fitness app for guided workouts and progress tracking. Personalized workout plans, real-time analytics, and expert guidance to achieve your fitness goals.",
      image: "/images/gyma-preview.jpg",
      url: "http://Gyma.azynctra.com"
    }
  ];
  
  return (
    <section id="products" className="py-24 bg-azynctra-muted/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Discover our innovative AI-powered products designed to transform businesses and enhance customer experiences.
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
