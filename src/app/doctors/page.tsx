import Image from 'next/image';
import Link from 'next/link';
import { Award, Languages, Stethoscope } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { doctors } from '@/lib/data';
import { imageMap } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';

export default function DoctorsPage() {
  return (
    <div className="bg-background">
      <header className="bg-primary/10 py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Meet Our Specialists
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Find the right expert for your health needs from our team of
            dedicated and experienced doctors.
          </p>
          <div className="mt-8 max-w-lg mx-auto">
            <Input 
                type="search" 
                placeholder="Search by name, specialty, or department..."
                className="w-full text-base py-6"
            />
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => {
              const doctorImage = imageMap.get(doctor.image);
              return (
                <Card key={doctor.id} className="flex flex-col">
                  <CardHeader className="flex-row gap-4 items-start">
                    {doctorImage && (
                      <div className="relative h-24 w-24 rounded-lg overflow-hidden flex-shrink-0">
                         <Image
                            src={doctorImage.imageUrl}
                            alt={doctor.name}
                            fill
                            className="object-cover"
                            data-ai-hint={doctorImage.imageHint}
                        />
                      </div>
                    )}
                    <div className="flex-grow">
                        <CardTitle className="font-headline text-2xl">{doctor.name}</CardTitle>
                        <CardDescription className="text-primary font-semibold">{doctor.specialty}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4 text-sm">
                     <div className='flex items-start gap-2 text-muted-foreground'>
                        <Award className='h-4 w-4 mt-1 shrink-0'/>
                        <span>{doctor.qualifications.join(", ")}</span>
                     </div>
                      <div className='flex items-start gap-2 text-muted-foreground'>
                        <Stethoscope className='h-4 w-4 mt-1 shrink-0'/>
                        <span>{doctor.experience}</span>
                     </div>
                      <div className='flex items-start gap-2 text-muted-foreground'>
                        <Languages className='h-4 w-4 mt-1 shrink-0'/>
                         <span>{doctor.languages.join(", ")}</span>
                     </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/book-appointment?doctor=${doctor.id}`}>
                        Book Appointment
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
