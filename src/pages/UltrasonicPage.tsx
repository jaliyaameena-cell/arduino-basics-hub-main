import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import PartCard from "@/components/PartCard";
import StepCard from "@/components/StepCard";
import CodeBlock from "@/components/CodeBlock";
import MistakeCard from "@/components/MistakeCard";
import { Button } from "@/components/ui/button";
import { 
  Radar, 
  Lightbulb, 
  Wrench, 
  Code, 
  ArrowRight, 
  Shield, 
  Sparkles,
  ArrowLeft,
  AlertTriangle,
  Ruler
} from "lucide-react";

// Import images
import arduinoImg from "@/assets/arduino-uno.jpg";
import breadboardImg from "@/assets/breadboard.jpg";
import jumperWiresImg from "@/assets/jumper-wires.jpg";
import ultrasonicImg from "@/assets/ultrasonic-sensor.jpg";
import ultrasonicWiringImg from "@/assets/ultrasonic-wiring.jpg";
import breadboardDiagramImg from "@/assets/breadboard-diagram.jpg";

const ultrasonicCode = `// Ultrasonic Distance Sensor Example
// Measures distance and shows it in the Serial Monitor

int trigPin = 9;    // TRIG pin connected to pin 9
int echoPin = 10;   // ECHO pin connected to pin 10

void setup() {
  Serial.begin(9600);        // Start the Serial Monitor
  pinMode(trigPin, OUTPUT);  // TRIG sends out the sound
  pinMode(echoPin, INPUT);   // ECHO listens for the return
}

void loop() {
  // Send out a sound pulse
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Listen for the echo and measure time
  long duration = pulseIn(echoPin, HIGH);
  
  // Calculate distance in centimeters
  int distance = duration * 0.034 / 2;
  
  // Show the distance
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  delay(500);  // Wait half a second before next reading
}`;

const UltrasonicPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent to-background py-16 md:py-24">
        <div className="container">
          <Link 
            to="/" 
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Radar className="h-4 w-4" />
              Ultrasonic Tutorial
            </div>
            <h1 className="mb-4 text-display-sm text-foreground md:text-display-md">
              Ultrasonic Sensor
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's build a distance measuring project. Like a bat using echolocation!
            </p>
          </div>
        </div>
      </section>

      {/* What This Sensor Does */}
      <section className="py-12 md:py-16">
        <div className="container">
          <SectionHeader
            icon={Lightbulb}
            title="What This Sensor Does"
            description="Understanding how ultrasonic sensing works"
          />
          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6 text-center">
            <p className="mb-4 text-lg text-foreground">
              This sensor measures distance using sound waves that you can't hear.
            </p>
            <p className="text-muted-foreground">
              <strong>Real-life example:</strong> Car parking sensors use the same technology. 
              They beep faster when you get close to an object!
            </p>
          </div>
        </div>
      </section>

      {/* Parts You Need */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container">
          <SectionHeader
            icon={Wrench}
            title="Parts You Need"
            description="Gather these components before starting"
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <PartCard name="Arduino Uno" imageSrc={arduinoImg} description="The brain of your project" />
            <PartCard name="Breadboard" imageSrc={breadboardImg} description="For connecting parts" />
            <PartCard name="Jumper Wires" imageSrc={jumperWiresImg} description="4 wires needed" />
            <PartCard name="Ultrasonic Sensor" imageSrc={ultrasonicImg} description="HC-SR04 module" />
          </div>
        </div>
      </section>

      {/* Breadboard Reminder */}
      <section className="py-12 md:py-16">
        <div className="container">
          <SectionHeader
            title="Quick Breadboard Reminder"
            description="How the breadboard connects things"
          />
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 overflow-hidden rounded-lg border">
              <img 
                src={breadboardDiagramImg} 
                alt="Breadboard connection diagram" 
                className="w-full"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-4">
                <h4 className="mb-2 font-semibold text-foreground">Middle Rows</h4>
                <p className="text-sm text-muted-foreground">
                  The 5 holes in each row are connected. Put parts in the same row to connect them.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <h4 className="mb-2 font-semibold text-foreground">Power Rails (+ and -)</h4>
                <p className="text-sm text-muted-foreground">
                  The long strips on the sides are for power. Red line = positive, Blue line = negative (ground).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensor Pins Explanation */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container">
          <SectionHeader
            title="Understanding the 4 Pins"
            description="The ultrasonic sensor has 4 pins - here's what each does"
          />
          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-4">
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 inline-block rounded bg-red-100 px-2 py-1 text-xs font-bold text-red-700">VCC</div>
              <p className="text-sm text-muted-foreground">Power (5V)</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 inline-block rounded bg-orange-100 px-2 py-1 text-xs font-bold text-orange-700">TRIG</div>
              <p className="text-sm text-muted-foreground">Sends sound out</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 inline-block rounded bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700">ECHO</div>
              <p className="text-sm text-muted-foreground">Listens for return</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 inline-block rounded bg-gray-100 px-2 py-1 text-xs font-bold text-gray-700">GND</div>
              <p className="text-sm text-muted-foreground">Ground (negative)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wiring Guide */}
      <section className="py-12 md:py-16">
        <div className="container">
          <SectionHeader
            title="Step-by-Step Wiring"
            description="Follow these steps carefully. Take your time!"
          />
          
          <div className="mx-auto max-w-3xl space-y-4">
            {/* Color code reminder */}
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <span className="text-red-700">Red = VCC (5V)</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm">
                <div className="h-3 w-3 rounded-full bg-gray-800" />
                <span className="text-gray-700">Black = GND</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm">
                <div className="h-3 w-3 rounded-full bg-orange-500" />
                <span className="text-orange-700">Orange = TRIG</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-blue-700">Blue = ECHO</span>
              </div>
            </div>

            <StepCard
              stepNumber={1}
              title="Place the Sensor on the Breadboard"
              description="Push the 4 pins of the ultrasonic sensor into 4 different rows on the breadboard."
            />
            
            <StepCard
              stepNumber={2}
              title="Connect VCC to 5V"
              description="Use a red wire to connect the VCC pin to the 5V pin on your Arduino."
            />
            
            <StepCard
              stepNumber={3}
              title="Connect GND to Ground"
              description="Use a black wire to connect the GND pin to a GND pin on your Arduino."
            />
            
            <StepCard
              stepNumber={4}
              title="Connect TRIG to Pin 9"
              description="Use an orange wire to connect the TRIG pin to digital pin 9 on your Arduino."
            />
            
            <StepCard
              stepNumber={5}
              title="Connect ECHO to Pin 10"
              description="Use a blue wire to connect the ECHO pin to digital pin 10 on your Arduino."
              imageSrc={ultrasonicWiringImg}
              imageAlt="Ultrasonic sensor wiring diagram"
            />
          </div>
        </div>
      </section>

      {/* Arduino Code */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container">
          <SectionHeader
            icon={Code}
            title="The Arduino Code"
            description="Copy this code and paste it into the Arduino IDE"
          />
          <div className="mx-auto max-w-3xl">
            <CodeBlock code={ultrasonicCode} />
            <div className="mt-6 rounded-lg border bg-accent/50 p-4">
              <h4 className="mb-2 font-semibold text-foreground">What this code does:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Sends out a quick sound pulse through the TRIG pin</li>
                <li>• Listens for the echo coming back through the ECHO pin</li>
                <li>• Measures how long it took (the <code className="rounded bg-secondary px-1">duration</code>)</li>
                <li>• Calculates the distance based on the speed of sound</li>
                <li>• Shows the result in the Serial Monitor</li>
              </ul>
              <div className="mt-4 rounded border border-primary/30 bg-background p-3">
                <p className="text-sm font-medium text-foreground">💡 To see the distance:</p>
                <p className="text-sm text-muted-foreground">
                  After uploading, click Tools → Serial Monitor (or press Ctrl+Shift+M)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16">
        <div className="container">
          <SectionHeader
            title="How This Project Works"
            description="The simple flow of your project"
          />
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 md:flex-row md:gap-6">
            <div className="flex flex-col items-center rounded-lg border bg-card p-4 text-center">
              <Radar className="mb-2 h-8 w-8 text-primary" />
              <span className="text-sm font-semibold">Sensor</span>
              <span className="text-xs text-muted-foreground">Sends sound</span>
            </div>
            <ArrowRight className="h-5 w-5 rotate-90 text-primary md:rotate-0" />
            <div className="flex flex-col items-center rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 text-2xl">🎯</div>
              <span className="text-sm font-semibold">Object</span>
              <span className="text-xs text-muted-foreground">Reflects sound</span>
            </div>
            <ArrowRight className="h-5 w-5 rotate-90 text-primary md:rotate-0" />
            <div className="flex flex-col items-center rounded-lg border bg-card p-4 text-center">
              <Radar className="mb-2 h-8 w-8 text-primary" />
              <span className="text-sm font-semibold">Sensor</span>
              <span className="text-xs text-muted-foreground">Hears echo</span>
            </div>
            <ArrowRight className="h-5 w-5 rotate-90 text-primary md:rotate-0" />
            <div className="flex flex-col items-center rounded-lg border bg-card p-4 text-center">
              <Code className="mb-2 h-8 w-8 text-primary" />
              <span className="text-sm font-semibold">Arduino</span>
              <span className="text-xs text-muted-foreground">Calculates</span>
            </div>
            <ArrowRight className="h-5 w-5 rotate-90 text-primary md:rotate-0" />
            <div className="flex flex-col items-center rounded-lg border bg-card p-4 text-center">
              <Ruler className="mb-2 h-8 w-8 text-primary" />
              <span className="text-sm font-semibold">Display</span>
              <span className="text-xs text-muted-foreground">Shows distance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container">
          <SectionHeader
            icon={AlertTriangle}
            title="Common Mistakes & Fixes"
            description="Don't worry if something goes wrong. Here are easy fixes."
          />
          <div className="mx-auto max-w-2xl space-y-4">
            <MistakeCard
              mistake="Serial Monitor shows 0 cm"
              fix="Make sure the sensor is pointed at something within 4 meters. Check that TRIG and ECHO wires aren't swapped."
            />
            <MistakeCard
              mistake="Random or crazy numbers"
              fix="Check all 4 wire connections. Make sure VCC is connected to 5V, not 3.3V."
            />
            <MistakeCard
              mistake="Nothing shows in Serial Monitor"
              fix="Make sure you selected the right COM port in Tools → Port. Try unplugging and replugging the USB cable."
            />
            <MistakeCard
              mistake="Sensor pointing the wrong way"
              fix="The two silver cylinders (the 'eyes') should face toward the object you want to measure."
            />
            <div className="mt-6 rounded-lg border border-primary/30 bg-accent/30 p-4 text-center">
              <p className="text-sm text-foreground">
                💡 <strong>Remember:</strong> Mistakes are normal and nothing is damaged! 
                The Arduino is very forgiving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <SectionHeader
            icon={Shield}
            title="Safety & Confidence"
            description="You're working with safe, low-voltage electronics"
          />
          <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 text-2xl">⚡</div>
              <h4 className="font-semibold text-foreground">Low Voltage</h4>
              <p className="text-sm text-muted-foreground">Only 5 volts - like 3 AA batteries</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 text-2xl">👆</div>
              <h4 className="font-semibold text-foreground">Safe to Touch</h4>
              <p className="text-sm text-muted-foreground">You can touch any wire or part safely</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 text-2xl">🔄</div>
              <h4 className="font-semibold text-foreground">Try Again</h4>
              <p className="text-sm text-muted-foreground">Wrong connections won't break anything</p>
            </div>
          </div>
        </div>
      </section>

      {/* Try This Yourself */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container">
          <SectionHeader
            icon={Sparkles}
            title="Try This Yourself!"
            description="Now that it works, experiment with these ideas"
          />
          <div className="mx-auto max-w-2xl space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold text-foreground">Add a Buzzer</h4>
              <p className="text-sm text-muted-foreground">
                Connect a buzzer and make it beep faster when objects get closer - like a parking sensor!
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold text-foreground">Change the Units</h4>
              <p className="text-sm text-muted-foreground">
                Modify the code to show distance in inches instead of centimeters. Divide by 2.54!
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold text-foreground">Create an Alarm</h4>
              <p className="text-sm text-muted-foreground">
                Add an if-statement to trigger an alert when something gets too close.
              </p>
            </div>
          </div>
          
          <div className="mx-auto mt-12 max-w-2xl rounded-lg border-2 border-primary bg-accent p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-foreground">🎉 Congratulations!</h3>
            <p className="mb-6 text-muted-foreground">
              You just built a distance sensor! You're now ready to build on your own!
            </p>
            <Button asChild>
              <Link to="/">
                Try Another Sensor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UltrasonicPage;
