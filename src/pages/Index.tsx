import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import InfoCard from "@/components/InfoCard";
import SensorCard from "@/components/SensorCard";
import YouTubeButton from "@/components/YouTubeButton";
import { Cpu, Grid3X3, Cable, Download, Sparkles, Info } from "lucide-react";

// Import images
import buzzerSensorImg from "@/assets/buzzer-sensor.jpg";
import ultrasonicSensorImg from "@/assets/ultrasonic-sensor.jpg";
import dhtSensorImg from "@/assets/dht-sensor.jpg";
import BBButton from "@/components/bb";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent to-background py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Beginner Friendly
            </div>
            <h1 className="mb-6 text-display-md text-foreground md:text-display-lg">
              Arduino Made Simple
            </h1>
            <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
              Choose your sensor and build your project step by step.
            </p>
            <p className="text-lg text-muted-foreground">
              No electronics knowledge needed. Just follow the steps.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Before Choosing a Sensor Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <SectionHeader
            title="Before You Start"
            description="Let's understand the basic parts you'll be using in every project."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard
              icon={Cpu}
              title="Arduino"
              description="A small computer that controls things. It reads sensors and tells other parts what to do."
            />

            <InfoCard
              icon={Grid3X3}
              title="Breadboard"
              description="Lets you connect parts without soldering. Just push wires into the holes."
            >
              <BBButton onClick={() => window.location.href = '/breadboard'}>
                Learn about Breadboards
              </BBButton>

            </InfoCard>

            <InfoCard
              icon={Cable}
              title="Jumper Wires"
              description="Wires used to connect everything together. Different colors help you stay organized."
            />
          </div>
        </div>
      </section>

      {/* Arduino IDE Installation */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent">
              <Download className="h-8 w-8 text-accent-foreground" />
            </div>
            <h2 className="mb-4 text-display-sm text-foreground md:text-display-md">
              Install Arduino Software
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Before we start building, you need to install the Arduino IDE.
              This is the free software where you'll write and upload code to your Arduino.
            </p>
            <YouTubeButton href="https://youtu.be/3awCkLS7gHI?si=WhKaCdLiDOG2E5Li">
              How to install Arduino IDE
            </YouTubeButton>
          </div>
        </div>
      </section>

      {/* Choose Your Sensor Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <SectionHeader
            title="Choose Your Sensor"
            description="Select the sensor you have and follow the step-by-step tutorial."
          />

          <div className="grid gap-8 md:grid-cols-3">
            <SensorCard
              title="Buzzer Sensor"
              description="Create sound using Arduino. Perfect for alarms, alerts, and simple music."
              imageSrc={buzzerSensorImg}
              imageAlt="Piezo buzzer electronic component"
              href="/buzzer"
            />

            <SensorCard
              title="Ultrasonic Sensor"
              description="Measure distance using sound waves. Like a bat uses echolocation!"
              imageSrc={ultrasonicSensorImg}
              imageAlt="HC-SR04 ultrasonic distance sensor"
              href="/ultrasonic"
            />

            <SensorCard
              title="DHT Sensor"
              description="Measure temperature and humidity. Build your own weather station."
              imageSrc={dhtSensorImg}
              imageAlt="DHT11 temperature and humidity sensor"
              href="/dht"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
