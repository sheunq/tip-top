import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';

export default function ServicesPage() {
    return (
        <div className="bg-background">
            <header className="bg-primary/10 py-16 text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Medical Services</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Comprehensive, compassionate, and cutting-edge care across a wide range of specialties.
                    </p>
                </div>
            </header>

            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Card key={service.name} className="flex flex-col text-center hover:shadow-xl transition-shadow duration-300">
                                    <CardHeader className="items-center">
                                        <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                                            <Icon className="h-10 w-10" />
                                        </div>
                                        <CardTitle className="font-headline">{service.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
