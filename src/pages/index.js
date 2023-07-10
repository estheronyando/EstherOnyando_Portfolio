import React from 'react';
// Layout
import MainLayout from '../layouts/MainLayout';
import HomeHero from '@/sections/HomeHero';

export default function Home() {
  const meta = (
    <>
      <title>First React App</title>
    </>
  );

  return (
    <MainLayout meta={meta}>

      <HomeHero/>
    
    </MainLayout>
  );
}
