import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Cpu className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">Arduino Made Simple</span>
        </Link>
        
        <nav className="hidden items-center gap-6 md:flex">
          <Link 
            to="/buzzer" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Buzzer
          </Link>
          <Link 
            to="/ultrasonic" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Ultrasonic
          </Link>
          <Link 
            to="/dht" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            DHT Sensor
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
