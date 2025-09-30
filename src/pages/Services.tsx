import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      features: ["React & TypeScript", "Responsive Design", "Performance Optimization", "SEO Ready"]
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "React Native", "User-Friendly Design", "App Store Deployment"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
      features: ["AWS & Azure", "Auto-scaling", "Security First", "24/7 Monitoring"]
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive digital transformation consulting",
      features: ["Business Analysis", "Technology Roadmap", "Process Optimization", "Growth Strategy"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface design",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance services",
      features: ["Bug Fixes", "Security Updates", "Performance Monitoring", "Technical Support"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-primary">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="shadow-elegant max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-primary">Ready to Get Started?</CardTitle>
              <CardDescription>
                Let's discuss your project and find the perfect solution for your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="bg-gradient-primary shadow-elegant" asChild>
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;