export default function Specs() {
  const specs = [
    {
      title: 'Materials',
      items: [
        'Aircraft-grade aluminum chassis',
        'Chrome-plated exterior panels',
        'Tempered glass side panel',
        'LED-diffused acrylic accents',
      ],
    },
    {
      title: 'Thermals',
      items: [
        'Vapor chamber cooling',
        'Silent 140mm fans',
        'Custom water cooling loop',
        'Thermal compound pre-applied',
      ],
    },
    {
      title: 'Connectivity',
      items: [
        'Thunderbolt 4 ports',
        'USB 3.2 Gen 2 Type-C',
        'Wi-Fi 6E',
        '2.5 Gigabit Ethernet',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Technical Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {specs.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-semibold text-neon-blue">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-neon-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}