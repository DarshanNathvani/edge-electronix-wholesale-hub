
import { useState } from "react";
import Navigation from "@/components/Navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All", "Sensors", "Microcontrollers", "IoT & Communication", 
    "Automation", "Drones", "Power Supply", "Tools"
  ];

  const products = [
    {
      category: "Sensors",
      name: "Ultrasonic Sensor HC-SR04",
      specs: "Range: 2cm-400cm, 5V Supply",
      price: "Starting ₹45",
      popular: true
    },
    {
      category: "Sensors",
      name: "PIR Motion Sensor",
      specs: "3.3V-5V, Adjustable Sensitivity",
      price: "Starting ₹35"
    },
    {
      category: "Sensors",
      name: "DHT22 Temperature Sensor",
      specs: "Digital, High Accuracy",
      price: "Starting ₹120"
    },
    {
      category: "Microcontrollers",
      name: "ESP32 Development Board",
      specs: "Wi-Fi + Bluetooth, 32-bit",
      price: "Starting ₹380",
      popular: true
    },
    {
      category: "Microcontrollers",
      name: "Arduino Uno R3",
      specs: "ATmega328P, USB Interface",
      price: "Starting ₹350"
    },
    {
      category: "Microcontrollers",
      name: "STM32 Blue Pill",
      specs: "ARM Cortex-M3, 72MHz",
      price: "Starting ₹280"
    },
    {
      category: "IoT & Communication",
      name: "ESP8266 Wi-Fi Module",
      specs: "802.11 b/g/n, AT Commands",
      price: "Starting ₹150",
      popular: true
    },
    {
      category: "IoT & Communication",
      name: "SIM800L GSM Module",
      specs: "Quad-band, SMS & Call",
      price: "Starting ₹320"
    },
    {
      category: "IoT & Communication",
      name: "LoRa SX1278 Module",
      specs: "Long Range, Low Power",
      price: "Starting ₹450"
    },
    {
      category: "Automation",
      name: "Servo Motor SG90",
      specs: "180° Rotation, 4.8V-6V",
      price: "Starting ₹85"
    },
    {
      category: "Automation",
      name: "Stepper Motor 28BYJ-48",
      specs: "5V, ULN2003 Driver Included",
      price: "Starting ₹95"
    },
    {
      category: "Drones",
      name: "Brushless Motor 2212",
      specs: "1000KV, Quadcopter Motor",
      price: "Starting ₹650"
    },
    {
      category: "Drones",
      name: "30A ESC",
      specs: "Electronic Speed Controller",
      price: "Starting ₹420"
    },
    {
      category: "Power Supply",
      name: "DC-DC Buck Converter",
      specs: "4.5-40V to 1.25-37V, 3A",
      price: "Starting ₹45"
    },
    {
      category: "Tools",
      name: "Digital Multimeter",
      specs: "AC/DC Voltage, Current, Resistance",
      price: "Starting ₹280"
    }
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleEnquiry = (productName: string) => {
    const message = `Hi! I'm interested in ${productName}. Can you provide more details and pricing?`;
    const whatsappUrl = `https://wa.me/919898408301?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Comprehensive Range of Electronic Components at Wholesale Prices
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "hover:bg-gray-100"
                } transition-colors duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                    {product.popular && (
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 min-h-[40px]">
                    {product.specs}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-600">
                      {product.price}
                    </span>
                    <Button 
                      size="sm" 
                      onClick={() => handleEnquiry(product.name)}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Enquiry
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Pricing CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Bulk Quantities?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Special pricing available for colleges, labs, and startups. Contact us for custom quotes!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
            onClick={() => handleEnquiry("Bulk Order Inquiry")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Bulk Pricing
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
