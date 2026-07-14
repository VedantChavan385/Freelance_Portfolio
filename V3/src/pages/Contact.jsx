import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Calendar, ArrowRight, Check } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Container from '../components/layout/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';
import { CONTACT_DATA } from '../lib/data/contact';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <PageWrapper>
      <div className="pt-32 pb-20 bg-black relative select-none min-h-screen">
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />

        <Container className="relative z-10 flex flex-col gap-16 sm:gap-20 md:gap-28">
          
          {/* Header */}
          <SectionHeading 
            badge={CONTACT_DATA.badge}
            title={CONTACT_DATA.title}
            subtitle={CONTACT_DATA.subtitle}
            alignment="left"
          />

          {/* Form and Contact Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-zinc-900/60 pt-10 lg:pt-16">
            
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5 w-full"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input
                        label="Your Name"
                        id="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                        error={errors.name}
                      />
                      <Input
                        label="Email Address"
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        error={errors.email}
                      />
                    </div>
                    <Input
                      label="Subject"
                      id="subject"
                      placeholder="Project discussion..."
                      value={form.subject}
                      onChange={handleChange}
                      required
                      error={errors.subject}
                    />
                    <Textarea
                      label="Message"
                      id="message"
                      placeholder="Describe your idea or request..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      error={errors.message}
                    />
                    
                    <div className="self-start mt-2">
                      <Button type="submit">
                        Send Message
                      </Button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#101010] border border-zinc-900/40 rounded-2xl p-8 text-center flex flex-col items-center gap-5 justify-center min-h-[350px]"
                  >
                    <div className="bg-primary/10 border border-primary/20 rounded-full w-14 h-14 flex items-center justify-center">
                      <Check className="text-primary w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-[#E1E0CC] font-semibold text-lg sm:text-xl tracking-tight">Message Sent Successfully!</h4>
                      <p className="text-gray-400 font-light text-xs sm:text-sm max-w-sm leading-relaxed">
                        Thank you for reaching out. I have received your request and will get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary text-xs sm:text-sm font-semibold hover:underline mt-2 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Contact info / availability (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Availability Glowing Status */}
              <div className="flex items-center gap-3.5 bg-[#101010] p-5 rounded-xl border border-zinc-900/40 select-none">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  {CONTACT_DATA.availability.status}
                </span>
              </div>

              {/* Direct Info */}
              <div className="flex flex-col gap-4 bg-[#101010] p-6 rounded-xl border border-zinc-900/40 select-none">
                <h4 className="text-[#E1E0CC] font-semibold text-sm tracking-tight border-b border-zinc-900 pb-3 uppercase tracking-wider text-[10px] text-gray-500">Direct Info</h4>
                
                <a href={`mailto:${CONTACT_DATA.email}`} className="flex items-center gap-3 group text-gray-400 hover:text-primary transition-colors text-xs sm:text-sm">
                  <Mail className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                  <span>{CONTACT_DATA.email}</span>
                </a>
                
                {CONTACT_DATA.phone && (
                  <a href={`tel:${CONTACT_DATA.phone}`} className="flex items-center gap-3 group text-gray-400 hover:text-primary transition-colors text-xs sm:text-sm">
                    <Phone className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                    <span>{CONTACT_DATA.phone}</span>
                  </a>
                )}

                <div className="flex items-center gap-3 text-gray-400 text-xs sm:text-sm">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>{CONTACT_DATA.availability.timezone} • Replies {CONTACT_DATA.availability.responseTime}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex flex-col gap-4 bg-[#101010] p-6 rounded-xl border border-zinc-900/40 select-none">
                <h4 className="text-[#E1E0CC] font-semibold text-sm tracking-tight border-b border-zinc-900 pb-3 uppercase tracking-wider text-[10px] text-gray-500">Social Connections</h4>
                
                <div className="flex flex-col gap-2">
                  {CONTACT_DATA.socials.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between text-gray-400 hover:text-primary transition-colors py-1 group/link text-xs sm:text-sm"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 text-gray-500 group-hover/link:text-primary transition-all group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Contact FAQ accordion */}
          <div className="flex flex-col gap-12 sm:gap-16 border-t border-zinc-900/60 pt-12 md:pt-16 w-full">
            <SectionHeading 
              badge="FAQ"
              title="Collaboration Q&A"
              subtitle="Common questions regarding project starts, pricing structures, and deliveries."
              alignment="center"
            />
            <FAQ items={CONTACT_DATA.faqs} />
          </div>

        </Container>
      </div>

      <CTA />
    </PageWrapper>
  );
}
