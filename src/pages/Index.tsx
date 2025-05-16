import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
// TODO: import MissionSection from '@/components/MissionSection';
import ProductsSection from '@/components/ProductsSection';

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
        {/* <MissionSection /> */}
        {/* <ProductsSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
