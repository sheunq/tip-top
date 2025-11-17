import { AppointmentForm } from "@/components/appointment-form";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function BookAppointmentPage() {
    return (
        <>
            <header className="bg-primary/10 py-16">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                        Book an Appointment
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Schedule your visit with one of our specialists. It&apos;s fast, easy, and convenient.
                    </p>
                </div>
            </header>

            <div className="container py-12 md:py-16">
                <div className="max-w-3xl mx-auto">
                   <Suspense fallback={<Skeleton className="h-[700px] w-full" />}>
                        <AppointmentForm />
                   </Suspense>
                </div>
            </div>
        </>
    );
}
