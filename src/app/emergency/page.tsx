import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';

export default function EmergencyPage() {
    return (
        <div className="bg-background">
            <header className="bg-destructive/10 py-16 text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-destructive">Emergency Services</h1>
                    <p className="mt-4 text-lg text-destructive/80 max-w-3xl mx-auto">
                        For urgent medical situations, please use the information below. Our team is ready to assist you 24/7.
                    </p>
                </div>
            </header>

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="md:col-span-2 lg:col-span-3 text-center border-destructive shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-headline text-destructive flex items-center justify-center gap-4">
                                    <PhoneCall className="h-10 w-10" />
                                    <span className="text-3xl md:text-5xl">Emergency Hotline</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a href="tel:08069098086" className="text-4xl md:text-6xl font-bold text-foreground hover:text-destructive transition-colors">
                                    0806 909 8086
                                </a>
                                <p className="mt-2 text-muted-foreground">Available 24 hours a day, 7 days a week.</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-2">
                                    <AlertTriangle className="h-6 w-6 text-primary" />
                                    What to Do
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li>Stay calm and assess the situation.</li>
                                    <li>Call our emergency hotline immediately.</li>
                                    <li>Do not move the person if there is a suspected neck or back injury.</li>
                                    <li>Provide our operator with your location and the nature of the emergency.</li>
                                    <li>Follow any instructions given by the operator.</li>
                                </ul>
                            </CardContent>
                        </Card>
                        
                        <Card>
                             <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-2">
                                    <MapPin className="h-6 w-6 text-primary" />
                                    Directions
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-muted-foreground mb-4'>Our emergency entrance is located at the rear of the main hospital building.</p>
                                <p className='font-semibold text-foreground'>Custom Bus-Stop, 4, Kwaru Way, Off Abaranje Rd</p>
                                <div className='mt-4 h-48 bg-muted rounded-md overflow-hidden'>
                                   <iframe
                                        src="https://maps.google.com/maps?q=Custom%20Bus-Stop%2C%204%2C%20Kwaru%20Way%2C%20Off%20Abaranje%20Rd&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-2">
                                    <ShieldCheck className="h-6 w-6 text-primary" />
                                    In an Emergency
                                </CardTitle>
                            </CardHeader>
                            <CardContent className='text-muted-foreground space-y-2'>
                                <p>Our emergency department is equipped to handle a wide range of critical conditions, including trauma, cardiac events, and acute illnesses.</p>
                                <p>We have dedicated trauma bays, cardiac monitors, and an on-site diagnostic lab to ensure rapid assessment and treatment.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
