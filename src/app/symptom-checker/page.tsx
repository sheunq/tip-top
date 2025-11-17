import { Lightbulb } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { SymptomCheckerForm } from '@/components/symptom-checker-form';

export default function SymptomCheckerPage() {
    return (
        <>
            <header className="bg-primary/10 py-16">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                        AI-Powered Symptom Checker
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Enter your symptoms to get AI-driven insights on potential conditions and relevant specialists.
                    </p>
                </div>
            </header>

            <div className="container py-12 md:py-16">
                <div className="max-w-3xl mx-auto">
                    <Alert className="mb-8 bg-accent/30">
                        <Lightbulb className="h-4 w-4" />
                        <AlertTitle>For Informational Purposes Only</AlertTitle>
                        <AlertDescription>
                            This tool does not provide medical advice. It is intended for informational purposes only. Consult with a medical professional for diagnosis and treatment.
                        </AlertDescription>
                    </Alert>
                    
                    <SymptomCheckerForm />
                </div>
            </div>
        </>
    );
}
