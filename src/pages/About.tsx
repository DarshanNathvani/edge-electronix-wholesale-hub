
import Navigation from "@/components/Navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Edge Electronix</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Your Trusted Partner in Electronic Components & IoT Solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Edge Electronix was founded with a simple mission: to provide high-quality electronic components 
              at wholesale prices to innovators, students, and businesses across Surat and beyond. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Starting as a small electronics supplier, we've grown into Surat's most trusted wholesale 
              distributor of sensors, microcontrollers, IoT modules, and automation components. Our commitment 
              to quality, competitive pricing, and exceptional customer service has made us the go-to choice 
              for educational institutions, startups, and established businesses.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we serve thousands of customers with our extensive inventory of electronic components, 
              offering everything from basic sensors to advanced IoT solutions, all backed by our 
              lowest price guarantee and personal WhatsApp support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 text-white">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">Our Mission</h3>
                <p className="text-gray-600">
                  To empower innovation by providing quality electronic components at unbeatable wholesale prices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-4 text-white">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">Quality First</h3>
                <p className="text-gray-600">
                  We source only genuine, tested components from trusted manufacturers worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4 text-white">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">Customer Focus</h3>
                <p className="text-gray-600">
                  Personal WhatsApp support and dedicated service for every customer's unique needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-4 text-white">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">Innovation</h3>
                <p className="text-gray-600">
                  Supporting the next generation of makers, students, and entrepreneurs with cutting-edge components.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-blue-600">Educational Institutions</h3>
              <p className="text-gray-600">
                Colleges, universities, and schools across Gujarat trust us for their electronics lab requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-green-600">Startups & SMEs</h3>
              <p className="text-gray-600">
                Growing businesses rely on our competitive pricing and bulk discounts for their prototyping needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3 text-purple-600">Makers & Hobbyists</h3>
              <p className="text-gray-600">
                DIY enthusiasts and makers choose us for quality components and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
