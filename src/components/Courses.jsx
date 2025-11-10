const Courses = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const courses = [
    {
      id: 'c1',
      icon: 'fas fa-book-open',
      title: 'Class 5–8',
      description: 'Building strong foundations and essential problem-solving skills',
      subjects: [
        { icon: 'fas fa-calculator', name: 'Mathematics' },
        { icon: 'fas fa-language', name: 'English' },
        { icon: 'fas fa-microscope', name: 'Science' }
      ]
    },
    {
      id: 'c2',
      icon: 'fas fa-atom',
      title: 'SSC (Science)',
      description: 'Comprehensive science education with concept mastery and exam preparation',
      subjects: [
        { icon: 'fas fa-calculator', name: 'Mathematics' },
        { icon: 'fas fa-superscript', name: 'Higher Mathematics' },
        { icon: 'fas fa-flask', name: 'Chemistry' },
        { icon: 'fas fa-bolt', name: 'Physics' },
        { icon: 'fas fa-dna', name: 'Biology' }
      ]
    },
    {
      id: 'c3',
      icon: 'fas fa-graduation-cap',
      title: 'HSC',
      description: 'Advanced mathematics and information technology for higher secondary students',
      subjects: [
        { icon: 'fas fa-superscript', name: 'Higher Mathematics' },
        { icon: 'fas fa-laptop-code', name: 'ICT' }
      ]
    }
  ]

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Courses I Teach</h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-4xl mx-auto">
          I provide personalized home tuition across school and college levels. Below are subjects I teach for each student group — use <em>Request Fee</em> to get a customized quote (fee varies by distance).
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <article
              key={course.id}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-6">
                <div className="text-5xl text-blue-500 mb-4">
                  <i className={course.icon}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {course.subjects.map((subject, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <i className={`${subject.icon} text-blue-500`}></i>
                    <span className="text-gray-700">{subject.name}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full btn btn-primary"
              >
                Request Fee
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <p className="text-gray-800">
            <strong>Note:</strong> Fees will vary depending on travel distance for home teaching. Please use the "Request Fee" button to contact me with your location so I can provide an accurate quote.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Courses