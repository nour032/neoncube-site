import { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Models from '../components/Models/Models';
import Gallery from '../components/Gallery/Gallery';
import Specs from '../components/Specs/Specs';
import Testimonial from '../components/Testimonial/Testimonial';
import FAQ from '../components/FAQ/FAQ';
import PreOrderModal from '../components/Modal/PreOrderModal';
import StickyMobileCTA from '../components/StickyMobileCTA/StickyMobileCTA';
import Footer from '../components/Footer/Footer';
import { MODELS } from '../constants/models';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);

  const handlePreOrder = (model) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Hero onPreOrder={handlePreOrder} />
      <Models onPreOrder={handlePreOrder} />
      <Gallery />
      <Specs />
      <Testimonial />
      <FAQ />
      <Footer />
      
      <StickyMobileCTA 
        selectedModel={selectedModel || MODELS.S}
        onPreOrder={handlePreOrder}
      />
      
      <PreOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        model={selectedModel?.id}
      />
    </div>
  );
}