
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, MapPin, Cpu, Zap, Settings, Wifi, Wrench, Battery, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const Index = () => {
  const featuredCategories = [
    {
      title: "Sensors",
      description: "IR, Ultrasonic, Gas, Temperature & More",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Microcontrollers",
      description: "ESP32, STM32, Arduino & Development Boards",
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "IoT & Communication",
      description: "GSM, LoRa, Wi-Fi Modules & IoT Solutions",
      icon: <Wifi className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Power & Tools",
      description: "Power Supplies, Multimeters & Testing Equipment",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const topCategories = [
    {
      title: "Sensors",
      icon: <Settings className="w-12 h-12" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Microcontrollers",
      icon: <Cpu className="w-12 h-12" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Modules",
      description: "Wi-Fi, GSM, LoRa",
      icon: <Wifi className="w-12 h-12" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Drone Parts",
      icon: <Zap className="w-12 h-12" />,
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Power Supplies",
      icon: <Battery className="w-12 h-12" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Tools & Accessories",
      icon: <Wrench className="w-12 h-12" />,
      gradient: "from-gray-500 to-slate-500"
    }
  ];

  const testimonials = [
    {
      text: "Best prices in Surat and fast delivery. Perfect for our college lab!",
      author: "Mr. Patel, SVIT",
      rating: 5
    },
    {
      text: "We buy all IoT modules from Edge Electronix. Trustworthy and quick service.",
      author: "DroneWorks Startup",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <WhatsAppFloat />
      <FloatingActionButtons />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Edge <span className="text-green-400">Electronix</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto animate-fade-in">
            Surat's #1 Source for Wholesale Electronic Components, Sensors & IoT Hardware
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/products">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                View Products <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/quote">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Edge Electronix?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Lowest Price Guarantee", desc: "Wholesale pricing with unbeatable rates", icon: "💰" },
              { title: "Local Delivery in Surat", desc: "Fast and reliable delivery service", icon: "🚚" },
              { title: "Bulk Pricing Available", desc: "Special rates for colleges, labs & startups", icon: "📦" },
              { title: "WhatsApp Support", desc: "Personal assistance via WhatsApp", icon: "💬" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Top Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {topCategories.map((category, index) => (
              <Link key={index} to="/products" className="group">
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.gradient} mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-sm text-gray-800">{category.title}</h3>
                    {category.description && (
                      <p className="text-xs text-gray-600 mt-1">{category.description}</p>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-800">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Product Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.gradient} mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link to="/products">
                    <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      Explore <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch Today!</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-2" />
              <p className="font-semibold">Call/WhatsApp</p>
              <p>+91-9898408301</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-2" />
              <p className="font-semibold">Email</p>
              <p>EdgeElectronix@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-2" />
              <p className="font-semibold">Location</p>
              <p>Surat, Gujarat</p>
            </div>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
