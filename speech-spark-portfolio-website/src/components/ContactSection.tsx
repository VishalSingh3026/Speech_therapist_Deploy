import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  MessageCircle
} from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');
      console.log('🔵 Making API call to:', `${API_URL}/api/contact`);
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log('🔵 Response status:', response.status);
      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          childAge: "",
          message: ""
        });
      } else {
        toast({
          title: "Failed to send message",
          description: result.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Server Error",
        description: "Unable to reach the server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "",
      description: "Call or text for quick questions"
    },
    {
      icon: Mail,
      label: "Email",
      value: "chauhanaditi103@gmail.com",
      description: "Detailed inquiries welcome"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida",
      description: "201316"
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Fri: 9AM-6PM",
      description: "Flexible scheduling available"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Child's Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help your child develop confidence in communication. 
            Schedule a free consultation today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-warm hover-lift animate-fade-in">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                Send a Message
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Parent/Guardian Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="childAge" className="text-sm font-medium text-foreground">
                      Child's Age
                    </label>
                    <Input
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      placeholder="e.g., 5 years old"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your child's communication needs, any concerns you have, or questions about my services..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>

              {/* Speech Therapist Illustration */}
              <div className="mt-10 flex justify-center">
                <div className="mt-10 flex justify-center">
                <img
                  src="src/assets/therapist-illustration.png"
                  alt="Speech therapist illustration"
                  className="w-[300px] md:w-[400px] rounded-xl shadow-md"
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        <p className="text-foreground font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="bg-gradient-accent shadow-warm">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-accent-foreground mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-accent-foreground mb-2">
                  Schedule Free Consultation
                </h4>
                <p className="text-accent-foreground/80 mb-4 text-sm">
                  Get a complimentary 15-minute phone consultation to discuss your child's needs
                </p>
                <Button
              variant="outline"
                className="bg-background/10 border-accent-foreground/20 text-accent-foreground hover:bg-background/20"
             onClick={() => {
                const heroBtn = document.getElementById("hero-book-btn");
                heroBtn?.click();
               }}
                >
                  Book Now
              </Button>

              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="bg-warm shadow-warm">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-warm-foreground mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-warm-foreground mb-2">
                  Have Questions?
                </h4>
                <p className="text-warm-foreground/80 mb-4 text-sm">
                  Check out my frequently asked questions or send me a quick message
                </p>
                <div className="flex gap-2 justify-center">
                  <Button variant="outline" size="sm" className="bg-background/10 border-warm-foreground/20 text-warm-foreground hover:bg-background/20">
                    View FAQ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
