import React from "react";
import Hero from "@/app/components/Home/Hero";
import Programs from "@/app/components/Home/Programs";
import Testimonial from "@/app/components/Home/Testimonials";
import ContactForm from "@/app/components/ContactForm";
import Register from "@/app/components/Home/Register";
import AnimatedSection from "@/app/components/Common/AnimatedSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloome - Bimbel Kampus Impian",
};

export default function Home() {
  return (
    <main>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Programs />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <Testimonial />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <ContactForm/>
      </AnimatedSection>
      <AnimatedSection delay={0.8}>
        <Register />
      </AnimatedSection>
    </main>
  );
}