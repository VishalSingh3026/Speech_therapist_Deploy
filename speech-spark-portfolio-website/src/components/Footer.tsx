import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SJ</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Aditi Singh</h3>
                <p className="text-sm text-background/70">Speech-Language Pathologist</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Helping children find their voice and build confidence in communication 
              through personalized, evidence-based therapy services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-background/80 hover:text-background transition-colors text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-background/80 hover:text-background transition-colors text-sm"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-background/80 hover:text-background transition-colors text-sm"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-background/80 hover:text-background transition-colors text-sm"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors text-sm">
                <Phone className="w-4 h-4" />
                #
              </a>
              <a href="mailto:sarah@speechtherapy.com" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors text-sm">
                <Mail className="w-4 h-4" />
                chauhanaditi103@gmail.com
              </a>
              <div className="flex items-start gap-2 text-background/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Noida<br />201316</span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Office Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-background/80 text-sm">
                <Clock className="w-4 h-4" />
                <span>Monday - Friday</span>
              </div>
              <p className="text-background/80 text-sm ml-6">9:00 AM - 6:00 PM</p>
              <p className="text-background/80 text-sm ml-6">Flexible scheduling available</p>
              <p className="text-background/80 text-sm ml-6">Evening appointments by request</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © 2025 Aditi Speech Therapy. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-background/70 text-sm">
            <span>Made by Vishal</span>
            {/* <Heart className="w-4 h-4 text-red-400 fill-current" /> */}
            <span>for children's communication success</span>
          </div>
        </div>
      </div>
    </footer>
  );
};