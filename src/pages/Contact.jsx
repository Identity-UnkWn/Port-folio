import { useState } from 'react';
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconSend } from '@tabler/icons-react';
import {  StarsBackground } from '../components/ui/Shooting-stars';
import { ShootingStars } from '../components/ui/Stars-background';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch('https://formspree.io/f/xqaeqrdb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully! 🎉');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
  
    <div className='bg-black w-full min-h-screen text-white'>
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>
      <div className='pt-[10%] flex flex-col items-center gap-8 pb-[80px] relative z-10 overflow-x-hidden overflow-y-hidden'>
        {/* <p className='text-[40px] tracking-[8px] font-[700]'>Contact Me</p> */}
        <div className='pt-[80px] xl:pt-0 xl:pl-[200px] md:pl-[200px]'> 
          <div className='w-[300px] xl:w-[600px] md:w-[600px]'>
            <form onSubmit={handleSubmit} className="md:w-2/3 bg-black dark:bg-gray-800 p-8 rounded-xl shadow-[0_0_40px_20px_rgba(168,85,247,0.4)]">
              <div className="space-y-6">
                <div>
                  <label className="block text-[17px] font-medium text-gray-200 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                    placeholder="First Last"
                  />
                </div>

                <div>
                  <label className="block text-[17px] font-medium text-gray-200 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                    placeholder="first@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[17px] font-medium text-gray-200 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                    placeholder="Hey there!..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[rgba(168,85,247,0.4)] hover:bg-[rgba(168,85,247,0.6)] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <IconSend className="h-5 w-5" />
                  Send Message
                </button>

                {status && (
                  <p className={`text-center mt-4 ${
                    status.includes('🎉') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {status}
                  </p>
                )}
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
 );
}