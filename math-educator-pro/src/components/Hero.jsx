import profileImage from '/my image.JPG?url'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
          Welcome to MainKnowledge
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Discover personalized home tuition that transforms learning into an exciting journey of discovery and mastery.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src={profileImage}
                  alt="Abdullah Al Main"
                  className="w-80 h-80 rounded-full mx-auto object-cover border-8 border-blue-300 shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Abdullah Al Main</h3>
              <p className="text-lg text-blue-600 font-semibold mb-2">Mathematician | Educator</p>
              <p className="text-gray-600 mb-4">Dedicated to Student Success</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">Expert</div>
                  <div className="text-sm text-gray-600">in Mathematics</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">Flexible</div>
                  <div className="text-sm text-gray-600">Hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-6xl mb-6 text-blue-500">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Start Your Learning Journey</h3>
              <p className="text-gray-600 mb-6">
                Ready to excel in academics? Join personalized home tuition sessions tailored to your learning style and pace.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Personalized Learning Plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Progress Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>24/7 Support</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('courses')}
                  className="btn btn-primary flex-1"
                >
                  Explore Courses
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-secondary flex-1"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Achievement Badges */}
        <div className="flex justify-center space-x-8 mt-12">
          <div className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full shadow-lg animate-bounce">
            <i className="fas fa-trophy mr-2"></i>
            <span className="font-semibold">Top Rated</span>
          </div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce animation-delay-1000">
            <i className="fas fa-clock mr-2"></i>
            <span className="font-semibold">3+ Years Exp</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero