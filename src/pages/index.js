import React from 'react';
// Layout
import MainLayout from '../layouts/MainLayout';
import HomeHero from '@/sections/HomeHero';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

export default function Home() {
  const meta = (
    <>
      <title>My Portfolio</title>
    </>
  );

  return (
    <MainLayout meta={meta}>

      <HomeHero/>
      <Skills/>
      <Projects/>
      <Contact/>
    
    </MainLayout>
  );
}
