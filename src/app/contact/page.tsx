'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useToast } from '@/components/ui/Toast';
import {
  HiEnvelope,
  HiGlobeAlt,
  HiClock,
  HiCheckCircle,
  HiArrowTopRightOnSquare,
  HiQuestionMarkCircle,
} from 'react-icons/hi2';

export default function ContactPage() {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) {
      toast('Please fill out all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast('Thank you! Your message has been sent successfully.');
    }, 600);
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#FBFBFB] py-12 md:py-16 text-[#262626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Card */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-10 mb-8 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-semibold uppercase tracking-widest mb-4">
              <HiEnvelope size={14} />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3">
              Contact Us &amp; Support
            </h1>
            <p className="text-sm text-[#595959] leading-relaxed max-w-2xl">
              Have a question about our resume templates, feature suggestions, partnership inquiry, or technical feedback? We’d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Left Column: Direct Info */}
            <div className="space-y-4">
              {/* Primary Email */}
              <div className="bg-white border border-[#E5E5E5] p-6 shadow-xs">
                <div className="flex items-center gap-2 text-black font-bold text-sm mb-1">
                  <HiEnvelope size={17} /> Email Us
                </div>
                <p className="text-xs text-[#595959] mb-3">Direct inbox for general inquiries and feedback:</p>
                <a
                  href="mailto:hello@tooleka.com"
                  className="text-xs font-semibold text-black underline hover:text-neutral-600 break-all"
                >
                  hello@tooleka.com
                </a>
              </div>

              {/* Main ToolEka Hub Link */}
              <div className="bg-white border border-[#E5E5E5] p-6 shadow-xs">
                <div className="flex items-center gap-2 text-black font-bold text-sm mb-1">
                  <HiGlobeAlt size={17} /> ToolEka Network
                </div>
                <p className="text-xs text-[#595959] mb-3">
                  You can also contact our parent portal or explore our suite of online developer &amp; productivity tools:
                </p>
                <a
                  href="https://tooleka.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black border border-[#E5E5E5] px-3 py-1.5 hover:bg-[#F7F7F7] transition-colors"
                >
                  Visit tooleka.com <HiArrowTopRightOnSquare size={13} />
                </a>
              </div>

              {/* Response Time */}
              <div className="bg-white border border-[#E5E5E5] p-6 shadow-xs">
                <div className="flex items-center gap-2 text-black font-bold text-sm mb-1">
                  <HiClock size={17} /> Response Time
                </div>
                <p className="text-xs text-[#595959] leading-relaxed">
                  We typically respond within <strong>24 to 48 hours</strong> during business days (Monday &ndash; Friday).
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="md:col-span-2 bg-white border border-[#E5E5E5] p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg font-bold text-black border-b border-[#E5E5E5] pb-3 mb-6">
                Send Us a Direct Message
              </h2>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <HiCheckCircle size={28} />
                  </div>
                  <h3 className="text-base font-bold text-black">Message Sent!</h3>
                  <p className="text-xs text-[#595959] max-w-sm mx-auto">
                    Thank you for contacting ToolEka. We have received your inquiry and will follow up with you at <strong>{email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                      setSubject('');
                    }}
                    className="mt-4 px-4 py-2 bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Name *"
                      placeholder="e.g. Alex Johnson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <Input
                      label="Email Address *"
                      type="email"
                      placeholder="e.g. alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <Input
                    label="Subject (Optional)"
                    placeholder="e.g. Feature request / Bug report / Question"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />

                  <Textarea
                    label="Your Message *"
                    placeholder="Describe your inquiry, issue, or feedback in detail..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    required
                  />

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#737373]">* Required fields</span>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      loading={isSubmitting}
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Quick FAQ Strip */}
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-8 shadow-xs">
            <h2 className="text-base font-bold text-black flex items-center gap-2 mb-4">
              <HiQuestionMarkCircle size={18} /> Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#595959] leading-relaxed">
              <div>
                <strong className="text-black block mb-1">Is my resume saved on your servers?</strong>
                No. All draft data is stored strictly in your browser&apos;s local storage. If you switch computers or clear your browser history, your resume draft will be reset. Be sure to use &ldquo;Export JSON&rdquo; to create a backup file!
              </div>
              <div>
                <strong className="text-black block mb-1">Is there any fee to download?</strong>
                No. ToolEka is 100% free with zero watermarks and no credit card required.
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
