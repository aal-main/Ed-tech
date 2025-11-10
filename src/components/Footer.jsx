import logo from '/logo.png'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Courses', id: 'courses' },
    { name: 'About', id: 'about' },
    { name: 'Resources', id: 'resources' },
    { name: 'Contact', id: 'contact' }
  ]

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: 'Hillview, Panchlish, Chattagram' },
    { icon: 'fab fa-whatsapp', text: '01517830517', link: 'https://wa.me/01517830517' },
    { icon: 'fab fa-linkedin', text: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/abdullahalmain/' }
  ]

  const socialLinks = [
    { icon: 'fab fa-whatsapp', link: 'https://wa.me/01517830517', label: 'WhatsApp' },
    { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/abdullahalmain/', label: 'LinkedIn' },
    { icon: 'fas fa-phone', link: 'tel:01517830517', label: 'Phone' },
    { icon: 'fas fa-envelope', link: '#contact', label: 'Email/Contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="MainKnowledge logo" className="h-8 w-8" />
              <span className="text-xl font-bold">
                Main<span className="text-blue-400">Knowledge</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering students through personalized home tuition in mathematics and related subjects. Making learning accessible and enjoyable for all.
            </p>
            <blockquote className="text-blue-400 italic">
              "Study once to learn, revise to excel"
            </blockquote>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <i className={`${item.icon} text-blue-400 mt-1`}></i>
                  <div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-300 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{item.text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  target={social.link.startsWith('http') ? "_blank" : undefined}
                  rel={social.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2020-2025 Abdullah Al Main. All rights reserved. | Crafted with <i className="fas fa-heart text-red-500 animate-pulse"></i> for education</p>
            </div>
            <div className="flex space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-500"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer