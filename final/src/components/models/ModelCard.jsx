export default function ModelCard({ model, onPreOrder }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-colors">
      <img
        src={`/models/${model.id.toLowerCase()}.png`}
        alt={model.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
      <p className="text-white/70 mb-4">{model.description}</p>
      <div className="space-y-2 mb-6">
        {Object.entries(model.specs).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-white/50">{key}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">{model.price}</span>
        <button
          onClick={() => onPreOrder(model)}
          className="bg-neon-blue text-black px-6 py-2 rounded-full font-medium"
        >
          Pre-order
        </button>
      </div>
    </div>
  );
}