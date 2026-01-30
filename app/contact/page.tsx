"use client";

import { useState } from "react";
import { Section } from "@/components/marketing/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Left: form */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Contact Us
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-slate-600">
            Have questions about CaseScribe? Want to discuss enterprise pricing
            or integrations? We&apos;d love to hear from you.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
              <Send className="mx-auto h-8 w-8 text-green-600" />
              <h3 className="mt-3 text-lg font-semibold text-green-900">
                Message Sent
              </h3>
              <p className="mt-2 text-sm text-green-700">
                Thank you for reaching out. We&apos;ll get back to you within one
                business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-8 space-y-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Jane"
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Smith"
                    required
                    className="mt-1.5"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@lawfirm.com"
                  required
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="firm">Firm Name</Label>
                <Input
                  id="firm"
                  placeholder="Your law firm"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your practice and how we can help..."
                  rows={5}
                  required
                  className="mt-1.5"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>

        {/* Right: contact info */}
        <div className="space-y-8 lg:mt-16">
          <div className="rounded-xl border bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Other Ways to Reach Us
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-slate-600">hello@casescribe.ai</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-slate-600">Available during demos</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                <span className="text-slate-600">
                  Orlando, Florida
                  <br />
                  United States
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-lg font-semibold text-blue-900">
              Prefer a Live Demo?
            </h3>
            <p className="mt-2 text-sm text-blue-700">
              Book a 30-minute personalized walkthrough of CaseScribe.
            </p>
            <Button className="mt-4" variant="outline" asChild>
              <a href="/demo">Book a Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
