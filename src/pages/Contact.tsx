
import Navigation from "@/components/Navigation";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation as NavIcon } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    const message = "Hi! I'd like to know more about your products and services.";
    const whatsappUrl = `https://wa.me/919898408301?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleEmail = () => {
    window.location.href = "mailto:EdgeElectronix@gmail.com";
  };

  const handleDirections = () => {
    const address = "G7, Fortune High Street, Opp. Western Arena, Nr. Madhuvan Circle, Subhash Chandra Bose Marg, Adajan, Surat, Gujarat – 395009";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Get in Touch - We're Here to Help with All Your Electronic Component Needs
          </p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                    Visit Our Store
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">Edge Electronix</h3>
                      <p className="text-gray-600 leading-relaxed">
                        G7, Fortune High Street,<br />
                        Opp. Western Arena,<br />
                        Nr. Madhuvan Circle,<br />
                        Subhash Chandra Bose Marg,<br />
                        Adajan, Surat, Gujarat – 395009
                      </p>
                    </div>
                    <Button 
                      onClick={handleDirections}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <NavIcon className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <Clock className="w-6 h-6 mr-2 text-green-600" />
                    Business Hours
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Saturday</span>
                      <span className="font-semibold text-gray-800">10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-gray-800">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700">
                        <strong>WhatsApp Support:</strong> Available 24/7 for quick queries!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
                  <div className="space-y-6">
                    {/* WhatsApp */}
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-green-500 rounded-full">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                          <p className="text-gray-600">+91-9898408301</p>
                          <p className="text-sm text-green-600">Fastest response time</p>
                        </div>
                      </div>
                      <Button 
                        onClick={handleWhatsApp}
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        Chat Now
                      </Button>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-500 rounded-full">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Phone</h3>
                          <p className="text-gray-600">+91-9898408301</p>
                          <p className="text-gray-600">+91-7600421900</p>
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleCall("919898408301")}
                        variant="outline"
                        className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                      >
                        Call Now
                      </Button>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-purple-500 rounded-full">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Email</h3>
                          <p className="text-gray-600">EdgeElectronix@gmail.com</p>
                          <p className="text-sm text-purple-600">For detailed inquiries</p>
                        </div>
                      </div>
                      <Button 
                        onClick={handleEmail}
                        variant="outline"
                        className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                      >
                        Send Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Us</h2>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">Interactive Map</p>
                      <Button 
                        onClick={handleDirections}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our team is ready to help you find the right components for your project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us Now
            </Button>
            <Button 
              size="lg"
              onClick={() => handleCall("919898408301")}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Direct
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
