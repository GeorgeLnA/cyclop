import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-4CAF50 mr-3" />
              <h3 className="text-2xl font-bold text-white">TACTICAL SYSTEMS</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading provider of military-grade equipment and tactical solutions for defense, 
              law enforcement, and security professionals worldwide. Mission-critical reliability 
              when failure is not an option.
            </p>
            <div className="flex space-x-4">
              <div className="text-black px-4 py-2 rounded text-sm font-bold">
                ISO 9001
              </div>
              <div className="text-white px-4 py-2 rounded text-sm font-bold">
                ITAR COMPLIANT
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">QUICK ACCESS</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-4CAF50 transition-colors">Product Catalog</a></li>
              <li><a href="#" className="hover:text-4CAF50 transition-colors">Technical Specs</a></li>
              <li><a href="#" className="hover:text-4CAF50 transition-colors">Support Portal</a></li>
              <li><a href="#" className="hover:text-4CAF50 transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-4CAF50 transition-colors">Warranty Info</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">TACTICAL COMMAND</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-4CAF50 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-4CAF50 mr-3" />
                <span>ops@tacticalequip.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-4CAF50 mr-3" />
                <span>Fort Defense, VA 22101</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Tactical Systems. All rights reserved. Unauthorized access prohibited.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-4CAF50 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-4CAF50 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-4CAF50 text-sm transition-colors">
                Export Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;