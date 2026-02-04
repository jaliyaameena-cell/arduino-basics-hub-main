import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import PartCard from "@/components/PartCard";
import StepCard from "@/components/StepCard";
import CodeBlock from "@/components/CodeBlock";
import MistakeCard from "@/components/MistakeCard";
import { Button } from "@/components/ui/button";
import {
  Thermometer,
  Lightbulb,
  Wrench,
  Code,
  ArrowRight,
  Shield,
  Sparkles,
  ArrowLeft,
  AlertTriangle,
  Droplets,
  Monitor
} from "lucide-react";

// Import images
import arduinoImg from "@/assets/arduino-uno.jpg";
import breadboardImg from "@/assets/breadboard.jpg";
import jumperWiresImg from "@/assets/jumper-wires.jpg";
import dhtImg from "@/assets/dht-sensor.jpg";
import dhtWiringImg from "@/assets/dht-wiring.jpg";
import breadboardDiagramImg from "@/assets/breadboard-diagram.jpg";

const dhtCode = `// DHT11 Temperature & Humidity Sensor Example
// Shows readings in the Serial Monitor

#include <DHT.h>  // You need to install this library first!

int dhtPin = 2;      // DATA pin connected to pin 2
DHT dht(dhtPin, DHT11);  // Create the sensor object

void setup() {
  Serial.begin(9600);    // Start the Serial Monitor
  dht.begin();           // Start the sensor
  Serial.println("DHT11 Temperature & Humidity Sensor");
  Serial.println("-----------------------------------");
}

void loop() {
  // Wait a bit between readings (sensor needs time)
  delay(2000);
  
  // Read the values
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();  // Celsius
  
  // Check if reading worked
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from sensor!");
    return;
  }
  
  // Show the results
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.print(" °C  |  Humidity: ");
  Serial.print(humidity);
  Serial.println(" %");
}`;

