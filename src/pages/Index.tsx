import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  Menu,
  X,
  Calendar,
  MapPin,
  Clock,
  Users,
  Music,
  Palette,
  UtensilsCrossed,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Sun,
  Moon,
  Volume2,
  VolumeX,
} from "lucide-react";

// Import images
import heroImage from "@/assets/hero-festival.jpg";
import artInstallationImage from "@/assets/art-installation.jpg";
import foodVillageImage from "@/assets/food-village.jpg";
import livePerformanceImage from "@/assets/live-performance.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Festival date (October 15, 2023)
  const festivalDate = new Date('October 15, 2024 12:00:00').getTime();

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = festivalDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [festivalDate]);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-festival-dark/90 backdrop-blur-md py-2' : 'bg-festival-dark/60 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Harmony<span className="text-primary">Fest</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="nav-link text-white">About</button>
              <button onClick={() => scrollToSection('highlights')} className="nav-link text-white">Highlights</button>
              <button onClick={() => scrollToSection('schedule')} className="nav-link text-white">Schedule</button>
              <button onClick={() => scrollToSection('location')} className="nav-link text-white">Location</button>
              <button onClick={() => scrollToSection('faq')} className="nav-link text-white">FAQ</button>
              <Button onClick={() => scrollToSection('tickets')} className="btn-festival">Get Tickets</Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection('about')} className="text-white text-left hover:text-primary transition-colors">About</button>
                <button onClick={() => scrollToSection('highlights')} className="text-white text-left hover:text-primary transition-colors">Highlights</button>
                <button onClick={() => scrollToSection('schedule')} className="text-white text-left hover:text-primary transition-colors">Schedule</button>
                <button onClick={() => scrollToSection('location')} className="text-white text-left hover:text-primary transition-colors">Location</button>
                <button onClick={() => scrollToSection('faq')} className="text-white text-left hover:text-primary transition-colors">FAQ</button>
                <Button onClick={() => scrollToSection('tickets')} className="btn-festival w-fit">Get Tickets</Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
            Harmony Fest 2024
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up">
            Experience the ultimate fusion of music, art, and culture
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>October 15-17, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Central Park, New York City</span>
            </div>
          </div>
          <Button onClick={() => scrollToSection('tickets')} className="btn-festival mb-12 animate-pulse-glow">
            Get Your Tickets Now
          </Button>

          {/* Countdown */}
          <div className="flex justify-center gap-4 animate-fade-in">
            <div className="countdown-item">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {countdown.days.toString().padStart(2, '0')}
              </div>
              <div className="text-sm uppercase tracking-wide">Days</div>
            </div>
            <div className="countdown-item">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {countdown.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-sm uppercase tracking-wide">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {countdown.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-sm uppercase tracking-wide">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {countdown.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-sm uppercase tracking-wide">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>About The Festival</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Harmony Fest is a celebration of music, art, and community that brings together people from all walks of life. Since our inception in 2010, we've been dedicated to creating an unforgettable experience that resonates with festival-goers long after the music stops.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This year, we're taking things to a whole new level with three days of incredible performances, immersive art installations, gourmet food vendors, and interactive workshops. Whether you're a music enthusiast, art lover, or simply looking for a memorable weekend, Harmony Fest has something for everyone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to create a space where creativity flourishes, connections are made, and memories are created. Join us for an extraordinary journey of sound, sight, and sensation.
              </p>
            </div>
            <div className="relative">
              <img 
                src={livePerformanceImage} 
                alt="Festival crowd enjoying music"
                className="rounded-xl shadow-elevated w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Event Highlights</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="highlight-card">
              <div className="h-48 overflow-hidden">
                <img
                  src={livePerformanceImage}
                  alt="Live Performances"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Music className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-secondary">Live Performances</h3>
                </div>
                <p className="text-muted-foreground">
                  Experience electrifying performances from over 50 artists across multiple genres including rock, electronic, hip-hop, and indie.
                </p>
              </CardContent>
            </Card>

            <Card className="highlight-card">
              <div className="h-48 overflow-hidden">
                <img
                  src={artInstallationImage}
                  alt="Art Installations"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Palette className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-secondary">Art Installations</h3>
                </div>
                <p className="text-muted-foreground">
                  Explore breathtaking large-scale art installations created by talented local and international artists.
                </p>
              </CardContent>
            </Card>

            <Card className="highlight-card">
              <div className="h-48 overflow-hidden">
                <img
                  src={foodVillageImage}
                  alt="Food & Drinks"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <UtensilsCrossed className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-secondary">Gourmet Food Village</h3>
                </div>
                <p className="text-muted-foreground">
                  Indulge in culinary delights from around the world with our diverse selection of food trucks and vendors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Event Schedule</h2>
          </div>
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="day1">Day 1 (Oct 15)</TabsTrigger>
              <TabsTrigger value="day2">Day 2 (Oct 16)</TabsTrigger>
              <TabsTrigger value="day3">Day 3 (Oct 17)</TabsTrigger>
            </TabsList>

            <TabsContent value="day1">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  <div className="timeline-item">
                    <Card className="timeline-content">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">12:00 PM - 1:00 PM</Badge>
                        <h3 className="text-xl font-semibold mb-2">Opening Ceremony</h3>
                        <p className="text-muted-foreground">
                          Kick off the festival with our spectacular opening ceremony featuring special guests and performances.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="timeline-item">
                    <Card className="timeline-content">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">1:30 PM - 3:00 PM</Badge>
                        <h3 className="text-xl font-semibold mb-2">The Lumineers</h3>
                        <p className="text-muted-foreground">
                          Main Stage - Folk rock band known for their heartfelt performances and hit songs.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="timeline-item">
                    <Card className="timeline-content">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">3:30 PM - 5:00 PM</Badge>
                        <h3 className="text-xl font-semibold mb-2">Flume</h3>
                        <p className="text-muted-foreground">
                          Electronic Stage - Australian electronic music producer known for his innovative sound.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="timeline-item">
                    <Card className="timeline-content">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">5:30 PM - 7:00 PM</Badge>
                        <h3 className="text-xl font-semibold mb-2">Kendrick Lamar</h3>
                        <p className="text-muted-foreground">
                          Main Stage - Pulitzer Prize-winning rapper and one of the most influential artists of his generation.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="day2">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  <div className="timeline-item">
                    <Card className="timeline-content">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">12:00 PM - 1:30 PM</Badge>
                        <h3 className="text-xl font-semibold mb-2">Tame Impala</h3>
                        <p className="text-muted-foreground">
                          Main Stage - Australian psychedelic music project led by Kevin Parker.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="timeline-item">
                    <Card className="timeline-content">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">2:00 PM - 3:30 PM</Badge>
                        <h3 className="text-xl font-semibold mb-2">Billie Eilish</h3>
                        <p className="text-muted-foreground">
                          Main Stage - Grammy-winning artist known for her distinctive voice and atmospheric pop.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="timeline-item">
                    <Card className="timeline-content">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">4:00 PM - 5:30 PM</Badge>
                        <h3 className="text-xl font-semibold mb-2">Art Workshop</h3>
                        <p className="text-muted-foreground">
                          Creative Zone - Join local artists for an interactive painting and sculpture workshop.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="day3">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  <div className="timeline-item">
                    <Card className="timeline-content">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">12:00 PM - 1:30 PM</Badge>
                        <h3 className="text-xl font-semibold mb-2">Food Festival</h3>
                        <p className="text-muted-foreground">
                          Gourmet Village - Sample dishes from around the world in our culinary extravaganza.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="timeline-item">
                    <Card className="timeline-content">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">2:00 PM - 3:30 PM</Badge>
                        <h3 className="text-xl font-semibold mb-2">The Weeknd</h3>
                        <p className="text-muted-foreground">
                          Main Stage - Canadian singer, songwriter, and record producer known for his sonic versatility.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="timeline-item">
                    <Card className="timeline-content">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">4:00 PM - 6:00 PM</Badge>
                        <h3 className="text-xl font-semibold mb-2">Closing Ceremony & Fireworks</h3>
                        <p className="text-muted-foreground">
                          Main Stage - Spectacular closing performance followed by a breathtaking fireworks display.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Location</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-elevated h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4664374888366!2d-73.98116538459313!3d40.78176337932514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1623933213975!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What are the festival dates and hours?</AccordionTrigger>
                <AccordionContent>
                  The festival runs from October 15-17, 2024. Gates open at 11:00 AM each day, and the music ends at 11:00 PM on Friday and Saturday, and 10:00 PM on Sunday.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What items are allowed/prohibited?</AccordionTrigger>
                <AccordionContent>
                  Allowed: Small bags, empty water bottles, sunscreen, personal cameras. Prohibited: Weapons, illegal substances, glass containers, professional recording equipment, drones. For a complete list, please visit our website.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is the festival accessible for people with disabilities?</AccordionTrigger>
                <AccordionContent>
                  Yes, Harmony Fest is committed to being accessible for all attendees. We provide accessible viewing platforms, restrooms, and entrances. Please contact us in advance for specific accommodations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Are tickets refundable?</AccordionTrigger>
                <AccordionContent>
                  All ticket sales are final. No refunds or exchanges will be issued except in the case of event cancellation. If the event is canceled, ticket holders will be notified about refund procedures.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="tickets" className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Miss Out on the Experience of a Lifetime
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of music and art lovers at Harmony Fest 2024. With multiple stages, incredible food, and unforgettable performances, this is an event you won't want to miss.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg">
            Buy Tickets Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-festival-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Harmony<span className="text-primary">Fest</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Celebrating music, art, and community since 2010. Join us for an unforgettable experience.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('schedule')} className="hover:text-primary transition-colors">Schedule</button></li>
                <li><button onClick={() => scrollToSection('location')} className="hover:text-primary transition-colors">Venue</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@harmonyfest.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>123 Festival Way, New York, NY 10001</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and exclusive offers.</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="btn-festival">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Harmony Fest. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <button
          onClick={toggleDarkMode}
          className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:-translate-y-1 transition-all"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          onClick={() => setIsMusicPlaying(!isMusicPlaying)}
          className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg hover:-translate-y-1 transition-all"
        >
          {isMusicPlaying ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Index;