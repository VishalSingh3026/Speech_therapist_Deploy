import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Award, CheckCircle } from "lucide-react";
import { AnimatedCharacters } from "./AnimatedCharacters";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ childName: "", age: "", phone: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');
      console.log('🔵 Making API call to:', `${API_URL}/api/consultation`);
      
      const res = await fetch(`${API_URL}/api/consultation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          childName: formData.childName,
          age: formData.age,
         parentPhone: formData.phone,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setFormData({ childName: "", age: "", phone: "" });
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setIsModalOpen(false);
        }, 2500);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error connecting to the server.");
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-accent/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-warm/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center max-w-6xl">
        {/* Left content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Helping Children
              <span className="block gradient-hero bg-clip-text text-transparent">
                Find Their Voice
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Professional speech therapy services designed to unlock your child's communication potential in a warm, supportive environment.
            </p>
          </div>

          <div className="my-8">
            <AnimatedCharacters />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">100+ Children Helped</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
              <Award className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">3+ Years Experience</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button id="hero-book-btn" variant="hero" size="lg" className="group" onClick={() => setIsModalOpen(true)}>
              Book Free 10-Min Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="warm" size="lg" onClick={scrollToServices}>
              Learn More About Services
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <img
              src={heroImage}
              alt="Speech therapist working with a child"
              className="w-full rounded-2xl shadow-warm hover-lift"
            />
            <div className="absolute -bottom-4 -left-4 bg-card/95 backdrop-blur-sm p-3 rounded-lg shadow-soft animate-float max-w-[200px]">
              <div className="flex items-center gap-1 mb-1">
                <Heart className="w-3 h-3 text-red-500 fill-current" />
                <span className="text-xs font-medium text-foreground">Parent Review</span>
              </div>
              <p className="text-xs text-muted-foreground leading-tight">
                "Amazing progress in just 3 months. My daughter loves coming here!"
              </p>
              <div className="flex text-yellow-400 mt-1 text-xs">{"★".repeat(5)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-background p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <h2 className="text-xl font-semibold text-foreground mb-4">Book Your Free Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-foreground mb-1">Child’s Name</label>
                <input
                  type="text"
                  required
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  className="w-full border border-border rounded px-3 py-2 bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm text-foreground mb-1">Age</label>
                <input
                  type="number"
                  required
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full border border-border rounded px-3 py-2 bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm text-foreground mb-1">Parent’s Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-border rounded px-3 py-2 bg-background text-foreground"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="hero">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-card border border-border px-6 py-4 rounded-lg shadow-lg text-center animate-fade-in">
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-2" />
            <p className="text-foreground font-medium">Submission Successful!</p>
          </div>
        </div>
      )}
    </section>
  );
};
