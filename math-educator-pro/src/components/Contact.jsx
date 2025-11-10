const Contact = () => {
  const contactCards = [
    {
      icon: 'fab fa-whatsapp',
      title: 'Phone & WhatsApp',
      description: 'Call or message me directly on WhatsApp for immediate consultation and personalized service quotes.',
      link: 'https://wa.me/01517830517',
      linkText: '01517830517',
      isExternal: true
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      description: 'Providing personalized home tuition services in Hillview, Panchlish area and surrounding regions in Chattagram.',
      address: 'Hillview, Panchlish, Chattagram'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'Connect on LinkedIn',
      description: 'Follow my professional journey and connect with me for academic insights and educational discussions.',
      link: 'https://www.linkedin.com/in/abdullahalmain/',
      linkText: 'View Profile',
      isExternal: true
    }
  ]

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Contact Me</h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-4xl mx-auto">
          Get in touch for personalized home tuition services. I'm here to help you excel in your studies and achieve your academic goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-center"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-5xl text-blue-500 mb-6">
                <i className={card.icon}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-6">{card.description}</p>

              {card.link ? (
                <a
                  href={card.link}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                >
                  <i className={card.icon}></i>
                  <span>{card.linkText}</span>
                </a>
              ) : (
                <address className="text-gray-700 font-semibold not-italic">
                  {card.address}
                </address>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact