import React, { useState } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Globe,
  Mail,
  Github,
  Facebook
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from "@emailjs/browser";

const api = 'https://nano-fk4q.onrender.com'

const sites = [
  {
    title: "E-Commerce",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=500",
    url: "https://shop-project.onirtech.com/"
  },
  {
    title: "Portfolio",
    image: "https://scontent.ftnr3-1.fna.fbcdn.net/v/t39.30808-1/473115975_910038694663984_4863475761521856850_n.jpg?stp=c0.0.1066.1066a_dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_ohc=P1I8rMWrBVkQ7kNvgHitDQL&_nc_oc=AdgipNzUy9mCLNsbYnV2KAM0n7_2rYAbofIaq6oFlQd6lj-LItKMWjNJc4vtCeEzFZY&_nc_zt=24&_nc_ht=scontent.ftnr3-1.fna&_nc_gid=AdZNC1MVv06Zr-s6KiJ160Y&oh=00_AYD9ejzJrL3A7SNDhpXEqujblbDqAcOJMX9Gu_y4-9F1ZQ&oe=67C3AAD8",
    url: "https://fabrich.vercel.app"
  },
  {
    title: "Landing page",
    image: api+"/ghost.png",
    url: api+"/"
  }
];

const carouselImages = [
  "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=800",
  "/1.png",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800",
  "/2.png",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
  "/3.png",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800"
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [email, setEmail] = useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement EmailJS integration here
    console.log('Subscribe:', email);
    const templateParams = {
      user_email: email,
      app_name: "Nano",
    };

    emailjs
      .send("service_erxgbwh", "template_wmpd0l9", templateParams, "C-5EKvRey2-TwNGR2")
      .then(
        () => {
          toast.success("send !");
          (e.target as EventTarget & HTMLFormElement).reset();
          setEmail('');
        },
        () => {
          toast.error("failed !");
          (e.target as EventTarget & HTMLFormElement).reset();
          setEmail('');
        }
      );
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement contact form submission here
    // Récupérer les données du formulaire
    const formData = new FormData(e.target as HTMLFormElement);
    const formObject: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      formObject[key] = value as string;
    });

    // Ajouter des valeurs hors formulaire
    formObject["app_name"] = "Nano";

    emailjs
      .send("service_erxgbwh", "template_zqmjxft", formObject, "C-5EKvRey2-TwNGR2")
      .then(
        () => {
          toast.success("sent !");
          (e.target as EventTarget & HTMLFormElement).reset();
        },
        () => {
          toast.error("echec ");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Toaster />
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* <Code2 className="h-8 w-8 text-purple-500" /> */}
              <img src={api+"/ghost.png"} alt="" className='w-8 h-8' />
              <span className="ml-2 text-xl font-bold font-mono">Nano</span>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#home" className="hover:text-purple-400">Home</a>
                <a href="#zip-deploy" className="hover:text-purple-400">ZIP Deploy</a>
                <a href="#editor-deploy" className="hover:text-purple-400">Editor Deploy</a>
                <a href="#examples" className="hover:text-purple-400">Examples</a>
                <a target="_blank" href={api + '/app'} className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
                  Start Demo
                </a>
                <a target="_blank" href={api + '/login'} className="border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-900/50">
                  Admin
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 hover:bg-purple-900/50 rounded-md">Home</a>
              <a href="#zip-deploy" className="block px-3 py-2 hover:bg-purple-900/50 rounded-md">ZIP Deploy</a>
              <a href="#editor-deploy" className="block px-3 py-2 hover:bg-purple-900/50 rounded-md">Editor Deploy</a>
              <a href="#examples" className="block px-3 py-2 hover:bg-purple-900/50 rounded-md">Examples</a>
              <a target='_blank' href={api + '/app'} className="block w-full text-left px-3 py-2 bg-purple-600 rounded-md">Start Demo</a>
              <a target='_blank' href={api + '/login'} className="block w-full text-left px-3 py-2 border border-purple-500 rounded-md">Admin</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Deploy Your Site in Seconds
              </h1>
              <p className="mt-6 text-gray-300 text-lg">
                Experience lightning-fast deployments a <span className='text-purple-400'>single page site</span> with our intuitive platform.
                Whether you're deploying via ZIP or using our online editor, we've got you covered.
              </p>
              <a target="_blank" href={api + '/app'} className="w-max mt-8 bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 flex items-center">
                Get Started <ChevronRight className="ml-2" />
              </a>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 z-10"></div>
              {carouselImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Interface ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ZIP Deployment Section */}
      <section id="zip-deploy" className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-400">ZIP Deployment</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-purple-400">1</div>
                  <p className="ml-3">Prepare your web application files</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-purple-400">2</div>
                  <p className="ml-3">Compress them into a ZIP file</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-purple-400">3</div>
                  <p className="ml-3">Upload to our platform</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-purple-400">4</div>
                  <p className="ml-3">Your site is live instantly!</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg"></div>
              <img
                src="/2.png"
                alt="ZIP Deployment"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editor Deployment Section */}
      <section id="editor-deploy" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg"></div>
              <img
                src="/3.png"
                alt="Editor Deployment"
                className="rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-purple-400">Editor Deployment</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-purple-400">1</div>
                  <p className="ml-3">Open our online code editor</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-purple-400">2</div>
                  <p className="ml-3">Write or paste your code</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-purple-400">3</div>
                  <p className="ml-3">Preview your changes in real-time</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-purple-400">4</div>
                  <p className="ml-3">Deploy with one click!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Sites Section */}
      <section id="examples" className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Example Sites</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sites.map((site, index) => (
              <a
                target='_blank'
                key={index}
                href={site.url}
                className="group relative rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <img src={site.image} alt={site.title} className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold group-hover:text-purple-400">{site.title}</h3>
                  <p className="text-gray-300">View Site <ChevronRight className="inline h-4 w-4" /></p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-purple-400">Support Our Development</h2>
            <p className="mt-4 text-gray-300">
              Stay updated with our latest features and contribute to our growth
            </p>
            <form onSubmit={handleSubscribe} className="mt-8 max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-purple-500 focus:outline-none focus:border-purple-400"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 rounded-r-lg hover:bg-purple-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-purple-400">Contact Us</h2>
              <p className="mt-4 text-gray-300">
                Have questions or feedback? We'd love to hear from you!
              </p>
              <form onSubmit={handleContact} className="mt-8 space-y-4">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:outline-none focus:border-purple-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:outline-none focus:border-purple-400"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-purple-500 focus:outline-none focus:border-purple-400"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <a
                  target='_blank'
                  href="http://github.com/fabrichgit/"
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400"
                >
                  <Github className="h-6 w-6" />
                  <span>GitHub</span>
                </a>
                <a
                  target='_blank'
                  href="https://www.facebook.com/fabrich.dev/"
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400"
                >
                  <Facebook className="h-6 w-6" />
                  <span>Facebook</span>
                </a>
                <a
                  target='_blank'
                  href="https://fabrich.vercel.app/"
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400"
                >
                  <Globe className="h-6 w-6" />
                  <span>Website</span>
                </a>
                <a
                  target='_blank'
                  href="mailto:fabrich@onirtech.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400"
                >
                  <Mail className="h-6 w-6" />
                  <span>fabrich@onirtech.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2025 Nano by <a target='_blank' href="https://fabrich.vercel.app" className='text-indigo-400'>fabrich</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;