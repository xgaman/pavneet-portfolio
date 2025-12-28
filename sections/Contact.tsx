
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Signal intercepted! Message received.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-12">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-orbitron font-bold text-white">
              Establish <span className="text-cyan-400">Connection</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Open for collaborations, opportunities, or just a deep dive into computer engineering topics.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center border-gray-800 group-hover:border-cyan-500 transition-colors shadow-lg shadow-cyan-500/0 group-hover:shadow-cyan-500/20">
                <Mail className="text-cyan-400" size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold">Email</h4>
                <p className="text-gray-400">pavneet.kour@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center border-gray-800 group-hover:border-purple-500 transition-colors shadow-lg shadow-purple-500/0 group-hover:shadow-purple-500/20">
                <Linkedin className="text-purple-400" size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold">LinkedIn</h4>
                <p className="text-gray-400">linkedin.com/in/pavneet-kour</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 glass rounded-full flex items-center justify-center border-gray-800 group-hover:border-pink-500 transition-colors shadow-lg shadow-pink-500/0 group-hover:shadow-pink-500/20">
                <Github className="text-pink-400" size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold">GitHub</h4>
                <p className="text-gray-400">github.com/pavneetkour</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-8 rounded-2xl border-cyan-500/20 relative"
        >
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-orbitron text-gray-500 uppercase tracking-widest">Identification</label>
              <input 
                type="text" 
                placeholder="Name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-orbitron text-gray-500 uppercase tracking-widest">Protocol Address</label>
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-orbitron text-gray-500 uppercase tracking-widest">Data Packet</label>
              <textarea 
                rows={5} 
                placeholder="Your Message" 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-3 group"
            >
              Transmit Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
