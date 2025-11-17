import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="bg-background">
            <header className="bg-primary/10 py-16 text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Get In Touch</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        We&apos;re here to help. Whether you have a question about our services or need assistance, feel free to reach out.
                    </p>
                </div>
            </header>

            <section className="py-16 md:py-24">
                <div className="container grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                         <ContactForm />
                    </div>
                    <div className='space-y-8'>
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-2">
                                    <MapPin className="h-6 w-6 text-primary" />
                                    Our Location
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                <p>Custom Bus-Stop, 4, Kwaru Way,</p>
                                <p>Off Abaranje Rd</p>
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
                                    <Phone className="h-6 w-6 text-primary" />
                                    Contact Numbers
                                 </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-muted-foreground">
                                <p><span className='font-semibold text-foreground'>Emergency:</span> 0806 909 8086</p>
                                <p><span className='font-semibold text-foreground'>Appointments:</span> 0806 909 8086</p>
                                <p><span className='font-semibold text-foreground'>General Info:</span> 0806 909 8086</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-2">
                                    <Mail className="h-6 w-6 text-primary" />
                                    Email Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                <p>tiptopsolutionhospital@gmail.com</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
