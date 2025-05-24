'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeading } from '@/components/shared/section-heading';
import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send, Loader2 } from 'lucide-react';
import type { Metadata } from 'next';

// Cannot export Metadata from client component. Move to parent or make server component.
// For now, this will be a client component and metadata can be in a parent route or a `head.tsx` if needed.
// export const metadata: Metadata = {
//   title: 'Contact - Archiblog',
//   description: 'Get in touch with Archiblog for collaborations, inquiries, or to discuss AI projects.',
// };

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
         <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

export default function ContactPage() {
  const { toast } = useToast();
  const [state, formAction] = useFormState<ContactFormState, FormData>(submitContactForm, {
    message: '',
    success: false,
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        form.reset(); // Reset form on success
      } else {
        toast({
          title: 'Error',
          description: state.message || 'An error occurred.',
          variant: 'destructive',
        });
      }
    }
  }, [state, toast, form]);
  
  // Update react-hook-form errors from server action
  useEffect(() => {
    if (state.errors?.name) form.setError('name', { type: 'server', message: state.errors.name.join(', ') });
    if (state.errors?.email) form.setError('email', { type: 'server', message: state.errors.email.join(', ') });
    if (state.errors?.message) form.setError('message', { type: 'server', message: state.errors.message.join(', ') });
  }, [state.errors, form]);


  return (
    <div className="space-y-12">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind, a question, or just want to connect? I'd love to hear from you. Fill out the form below or reach out via my professional channels."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Send a Message</CardTitle>
            <CardDescription>I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  {...form.register('name')}
                  className="mt-1"
                  aria-invalid={form.formState.errors.name ? "true" : "false"}
                />
                {form.formState.errors.name && (
                  <p className="mt-1 text-sm text-destructive">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register('email')}
                  className="mt-1"
                  aria-invalid={form.formState.errors.email ? "true" : "false"}
                />
                {form.formState.errors.email && (
                  <p className="mt-1 text-sm text-destructive">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={6}
                  {...form.register('message')}
                  className="mt-1"
                  aria-invalid={form.formState.errors.message ? "true" : "false"}
                />
                {form.formState.errors.message && (
                  <p className="mt-1 text-sm text-destructive">{form.formState.errors.message.message}</p>
                )}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> contact@archiblog.example.com</p>
              <p><strong>LinkedIn:</strong> linkedin.com/in/ai-architect-example</p>
              <p>Feel free to connect on professional networks.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
