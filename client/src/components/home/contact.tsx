import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(data);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you shortly.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Contact Us" 
          subtitle="Let's build your next integration milestone."
          light
        />
        
        <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-6 font-heading">Send Us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-secondary" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-white mb-6 font-heading">Get in Touch</h3>
              
              <div className="space-y-8 text-white">
                <div className="flex items-start">
                  <div className="text-accent mr-4 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Visit Us</h4>
                    <p>106 Spirit of Communications Center, Carlos Palanca Jr., San Lorenzo, Makati City</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent mr-4 mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Call Us</h4>
                    <p>(02) 8817-3158</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent mr-4 mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Email Us</h4>
                    <p>Admin@gauntlet.ph</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-xl font-medium mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-accent hover:bg-white hover:text-accent w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-accent hover:bg-white hover:text-accent w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-accent hover:bg-white hover:text-accent w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
