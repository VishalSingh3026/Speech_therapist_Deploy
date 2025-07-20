import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Users, Zap, Star, Award } from "lucide-react";
import therapyToolsImage from "@/assets/therapy-tools.jpg";

export const AboutSection = () => {
  const stats = [
    { label: "Children Helped", value: "100+", icon: Users, color: "text-primary" },
    { label: "Years Experience", value: "3+", icon: Award, color: "text-accent" },
    { label: "Success Rate", value: "95%", icon: Star, color: "text-yellow-500" },
    { label: "Happy Families", value: "100+", icon: Heart, color: "text-red-500" },
  ];

  const qualifications = [
    "Diploma in Hearing, Language, and Speech (DHLS)",
    "Bachelor of Science (B.Sc.)",
    "Pursuing M.A. in Psychology",
    "Worked with Mom’s Belief",
    "Experience assisting speech-language pathologists (SLPs), hearing aid technicians, and audiologists",
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            About Your Therapist
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Aditi Singh, SLP
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about helping children overcome communication challenges and reach their full potential
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Professional Background
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 3 years of experience in the field of speech and hearing therapy, I’ve had the opportunity to support children facing communication challenges in various clinical settings, including Mom’s Belief, special schools, and reputed therapy centers. My focus is on helping children with speech delays, hearing impairments, and language disorders improve their communication and confidence.

                Currently pursuing an M.A. in Psychology, I bring a compassionate, evidence-based approach to every session. I also work closely with audiologists and other specialists as part of a holistic, child-centered care team.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-medium text-foreground">Qualifications & Certifications:</h4>
              <ul className="space-y-2">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <Zap className="w-4 h-4 text-accent shrink-0" />
                    {qual}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <img
              src={therapyToolsImage}
              alt="Speech therapy tools and materials"
              className="w-full rounded-2xl shadow-warm hover-lift"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-lift bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal touch */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <Card className="max-w-2xl mx-auto bg-warm/50 border-warm shadow-warm">
            <CardContent className="p-8">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-4" />
              <blockquote className="text-lg text-foreground italic mb-4">
                "Every child has a unique voice waiting to be discovered. My mission is to provide 
                the tools, support, and encouragement they need to share their thoughts and dreams 
                with the world."
              </blockquote>
              <footer className="text-muted-foreground font-medium">
                — Aditi Singh-(SLP)
              </footer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};