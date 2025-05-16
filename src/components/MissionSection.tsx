import React from 'react';

const MissionSection = () => {
  return (
    <section id="mission" className="relative py-20 bg-background">
      <div className="section-container relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gradient animate-fade-in">
          The Mission of Mahasen AI
        </h2>
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Digital Liberation for Every Human
        </p>
        <blockquote className="mx-auto max-w-2xl bg-card/80 border-l-4 border-primary px-8 py-6 rounded-xl shadow-lg text-lg md:text-xl text-foreground/90 font-medium italic animate-fade-in" style={{animationDelay: '0.4s'}}>
          Life can't just be about replying to emails and checking off to-do list items. Our mission is to build your perfect digital twin, an AI that knows you so well it knows what you'll do and go and does it.<br /><br />
          <span className="font-semibold text-primary">This intelligent shield sits between you and the flood of notifications, emails, and messages that consume your attention. It will respond as you would, handle routine communications autonomously, and only bring truly important matters to your attention.</span>
        </blockquote>
        <div className="mt-10 text-foreground/70 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p>
            Using a blend of advanced AI models and deep personalization, your digital twin will free you from the constant demands of digital life in ways no existing assistant can match.<br /><br />
            <span className="font-semibold text-gradient">We are building Mahasen AI for you—so you can reclaim your life from digital overwhelm and focus on what truly matters.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 