"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { BrainCircuit, Loader2, UserCheck } from 'lucide-react';

import { aiSymptomChecker, AISymptomCheckerOutput } from '@/ai/flows/ai-symptom-checker';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  symptoms: z.string().min(10, {
    message: "Please describe your symptoms in at least 10 characters.",
  }),
});

export function SymptomCheckerForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AISymptomCheckerOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      symptoms: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await aiSymptomChecker(values);
      setResult(response);
    } catch (error) {
      console.error("Error calling AI symptom checker:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Could not get results from the AI. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
            <CardTitle className="font-headline">Describe Your Symptoms</CardTitle>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="symptoms"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Symptoms</FormLabel>
                        <FormControl>
                        <Textarea
                            placeholder="e.g., 'I have a persistent headache, fever, and a runny nose.'"
                            className="min-h-[120px]"
                            {...field}
                        />
                        </FormControl>
                        <FormDescription>
                        Be as detailed as possible for the best results.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                    </>
                    ) : 'Check Symptoms'}
                </Button>
                </form>
            </Form>
        </CardContent>
      </Card>
      
      {isLoading && (
        <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">Our AI is analyzing your symptoms. This may take a moment...</p>
        </div>
      )}

      {result && (
        <div className="mt-12 space-y-8">
            <h2 className='text-center text-3xl font-bold font-headline'>Analysis Results</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           <BrainCircuit className="text-primary" />
                           Potential Conditions
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                            {result.conditions.map((condition, index) => (
                                <li key={index}>{condition}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                 <Card className="border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           <UserCheck className="text-primary" />
                           Relevant Specialists
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                            {result.relevantSpecialists.map((specialist, index) => (
                                <li key={index}>{specialist}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      )}
    </>
  );
}
