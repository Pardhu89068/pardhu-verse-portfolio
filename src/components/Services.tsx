
import { Palette, Code, BookOpen, PenTool } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creative interfaces with user-friendly experiences that delight and engage users.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: Code,
      title: "Web Design",
      description: "Colorful, responsive, modern websites that bring your vision to life.",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      icon: BookOpen,
      title: "Tutoring",
      description: "Academic help in CSE fundamentals and other subjects with personalized approach.",
      color: "from-green-500 to-blue-500",
      bgColor: "from-green-50 to-blue-50"
    },
    {
      icon: PenTool,
      title: "Writing",
      description: "Essays, creative writing, and blogging with engaging and thoughtful content.",
      color: "from-orange-500 to-pink-500",
      bgColor: "from-orange-50 to-pink-50"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Services I Offer
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to help you bring your ideas to life with creativity, passion, and fresh perspectives!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
            >
              <div className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6">
                <button className={`bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
