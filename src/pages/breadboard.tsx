import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import PartCard from "@/components/PartCard";
import StepCard from "@/components/StepCard";
import MistakeCard from "@/components/MistakeCard";
import { Button } from "@/components/ui/button";
import {
    Grid3X3,
    Lightbulb,
    Wrench,
    ArrowRight,
    ArrowLeft,
    AlertTriangle,
    Sparkles,
    Shield
} from "lucide-react";

// Images
import breadboardImg from "@/assets/breadboard.jpg";
import breadboardDiagramImg from "@/assets/breadboard-diagram.jpg";
import jumperWiresImg from "@/assets/jumper-wires.jpg";

const BreadboardPage = () => {
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
                            <Grid3X3 className="h-4 w-4" />
                            Breadboard Basics
                        </div>
                        <h1 className="mb-4 text-display-sm text-foreground md:text-display-md">
                            How to Use a Breadboard
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Learn how to connect electronic parts easily — without soldering.
                        </p>
                    </div>
                </div>
            </section>

            {/* What is a Breadboard */}
            <section className="py-12 md:py-16">
                <div className="container">
                    <SectionHeader
                        icon={Lightbulb}
                        title="What Is a Breadboard?"
                        description="Understanding the most important tool for beginners"
                    />

                    <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6 text-center">
                        <p className="mb-4 text-lg text-foreground">
                            A breadboard lets you connect electronic parts <strong>without soldering</strong>.
                        </p>
                        <p className="text-muted-foreground">
                            You can build, test, change, and rebuild circuits safely and easily.
                            This is why breadboards are perfect for learning Arduino.
                        </p>
                    </div>
                </div>
            </section>

            {/* Parts */}
            <section className="bg-secondary py-12 md:py-16">
                <div className="container">
                    <SectionHeader
                        icon={Wrench}
                        title="Parts You Need"
                        description="Just these simple items"
                    />

                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        <PartCard
                            name="Breadboard"
                            imageSrc={breadboardImg}
                            description="Where you build your circuit"
                        />
                        <PartCard
                            name="Jumper Wires"
                            imageSrc={jumperWiresImg}
                            description="Used to make connections"
                        />
                        <PartCard
                            name="Arduino"
                            imageSrc="src/assets/arduino-uno.jpg"
                            description="Supplies power and control"
                        />
                    </div>
                </div>
            </section>

            {/* How Breadboard Works */}
            <section className="py-12 md:py-16">
                <div className="container">
                    <SectionHeader
                        title="How a Breadboard Works"
                        description="This is the most important part to understand"
                    />

                    <div className="mx-auto max-w-3xl">
                        <div className="mb-6 overflow-hidden rounded-lg border">
                            <img
                                src={breadboardDiagramImg}
                                alt="Breadboard internal connections diagram"
                                className="w-full"
                            />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-lg border bg-card p-4">
                                <h4 className="mb-2 font-semibold text-foreground">Middle Rows</h4>
                                <p className="text-sm text-muted-foreground">
                                    Each group of 5 holes in a row is connected internally.
                                    If two wires are in the same row, they are connected.
                                </p>
                            </div>

                            <div className="rounded-lg border bg-card p-4">
                                <h4 className="mb-2 font-semibold text-foreground">Power Rails (+ / -)</h4>
                                <p className="text-sm text-muted-foreground">
                                    The long side lines are for power.
                                    Red is usually <strong>+5V</strong>, blue is <strong>GND</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step by Step */}
            <section className="bg-secondary py-12 md:py-16">
                <div className="container">
                    <SectionHeader
                        title="Step-by-Step: Using a Breadboard"
                        description="Follow these simple rules every time"
                    />

                    <div className="mx-auto max-w-3xl space-y-4">
                        <StepCard
                            stepNumber={1}
                            title="Place Components Carefully"
                            description="Insert each leg of a component into a different row. Never put both legs in the same row."
                        />

                        <StepCard
                            stepNumber={2}
                            title="Use Rows to Connect"
                            description="To connect two things together, place their wires in the same row."
                        />

                        <StepCard
                            stepNumber={3}
                            title="Use Power Rails for Power"
                            description="Connect Arduino 5V to the red rail and GND to the blue rail."
                        />

                        <StepCard
                            stepNumber={4}
                            title="Double Check Before Powering"
                            description="Always check your connections before plugging in USB power."
                        />
                    </div>
                </div>
            </section>

            {/* Common Mistakes */}
            <section className="py-12 md:py-16">
                <div className="container">
                    <SectionHeader
                        icon={AlertTriangle}
                        title="Common Mistakes & Fixes"
                        description="Almost everyone makes these — it's okay!"
                    />

                    <div className="mx-auto max-w-2xl space-y-4">
                        <MistakeCard
                            mistake="Both legs in the same row"
                            fix="Move one leg to a different row so the component can work."
                        />
                        <MistakeCard
                            mistake="Using wrong power rail"
                            fix="Check that red is connected to 5V and blue to GND."
                        />
                        <MistakeCard
                            mistake="Loose wires"
                            fix="Push wires firmly until they stop moving."
                        />
                    </div>
                </div>
            </section>

            {/* Safety */}
            <section className="bg-secondary py-12 md:py-16">
                <div className="container">
                    <SectionHeader
                        icon={Shield}
                        title="Safety & Confidence"
                        description="You can relax — this is safe"
                    />

                    <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-3">
                        <div className="rounded-lg border bg-card p-4 text-center">
                            <div className="mb-2 text-2xl">⚡</div>
                            <h4 className="font-semibold text-foreground">Low Voltage</h4>
                            <p className="text-sm text-muted-foreground">Only 5V</p>
                        </div>
                        <div className="rounded-lg border bg-card p-4 text-center">
                            <div className="mb-2 text-2xl">👆</div>
                            <h4 className="font-semibold text-foreground">Safe to Touch</h4>
                            <p className="text-sm text-muted-foreground">No shock risk</p>
                        </div>
                        <div className="rounded-lg border bg-card p-4 text-center">
                            <div className="mb-2 text-2xl">🔁</div>
                            <h4 className="font-semibold text-foreground">Reusable</h4>
                            <p className="text-sm text-muted-foreground">Build again & again</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Finish */}
            <section className="py-12 md:py-16">
                <div className="container text-center">
                    <div className="mx-auto max-w-2xl rounded-lg border-2 border-primary bg-accent p-8">
                        <h3 className="mb-2 text-xl font-semibold text-foreground">
                            🎉 You’re Ready!
                        </h3>
                        <p className="mb-6 text-muted-foreground">
                            Now you understand the breadboard — every Arduino project will be easier.
                        </p>

                        <Button asChild>
                            <Link to="/">
                                Go Build a Project
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BreadboardPage;

