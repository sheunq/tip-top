import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Calendar,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { imageMap } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = imageMap.get("hero-doctors");
  const coreValuesImage = imageMap.get("core-values");
  const visionImage = imageMap.get("vision");
  const missionImage = imageMap.get("mission");
  const mottoImage = imageMap.get("motto");

  const values = [
      {
          title: "Our Core Values",
          description: "Our Value Proposition is high reliability - Getting it right the first time, every time.",
          image: coreValuesImage,
      },
      {
          title: "Our Vision",
          description: "Our Vision is to redefine healthcare in Nigeria.",
          image: visionImage,
      },
      {
          title: "Our Mission",
          description: "Our mission is to provide safe, timely, evidence based and patient centered healthcare.",
          image: missionImage,
      },
      {
          title: "Our Motto",
          description: "Our mission is to provide safe, timely, evidence based and patient centered healthcare.",
          image: mottoImage,
      },
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full h-[70vh] md:h-[80vh]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-top"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
          <div className="relative container h-full flex flex-col items-start justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight max-w-2xl">
              HEALTHCARE YOU CAN TRUST
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-xl text-gray-200">
              Providing compassionate and quality medical services across Nigeria
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/book-appointment">
                  Book an Appointment
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="text-center border-none shadow-none">
                  {value.image && (
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={value.image.imageUrl}
                      alt={value.title}
                      fill
                      className="object-cover"
                      data-ai-hint={value.image.imageHint}
                    />
                  </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-bold text-lg font-headline tracking-wide">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center p-8">
                <div className="text-primary">
                  <Heart className="h-12 w-12" />
                </div>
                <h3 className="mt-4 font-bold text-xl">
                  EMERGENCY CARE
                </h3>
                <p className="text-muted-foreground mt-2">
                  Our emergency services are available 24/7 to provide immediate medical attention.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-8">
                <div className="text-primary">
                  <Calendar className="h-12 w-12" />
                </div>
                <h3 className="mt-4 font-bold text-xl">
                  BOOK APPOINTMENT
                </h3>
                <p className="text-muted-foreground mt-2">
                  Schedule your appointments online at your convenience for a hassle-free experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
