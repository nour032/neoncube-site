export default function StickyMobileCTA({ selectedModel, onPreOrder }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 p-4">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div>
          <p className="font-medium">NeonCube {selectedModel.id}</p>
          <p className="text-sm text-white/70">{selectedModel.price}</p>
        </div>
        <button
          onClick={() => onPreOrder(selectedModel)}
          className="bg-white text-black px-6 py-2 rounded-full font-medium"
        >
          Pre-order now
        </button>
      </div>
    </div>
  );
}