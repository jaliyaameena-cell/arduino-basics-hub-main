import { Link } from "react-router-dom";
import { Cpu, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Cpu className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">Arduino Made Simple</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Learn electronics step by step. No prior knowledge required.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Sensor Tutorials</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/buzzer" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Buzzer Sensor
              </Link>
              <Link to="/ultrasonic" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Ultrasonic Sensor
              </Link>
              <Link to="/dht" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                DHT Sensor
              </Link>
            </nav>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <nav className="flex flex-col gap-2">
              <a 
                href="https://www.arduino.cc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Official Arduino Website
              </a>
              <a 
                href="https://www.arduino.cc/en/software" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Download Arduino IDE
              </a>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arduino Made Simple. Built for beginners.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 fill-primary text-primary" /> for learners everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
