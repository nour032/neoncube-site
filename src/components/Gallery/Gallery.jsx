import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    {
      src: '/gallery/detail-1.png',
      alt: 'NeonCube Chrome Detail',
      caption: 'Seamless chrome panels',
    },
    {
      src: '/gallery/detail-2.png',
      alt: 'NeonCube Blue Neon',
      caption: 'Signature blue neon seams',
    },
    {
      src: '/gallery/detail-3.png',
      alt: 'NeonCube Floating Design',
      caption: 'Floating pedestal design',
    },
  ];

  return (
    <section className="py-20 bg-dark-bg/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Craftsmanship</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                <p className="absolute bottom-4 left-4 text-lg font-medium">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}