import { useState } from 'react';

export default function PreOrderModal({ model, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    model: model,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/XXXXXXX", {
        method: "POST",
        body: new FormData(e.target)
      });
      
      if (response.ok) {
        alert("Thanks! We'll reach out within 24 hours.");
        onClose();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert("Submission failed. Please email us instead.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Pre-order NeonCube {model}</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="model" value={model} />
          
          <div className="space-y-4">
            <input
              required
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
            />
            
            <input
              required
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
            />
            
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
            />
            
            <input
              required
              type="text"
              name="city"
              placeholder="Delivery City"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
            />
          </div>
          
          <div className="mt-6 flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-400 to-cyan-300 text-black font-semibold py-3 px-6 rounded-lg"
            >
              Submit Pre-order
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-white/10 rounded-lg hover:bg-white/5"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}