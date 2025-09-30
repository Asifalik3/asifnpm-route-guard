import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          About Asifnpmtest
        </h1>
        
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-xl text-muted-foreground text-center mb-8">
            We are a forward-thinking technology company dedicated to delivering exceptional digital solutions 
            that drive business growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To empower businesses with innovative technology solutions that transform ideas into 
                successful digital experiences. We believe in creating value through cutting-edge 
                development and strategic thinking.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the leading technology partner for businesses seeking digital transformation. 
                We envision a future where technology seamlessly integrates with business goals 
                to create meaningful impact.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-primary text-center">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We strive for perfection in every project we undertake
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We embrace new technologies and creative solutions
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain transparency and honesty in all our dealings
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;