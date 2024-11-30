'use client';

import { useState } from 'react';
import { Shield, Wifi, Battery, Clock, Upload, Check, X } from 'lucide-react';
import { Button } from './components/ui/Button';
import { FeatureCard } from './components/ui/FeatureCard';
import { TestimonialCard } from './components/ui/TestimonialCard';

export const ClientPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'none' | 'success' | 'error'>('none');

  const testimonials = [
    {
      name: "Marco Rossi",
      text: "TechGuard ha rivoluzionato la sicurezza della mia casa. Il controllo remoto è incredibilmente intuitivo.",
      image: "https://via.placeholder.com/64"
    },
    {
      name: "Laura Bianchi",
      text: "Finalmente posso controllare tutti i dispositivi smart da un'unica app. TechGuard è semplicemente geniale.",
      image: "https://via.placeholder.com/64"
    },
    {
      name: "Giuseppe Verdi",
      text: "L'installazione è stata semplicissima e il supporto clienti è sempre disponibile. Ottimo investimento.",
      image: "https://via.placeholder.com/64"
    }
  ];

  const features = [
    {
      title: "Controllo Remoto Avanzato",
      description: "Gestisci la tua casa da qualsiasi luogo con l'app dedicata",
      Icon: Wifi
    },
    {
      title: "Sicurezza 24/7",
      description: "Monitoraggio continuo con notifiche in tempo reale",
      Icon: Shield
    },
    {
      title: "Batteria Longeva",
      description: "Fino a 72 ore di autonomia con backup integrato",
      Icon: Battery
    },
    {
      title: "Aggiornamenti Automatici",
      description: "Software sempre aggiornato con le ultime features",
      Icon: Upload
    },
    {
      title: "Risparmio Energetico",
      description: "Ottimizzazione automatica dei consumi",
      Icon: Clock
    }
  ];

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.querySelector('#features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('none');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Qui andrà la vera chiamata API
      console.log('Form submitted:', { name, email });
      
      setSubmitStatus('success');
      setName('');
      setEmail('');
      
      setTimeout(() => setSubmitStatus('none'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('none'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <div className="font-sans">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  La Sicurezza Smart che Protegge il Tuo Mondo
                </h1>
                <p className="text-xl mb-8">
                  Innovazione e design all'avanguardia per una casa più sicura e connessa.
                </p>
                <Button onClick={scrollToFeatures}>
                  Scopri di Più
                </Button>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="TechGuard Device"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white scroll-mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Caratteristiche Premium</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  Icon={feature.Icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Cosa Dicono i Nostri Clienti</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  text={testimonial.text}
                  image={testimonial.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Resta Aggiornato</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                    required
                    disabled={isSubmitting}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="relative">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                  >
                    Iscriviti Ora
                  </Button>
                  
                  {submitStatus !== 'none' && (
                    <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-lg ${
                      submitStatus === 'success' ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {submitStatus === 'success' ? (
                        <>
                          <Check size={20} />
                          <span>Iscrizione completata!</span>
                        </>
                      ) : (
                        <>
                          <X size={20} />
                          <span>Errore durante l'invio. Riprova.</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2024 TechGuard. Tutti i diritti riservati.</p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Termini di Servizio</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Garanzia</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};