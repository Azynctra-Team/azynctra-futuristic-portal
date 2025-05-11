
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Enhanced scroll animation for elements with scroll-reveal class
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add animation classes when element comes into view
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Once animation is triggered, stop observing to prevent re-animation
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.15,  // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -10% 0px'  // Adjust trigger point slightly above bottom viewport
      }
    );
    
    // Target all scroll-reveal elements
    const animatedElements = document.querySelectorAll('.scroll-reveal');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      if (animatedElements) {
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
