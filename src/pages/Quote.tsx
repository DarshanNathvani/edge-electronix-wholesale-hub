
import { useState } from "react";
import Navigation from "@/components/Navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    products: "",
    quantity: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*Quote Request from ${formData.name}*

📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🛒 Products: ${formData.products}
📦 Quantity: ${formData.quantity}
💬 Message: ${formData.message}

Please provide a quote for the above requirements.`;

    const whatsappUrl = `https://wa.me/919898408301?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours with competitive pricing.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      products: "",
      quantity: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Get Competitive Wholesale Pricing for Your Requirements
          </p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Quote Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Get Your Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="products">Products Required *</Label>
                    <Textarea
                      id="products"
                      name="products"
                      value={formData.products}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="List the electronic components you need (e.g., ESP32, Ultrasonic Sensors, Arduino Uno, etc.)"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Specify quantities for each product"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Any specific requirements, delivery timeline, or additional information..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Why Choose Our Quote Service?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Lowest Price Guarantee</h4>
                        <p className="text-gray-600 text-sm">We match or beat any competitor's price</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Quick Response</h4>
                        <p className="text-gray-600 text-sm">Get quotes within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Bulk Discounts</h4>
                        <p className="text-gray-600 text-sm">Special pricing for large orders</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Quality Assured</h4>
                        <p className="text-gray-600 text-sm">Only genuine, tested components</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Prefer Direct Contact?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="font-semibold text-gray-800">WhatsApp</p>
                        <p className="text-gray-600">+91-9898408301</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-blue-500" />
                      <div>
                        <p className="font-semibold text-gray-800">Call Us</p>
                        <p className="text-gray-600">+91-7600421900</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-6 h-6 text-purple-500" />
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-gray-600">EdgeElectronix@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
