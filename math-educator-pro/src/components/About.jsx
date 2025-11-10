const About = () => {
  const aboutData = [
    {
      icon: 'fas fa-user-circle',
      title: 'Personal Details',
      content: [
        { label: 'Name', value: 'Abdullah Al Main' },
        { label: 'Address', value: 'Hillview, Panchlish, Chattagram' },
        { label: 'Mobile', value: '01517830517', isLink: true, href: 'tel:01517830517' }
      ]
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Educational Journey',
      timeline: [
        { dot: true, title: 'SSC (Science)', date: 'Completed in 2017' },
        { dot: true, title: 'HSC (Science)', date: 'Completed in 2019' },
        { dot: true, title: 'BSc in Mathematics', date: 'University of Chittagong, 2023' },
        { dot: true, title: 'MSc in Applied Mathematics', date: 'University of Chittagong (Ongoing)', current: true }
      ]
    },
    {
      icon: 'fas fa-heart',
      title: 'My Passion',
      quote: 'Revision is the key',
      description: 'I am dedicated to making mathematics accessible and enjoyable for students at all levels. My journey from completing my BSc in 2023 to pursuing MSc reflects my commitment to continuous learning and teaching excellence.',
      location: 'Currently residing in Hillview, Panchlish, Chattagram, I provide personalized home tuition services tailored to each student\'s needs.'
    }
  ]

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">About Me</h2>
        <p className="text-xl text-center mb-12 text-gray-600">
          Get to know more about my background, education, and passion for mathematics education.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="text-5xl text-blue-500 mb-4">
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
              </div>

              {item.content && (
                <ul className="space-y-3">
                  {item.content.map((detail, idx) => (
                    <li key={idx} className="flex justify-between items-center">
                      <strong className="text-gray-700">{detail.label}:</strong>
                      {detail.isLink ? (
                        <a href={detail.href} className="text-blue-600 hover:text-blue-800 transition-colors">
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-gray-600">{detail.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {item.timeline && (
                <div className="space-y-4">
                  {item.timeline.map((event, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className={`w-4 h-4 rounded-full mt-2 ${event.current ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{event.title}</h4>
                        <p className="text-gray-600 text-sm">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {item.quote && (
                <div className="text-center">
                  <blockquote className="text-xl font-semibold text-blue-600 mb-4 italic">
                    "{item.quote}"
                  </blockquote>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-gray-600">{item.location}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About