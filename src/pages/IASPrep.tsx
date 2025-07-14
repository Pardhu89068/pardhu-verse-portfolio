
import { Navigation } from "@/components/Navigation";
import { Target, BookOpen, Users, Award, Calendar, CheckCircle, Clock, TrendingUp } from "lucide-react";

const IASPrep = () => {
  const preparationPhases = [
    {
      phase: "Foundation Building",
      status: "In Progress",
      description: "Building strong fundamentals in general studies and current affairs",
      timeline: "Year 1-2",
      color: "from-blue-500 to-purple-500"
    },
    {
      phase: "Intensive Preparation",
      status: "Upcoming",
      description: "Dedicated UPSC preparation with coaching and self-study",
      timeline: "Year 3-4",
      color: "from-green-500 to-blue-500"
    },
    {
      phase: "Exam & Interview",
      status: "Future",
      description: "Taking the UPSC examination and interview process",
      timeline: "Post Graduation",
      color: "from-orange-500 to-pink-500"
    }
  ];

  const studyTopics = [
    {
      subject: "General Studies",
      topics: ["History", "Geography", "Polity", "Economics", "Environment"],
      progress: 30,
      icon: BookOpen,
      color: "from-blue-500 to-purple-500"
    },
    {
      subject: "Current Affairs",
      topics: ["National Issues", "International Relations", "Government Policies", "Social Issues"],
      progress: 45,
      icon: TrendingUp,
      color: "from-green-500 to-blue-500"
    },
    {
      subject: "Optional Subject",
      topics: ["Computer Science", "Programming", "Technology", "Digital India"],
      progress: 25,
      icon: Target,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const motivations = [
    {
      title: "Serve the Nation",
      description: "Making a positive impact on society through effective governance and policy implementation.",
      icon: Award
    },
    {
      title: "Bridge Technology & Governance",
      description: "Using my CS background to modernize government processes and digital transformation.",
      icon: TrendingUp
    },
    {
      title: "Social Change",
      description: "Working towards creating equal opportunities and better living conditions for all citizens.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                IAS Preparation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My journey towards becoming an IAS officer - combining technology with public service for a better India.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-white">
              <div className="flex items-center mb-4">
                <Target size={32} className="mr-4" />
                <h2 className="text-3xl font-bold">My Vision</h2>
              </div>
              <p className="text-xl leading-relaxed">
                To serve India as an IAS officer who bridges the gap between technology and governance, 
                creating efficient, transparent, and citizen-centric administrative systems that benefit 
                every Indian, especially those in rural and underserved communities.
              </p>
            </div>
          </div>

          {/* Preparation Phases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Preparation Roadmap
              </span>
            </h2>
            
            <div className="space-y-6">
              {preparationPhases.map((phase, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{phase.phase}</h3>
                    <div className="flex items-center space-x-4">
                      <span className={`bg-gradient-to-r ${phase.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                        {phase.status}
                      </span>
                      <span className="text-gray-500 font-medium">{phase.timeline}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Study Progress */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Current Study Progress
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {studyTopics.map((topic, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className={`bg-gradient-to-r ${topic.color} p-4 rounded-2xl w-fit mb-6`}>
                    <topic.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{topic.subject}</h3>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{topic.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${topic.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${topic.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {topic.topics.map((subtopic, subIndex) => (
                      <div key={subIndex} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-500" />
                        <span className="text-gray-600 text-sm">{subtopic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Motivations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Why IAS?
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {motivations.map((motivation, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 rounded-full w-fit mx-auto mb-6">
                    <motivation.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{motivation.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{motivation.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Schedule */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
                <Clock className="mr-3 text-blue-600" size={32} />
                Daily Study Schedule
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Morning (6:00 AM - 10:00 AM)</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Current Affairs & Newspaper</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">General Studies Reading</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Note Making</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Evening (6:00 PM - 9:00 PM)</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">Optional Subject Study</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-700">Answer Writing Practice</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">Revision & Testing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">Join My Journey</h3>
              <p className="text-xl mb-8 leading-relaxed">
                Follow my preparation journey and let's motivate each other towards our goals. 
                Together, we can serve the nation and make a difference!
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Study Together
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Share Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IASPrep;