const DHTPage = () => {
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
              <Thermometer className="h-4 w-4" />
              DHT Sensor Tutorial
            </div>
            <h1 className="mb-4 text-display-sm text-foreground md:text-display-md">
              DHT Temperature & Humidity Sensor
            </h1>
            <p className="text-xl text-muted-foreground">
              Build your own mini weather station! Measure temperature and humidity.
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
            description="Understanding temperature and humidity sensing"
          />
          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6 text-center">
            <p className="mb-4 text-lg text-foreground">
              The DHT sensor measures two things: how hot it is and how much moisture is in the air.
            </p>
            <p className="text-muted-foreground">
              <strong>Real-life examples:</strong> Weather apps use these sensors for forecasts.
              Your home thermostat uses one. Greenhouses use them to keep plants healthy!
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
            <PartCard name="Jumper Wires" imageSrc={jumperWiresImg} description="3 wires needed" />
            <PartCard name="DHT Sensor" imageSrc={dhtImg} description="DHT11 or DHT22 module" />
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
            title="Understanding the 3 Pins"
            description="The DHT module has 3 pins (some have 4, but we only use 3)"
          />
          <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 inline-block rounded bg-red-100 px-2 py-1 text-xs font-bold text-red-700">VCC / +</div>
              <p className="text-sm text-muted-foreground">Power (5V or 3.3V)</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 inline-block rounded bg-green-100 px-2 py-1 text-xs font-bold text-green-700">DATA / OUT</div>
              <p className="text-sm text-muted-foreground">Sends the readings</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 inline-block rounded bg-gray-100 px-2 py-1 text-xs font-bold text-gray-700">GND / -</div>
              <p className="text-sm text-muted-foreground">Ground (negative)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Library Installation */}
      <section className="py-12 md:py-16">
        <div className="container">
          <SectionHeader
            title="Important: Install the DHT Library First!"
            description="The DHT sensor needs a special library to work"
          />
          <div className="mx-auto max-w-2xl">
            <div className="space-y-4">
              <div className="flex gap-4 rounded-lg border bg-card p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</div>
                <div>
                  <p className="font-medium text-foreground">Open Arduino IDE</p>
                  <p className="text-sm text-muted-foreground">Make sure your Arduino IDE is open</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-lg border bg-card p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</div>
                <div>
                  <p className="font-medium text-foreground">Go to Library Manager</p>
                  <p className="text-sm text-muted-foreground">Click Sketch → Include Library → Manage Libraries...</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-lg border bg-card p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</div>
                <div>
                  <p className="font-medium text-foreground">Search for "DHT sensor library"</p>
                  <p className="text-sm text-muted-foreground">Type "DHT" in the search box and find "DHT sensor library" by Adafruit</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-lg border bg-card p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">4</div>
                <div>
                  <p className="font-medium text-foreground">Click Install</p>
                  <p className="text-sm text-muted-foreground">If asked to install dependencies, click "Install All"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wiring Guide */}
      <section className="bg-secondary py-12 md:py-16">
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
              <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-green-700">Green = DATA</span>
              </div>
            </div>

            <StepCard
              stepNumber={1}
              title="Place the DHT Sensor on the Breadboard"
              description="Push the 3 pins of the DHT module into 3 different rows on the breadboard."
            />

            <StepCard
              stepNumber={2}
              title="Connect VCC to 5V"
              description="Use a red wire to connect the VCC (or +) pin to the 5V pin on your Arduino."
            />

            <StepCard
              stepNumber={3}
              title="Connect GND to Ground"
              description="Use a black wire to connect the GND (or -) pin to a GND pin on your Arduino."
            />

            <StepCard
              stepNumber={4}
              title="Connect DATA to Pin 2"
              description="Use a green wire to connect the DATA (or OUT) pin to digital pin 2 on your Arduino."
            />
          </div>
        </div>
      </section>

      {/* Arduino Code */}
      <section className="py-12 md:py-16">
        <div className="container">
          <SectionHeader
            icon={Code}
            title="The Arduino Code"
            description="Copy this code and paste it into the Arduino IDE"
          />
          <div className="mx-auto max-w-3xl">
            <CodeBlock code={dhtCode} />
            <div className="mt-6 rounded-lg border bg-accent/50 p-4">
              <h4 className="mb-2 font-semibold text-foreground">What this code does:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <code className="rounded bg-secondary px-1">#include &lt;DHT.h&gt;</code> loads the DHT library you installed</li>
                <li>• <code className="rounded bg-secondary px-1">dht.readHumidity()</code> reads the moisture level in the air</li>
                <li>• <code className="rounded bg-secondary px-1">dht.readTemperature()</code> reads the temperature in Celsius</li>
                <li>• Results are shown in the Serial Monitor every 2 seconds</li>
              </ul>
              <div className="mt-4 rounded border border-primary/30 bg-background p-3">
                <p className="text-sm font-medium text-foreground">💡 To see the readings:</p>
                <p className="text-sm text-muted-foreground">
                  After uploading, click Tools → Serial Monitor (or press Ctrl+Shift+M)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container">
          <SectionHeader
            title="How This Project Works"
            description="The simple flow of your project"
          />
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 md:flex-row md:gap-8">
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
              <Thermometer className="mb-2 h-10 w-10 text-primary" />
              <span className="font-semibold">DHT Sensor</span>
              <span className="text-sm text-muted-foreground">Measures environment</span>
            </div>
            <ArrowRight className="h-6 w-6 rotate-90 text-primary md:rotate-0" />
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
              <Code className="mb-2 h-10 w-10 text-primary" />
              <span className="font-semibold">Arduino</span>
              <span className="text-sm text-muted-foreground">Processes data</span>
            </div>
            <ArrowRight className="h-6 w-6 rotate-90 text-primary md:rotate-0" />
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
              <Monitor className="mb-2 h-10 w-10 text-primary" />
              <span className="font-semibold">Your Screen</span>
              <span className="text-sm text-muted-foreground">Shows readings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-12 md:py-16">
        <div className="container">
          <SectionHeader
            icon={AlertTriangle}
            title="Common Mistakes & Fixes"
            description="Don't worry if something goes wrong. Here are easy fixes."
          />
          <div className="mx-auto max-w-2xl space-y-4">
            <MistakeCard
              mistake="Error: 'DHT.h' not found"
              fix="You need to install the DHT library first. Go to Sketch → Include Library → Manage Libraries and search for 'DHT'."
            />
            <MistakeCard
              mistake="Shows 'Failed to read from sensor'"
              fix="Check all wire connections. Make sure the DATA pin is connected to pin 2, not another pin."
            />
            <MistakeCard
              mistake="Temperature seems wrong"
              fix="The sensor needs a few seconds to stabilize. Wait 10-15 seconds after powering on. Also keep it away from heat sources."
            />
            <MistakeCard
              mistake="Nothing shows in Serial Monitor"
              fix="Make sure you selected the right COM port in Tools → Port. The baud rate should be 9600."
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
      <section className="bg-secondary py-12 md:py-16">
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

      {/* Real World Applications */}
      <section className="py-12 md:py-16">
        <div className="container">
          <SectionHeader
            title="Real-World Uses"
            description="This same technology is used everywhere!"
          />
          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 text-3xl">🏠</div>
              <h4 className="font-semibold text-foreground">Smart Homes</h4>
              <p className="text-sm text-muted-foreground">Thermostats that adjust automatically</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 text-3xl">🌱</div>
              <h4 className="font-semibold text-foreground">Greenhouses</h4>
              <p className="text-sm text-muted-foreground">Keep plants at perfect conditions</p>
            </div>
            <div className="rounded-lg border bg-card p-4 text-center">
              <div className="mb-2 text-3xl">🖥️</div>
              <h4 className="font-semibold text-foreground">Server Rooms</h4>
              <p className="text-sm text-muted-foreground">Prevent computers from overheating</p>
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
              <h4 className="font-semibold text-foreground">Convert to Fahrenheit</h4>
              <p className="text-sm text-muted-foreground">
                Multiply the temperature by 1.8 and add 32 to show Fahrenheit instead of Celsius.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold text-foreground">Add a Warning</h4>
              <p className="text-sm text-muted-foreground">
                Use an if-statement to print "TOO HOT!" when temperature goes above 30°C.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold text-foreground">Comfort Indicator</h4>
              <p className="text-sm text-muted-foreground">
                Add a buzzer that beeps when humidity is too high (above 70%).
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-lg border-2 border-primary bg-accent p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-foreground">🎉 Congratulations!</h3>
            <p className="mb-6 text-muted-foreground">
              You just built a mini weather station! You're now ready to build on your own!
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

export default DHTPage;
