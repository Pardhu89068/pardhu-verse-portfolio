
import { Rocket, Lightbulb, Code2 } from "lucide-react";

export const Portfolio = () => {
  const futureProjects = [
    {
      icon: Code2,
      title: "Personal Blog Platform",
      description: "A dynamic blog to share thoughts on technology, books, and life experiences.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Community Helper App",
      description: "Mobile app to connect students and help with academic collaboration.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "IAS Preparation Portal",
      description: "Web platform for IAS aspirants with resources and study materials.",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              🚀 Exciting Projects Coming Soon!
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm just getting started on my journey, but I have big plans and exciting ideas brewing. 
              Stay tuned for amazing projects that will showcase my growth and creativity!
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What I Plan to Build
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {futureProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className={`bg-gradient-to-r ${project.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="text-white" size={32} />
                </div>
                
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6">
                  <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Want to Collaborate?</h3>
            <p className="text-xl mb-6 leading-relaxed">
              I'm always open to working on exciting projects and learning from experienced developers and designers!
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
