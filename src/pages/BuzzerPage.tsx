import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import PartCard from "@/components/PartCard";
import StepCard from "@/components/StepCard";
import CodeBlock from "@/components/CodeBlock";
import MistakeCard from "@/components/MistakeCard";
import { Button } from "@/components/ui/button";
import { 
  Volume2, 
  Lightbulb, 
  Wrench, 
  Code, 
  ArrowRight, 
  Shield, 
  Sparkles,
  ArrowLeft,
  AlertTriangle
} from "lucide-react";

// Import images
import arduinoImg from "@/assets/arduino-uno.jpg";
import breadboardImg from "@/assets/breadboard.jpg";
import jumperWiresImg from "@/assets/jumper-wires.jpg";
import buzzerImg from "@/assets/buzzer-sensor.jpg";
import buzzerWiringImg from "@/assets/buzzer-wiring.jpg";
import breadboardDiagramImg from "@/assets/breadboard-diagram.jpg";

const buzzerCode = `// Buzzer Example - Makes a beeping sound
// Connect buzzer + to pin 8, - to GND

int buzzerPin = 8;  // The pin connected to the buzzer

void setup() {
  pinMode(buzzerPin, OUTPUT);  // Set the buzzer pin as output
}

void loop() {
  // Make a beep sound
  tone(buzzerPin, 1000);  // Play a 1000 Hz tone
  delay(500);             // Wait half a second
  
  noTone(buzzerPin);      // Stop the sound
  delay(500);             // Wait half a second
  
  // This repeats forever!
}`;

const BuzzerPage = () => {
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
              <Volume2 className="h-4 w-4" />
              Buzzer Tutorial
            </div>
            <h1 className="mb-4 text-display-sm text-foreground md:text-display-md">
              Buzzer Sensor
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's build your first project step by step. You'll make sounds with Arduino!
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
            description="Understanding how a buzzer works"
          />
          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6 text-center">
            <p className="mb-4 text-lg text-foreground">
              A buzzer makes sound when electricity flows through it.
            </p>
            <p className="text-muted-foreground">
              <strong>Real-life example:</strong> Buzzers are used in smoke alarms, 
              microwaves when food is ready, and digital watches for alarms.
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
            <PartCard name="Jumper Wires" imageSrc={jumperWiresImg} description="2 wires needed" />
            <PartCard name="Buzzer" imageSrc={buzzerImg} description="The sound maker" />
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
                <span className="text-red-700">Red wire = 5V Power</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm">
                <div className="h-3 w-3 rounded-full bg-gray-800" />
                <span className="text-gray-700">Black wire = GND (Ground)</span>
              </div>
            </div>

            <StepCard
              stepNumber={1}
              title="Place the Buzzer on the Breadboard"
              description="Push the buzzer's two legs into two different rows on the breadboard. Make sure they're not in the same row!"
            />
            
            <StepCard
              stepNumber={2}
              title="Connect the Positive (+) Leg"
              description="The longer leg (or the leg marked with +) goes to Arduino pin 8. Use any color wire (we suggest red or orange)."
            />
            
            <StepCard
              stepNumber={3}
              title="Connect the Negative (-) Leg"
              description="The shorter leg (or the leg marked with -) connects to GND on the Arduino. Use a black wire."
              imageSrc={buzzerWiringImg}
              imageAlt="Buzzer wiring diagram"
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
            <CodeBlock code={buzzerCode} />
            <div className="mt-6 rounded-lg border bg-accent/50 p-4">
              <h4 className="mb-2 font-semibold text-foreground">What this code does:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <code className="rounded bg-secondary px-1">tone()</code> makes the buzzer play a sound at 1000 Hz</li>
                <li>• <code className="rounded bg-secondary px-1">delay(500)</code> waits for half a second (500 milliseconds)</li>
                <li>• <code className="rounded bg-secondary px-1">noTone()</code> stops the sound</li>
                <li>• The code repeats forever, creating a beeping pattern</li>
              </ul>
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
              <Code className="mb-2 h-10 w-10 text-primary" />
              <span className="font-semibold">Arduino</span>
              <span className="text-sm text-muted-foreground">Runs your code</span>
            </div>
            <ArrowRight className="h-6 w-6 rotate-90 text-primary md:rotate-0" />
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
              <Volume2 className="mb-2 h-10 w-10 text-primary" />
              <span className="font-semibold">Buzzer</span>
              <span className="text-sm text-muted-foreground">Makes sound</span>
            </div>
            <ArrowRight className="h-6 w-6 rotate-90 text-primary md:rotate-0" />
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
              <Sparkles className="mb-2 h-10 w-10 text-primary" />
              <span className="font-semibold">You Hear</span>
              <span className="text-sm text-muted-foreground">Beep beep!</span>
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
              mistake="No sound at all"
              fix="Check if the wires are pushed in firmly. Try wiggling them gently to ensure good contact."
            />
            <MistakeCard
              mistake="Buzzer legs in the same row"
              fix="Move one leg to a different row. Each leg needs its own row!"
            />
            <MistakeCard
              mistake="Wrong pin number in code"
              fix="Make sure the code says pin 8 and your wire is connected to pin 8 on the Arduino."
            />
            <MistakeCard
              mistake="USB cable not connected"
              fix="Plug the USB cable from your computer to the Arduino. It provides both power and uploads your code."
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

      {/* Try This Yourself */}
      <section className="py-12 md:py-16">
        <div className="container">
          <SectionHeader
            icon={Sparkles}
            title="Try This Yourself!"
            description="Now that it works, experiment with these ideas"
          />
          <div className="mx-auto max-w-2xl space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold text-foreground">Change the Sound</h4>
              <p className="text-sm text-muted-foreground">
                Try changing <code className="rounded bg-secondary px-1">1000</code> to other numbers like 500 or 2000 to hear different tones.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold text-foreground">Speed It Up</h4>
              <p className="text-sm text-muted-foreground">
                Change <code className="rounded bg-secondary px-1">delay(500)</code> to <code className="rounded bg-secondary px-1">delay(100)</code> for faster beeps.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold text-foreground">Play a Tune</h4>
              <p className="text-sm text-muted-foreground">
                Add more <code className="rounded bg-secondary px-1">tone()</code> lines with different frequencies to create a simple melody!
              </p>
            </div>
          </div>
          
          <div className="mx-auto mt-12 max-w-2xl rounded-lg border-2 border-primary bg-accent p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-foreground">🎉 Congratulations!</h3>
            <p className="mb-6 text-muted-foreground">
              You just built your first Arduino project. You're now ready to build on your own!
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

export default BuzzerPage;
