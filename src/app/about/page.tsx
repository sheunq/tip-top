import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { doctors } from '@/lib/data';
import { imageMap } from '@/lib/placeholder-images';
import { Award, Building, HeartHandshake, Target } from 'lucide-react';

export default function AboutPage() {
    const teamImage = imageMap.get('about-team');
    const facilitiesImage = imageMap.get('facilities');
    const leadership = doctors.slice(0, 4);

    return (
        <div className="bg-background">
            <header className="bg-primary/10 py-16 text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">About TIP-TOP SOLUTION HOSPITAL</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Learn about our journey, our values, and the people dedicated to your health.
                    </p>
                </div>
            </header>

            <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold font-headline text-primary">Our Story</h2>
                        <p className="mt-4 text-muted-foreground">
                            Founded in 2010, TIP-TOP SOLUTION HOSPITAL began as a small community clinic with a big vision: to provide accessible, high-quality healthcare to all Nigerians. From our humble beginnings, we have grown into a leading multi-specialty hospital, driven by a passion for excellence and a deep-seated commitment to our patients.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Over the years, we have continuously invested in advanced medical technology and attracted some of the nation's finest medical talent. Our journey is one of growth, innovation, and unwavering dedication to the health and well-being of the communities we serve.
                        </p>
                    </div>
                    {teamImage && (
                        <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                        <Image src={teamImage.imageUrl} alt={teamImage.description} fill className="object-cover" data-ai-hint={teamImage.imageHint}/>
                        </div>
                    )}
                </div>
            </section>

            <section className="py-16 md:py-24 bg-card">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                                <Target className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-headline">Our Mission</h3>
                                <p className="mt-2 text-muted-foreground">To deliver compassionate, patient-centered healthcare of the highest quality, utilizing cutting-edge technology and a team of dedicated professionals.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                                <HeartHandshake className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-headline">Our Vision</h3>
                                <p className="mt-2 text-muted-foreground">To be Nigeria's most trusted healthcare provider, renowned for clinical excellence, innovative practices, and a profound commitment to community well-being.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-card">
                 <div className="container grid md:grid-cols-2 gap-12 items-center">
                    {facilitiesImage && (
                        <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg order-last md:order-first">
                        <Image src={facilitiesImage.imageUrl} alt={facilitiesImage.description} fill className="object-cover" data-ai-hint={facilitiesImage.imageHint}/>
                        </div>
                    )}
                    <div>
                        <h2 className="text-3xl font-bold font-headline text-primary">Our Facilities</h2>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="text-primary"><Building className="h-6 w-6 mt-1" /></div>
                                <div>
                                    <h4 className="font-semibold">State-of-the-Art Infrastructure</h4>
                                    <p className="text-sm text-muted-foreground">A modern, 200-bed facility designed for patient comfort and safety.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <div className="text-primary"><Award className="h-6 w-6 mt-1" /></div>
                                <div>
                                    <h4 className="font-semibold">Accreditations & Affiliations</h4>
                                    <p className="text-sm text-muted-foreground">Fully accredited by the Medical and Dental Council of Nigeria (MDCN) and affiliated with leading international health organizations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
