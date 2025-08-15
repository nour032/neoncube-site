export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src="/logo.svg"
              alt="NeonCube"
              className="h-8"
            />
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-white/50 hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/50 hover:text-white">
              Terms of Service
            </a>
            <a href="/support" className="text-white/50 hover:text-white">
              Support
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-white/30">
          <p>&copy; {currentYear} NeonCube. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}