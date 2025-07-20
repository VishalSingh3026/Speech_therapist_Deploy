import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Volume2, 
  Brain, 
  Users, 
  BookOpen, 
  Smile,
  ArrowRight,
  Clock,
  Target
} from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Articulation Therapy",
      description: "Helping children pronounce sounds and words correctly through fun, engaging exercises.",
      features: ["Sound production training", "Phonetic exercises", "Speech clarity improvement"],
      ageRange: "3-12 years",
      duration: "45 min sessions",
      color: "text-primary"
    },
    {
      icon: Volume2,
      title: "Language Development",
      description: "Building vocabulary, grammar skills, and overall language comprehension abilities.",
      features: ["Vocabulary expansion", "Grammar development", "Sentence structure"],
      ageRange: "2-10 years",
      duration: "60 min sessions",
      color: "text-accent"
    },
    {
      icon: Brain,
      title: "Cognitive Communication",
      description: "Addressing thinking and communication skills affected by developmental challenges.",
      features: ["Memory strategies", "Problem-solving skills", "Attention training"],
      ageRange: "5-16 years",
      duration: "50 min sessions",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Social Communication",
      description: "Teaching appropriate social interaction and conversation skills for various settings.",
      features: ["Social cues recognition", "Turn-taking skills", "Peer interaction"],
      ageRange: "4-14 years",
      duration: "45 min sessions",
      color: "text-blue-500"
    },
    {
      icon: BookOpen,
      title: "Reading & Writing Support",
      description: "Strengthening literacy skills and addressing reading comprehension challenges.",
      features: ["Phonics instruction", "Reading fluency", "Written expression"],
      ageRange: "5-12 years",
      duration: "55 min sessions",
      color: "text-green-500"
    },
    {
      icon: Smile,
      title: "Confidence Building",
      description: "Creating a supportive environment where children feel comfortable expressing themselves.",
      features: ["Self-esteem building", "Communication confidence", "Positive reinforcement"],
      ageRange: "All ages",
      duration: "Integrated approach",
      color: "text-yellow-500"
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Services Offered
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Speech Therapy Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored therapy programs designed to meet each child's unique communication needs and goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-warm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <service.icon className={`w-12 h-12 mx-auto mb-4 ${service.color}`} />
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-sm">Key Focus Areas:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <Target className="w-3 h-3 text-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      {service.ageRange}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {service.duration}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            My Therapy Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">1</span>
              </div>
              <h4 className="font-medium text-foreground">Assessment</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive evaluation to understand your child's unique needs and strengths
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-accent font-bold">2</span>
              </div>
              <h4 className="font-medium text-foreground">Personalized Plan</h4>
              <p className="text-sm text-muted-foreground">
                Custom therapy plan tailored to your child's goals and learning style
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-warm/60 rounded-full flex items-center justify-center mx-auto">
                <span className="text-warm-foreground font-bold">3</span>
              </div>
              <h4 className="font-medium text-foreground">Progress & Growth</h4>
              <p className="text-sm text-muted-foreground">
                Regular monitoring and celebrating every milestone along the journey
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button
              variant="hero"
               size="lg"
              className="group"
              onClick={() => {
              const heroBtn = document.getElementById("hero-book-btn");
                heroBtn?.click();
                }}
                >
                  Schedule a Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

          <p className="text-sm text-muted-foreground mt-3">
            Let's discuss how we can help your child reach their communication goals
          </p>
        </div>
      </div>
    </section>
  );
};