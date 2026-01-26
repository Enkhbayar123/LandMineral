// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 text-slate-400">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
            <h4 className="text-white font-bold text-lg">LAND MINERAL GROUP</h4>
            <p className="text-sm">Powering global infrastructure.</p>
        </div>
        <div className="text-sm">
            &copy; {new Date().getFullYear()} Land Mineral Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;