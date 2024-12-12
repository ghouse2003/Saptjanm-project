import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
            alt="Happy couple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl font-bold mb-6">
              Find Your Perfect Match
            </h1>
            <p className="text-xl mb-8">
              Join thousands of happy couples who found their soulmate through HeartMatch.
              Start your journey to lasting love today.
            </p>
            <Link to="/signup">
              <Button size="lg" className="mr-4">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Create Your Profile",
                description: "Tell us about yourself and what you're looking for in a partner."
              },
              {
                icon: Heart,
                title: "Find Matches",
                description: "Our advanced algorithm suggests compatible matches based on your preferences."
              },
              {
                icon: Shield,
                title: "Connect Safely",
                description: "Chat and meet in a secure environment with verified profiles."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center p-6"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-rose-500" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?auto=format&fit=crop&q=80",
                name: "Sarah & John",
                story: "We matched on HeartMatch and got married within a year. It was meant to be!"
              },
              {
                image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80",
                name: "Mike & Lisa",
                story: "HeartMatch helped us find exactly what we were looking for in a partner."
              },
              {
                image: "https://images.unsplash.com/photo-1621784562877-01615a865625?auto=format&fit=crop&q=80",
                name: "David & Emma",
                story: "Thanks to HeartMatch's matching algorithm, we found our perfect match!"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.story}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}