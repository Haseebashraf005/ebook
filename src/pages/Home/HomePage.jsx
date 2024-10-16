import React from 'react'
import { Hero } from './components/Hero'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { useTitle } from '../../hook/useTitle'

export const HomePage = () => {
  useTitle("Home")
  return (
    <>
      <Hero />
      <FeaturedProducts/>
      <Testimonials/>
      <Faq/>
    </>
  )
}
