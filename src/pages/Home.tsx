import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Welcome to Asifnpmtest
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your trusted partner for innovative web solutions and cutting-edge digital services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary shadow-elegant hover:shadow-lg transition-all duration-300" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-elegant hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary">Innovation</CardTitle>
                <CardDescription>
                  Cutting-edge solutions using the latest technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We stay ahead of the curve to deliver exceptional results that exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary">Quality</CardTitle>
                <CardDescription>
                  Premium quality in every project we deliver
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our commitment to excellence ensures your project meets the highest standards.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary">Support</CardTitle>
                <CardDescription>
                  24/7 dedicated support for all your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Round-the-clock assistance to keep your business running smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;