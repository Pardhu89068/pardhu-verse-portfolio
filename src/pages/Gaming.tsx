
import { Navigation } from "@/components/Navigation";
import { Gamepad2, Trophy, Users, Clock, Star, Zap } from "lucide-react";

const Gaming = () => {
  const favoriteGames = [
    {
      name: "Valorant",
      genre: "FPS",
      hours: "500+",
      rank: "Gold",
      description: "Strategic team-based shooter that tests precision and tactics.",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Minecraft",
      genre: "Sandbox",
      hours: "300+",
      rank: "Builder",
      description: "Creative world-building that sparks imagination and problem-solving.",
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Among Us",
      genre: "Social Deduction",
      hours: "150+",
      rank: "Detective",
      description: "Social gameplay that enhances communication and analytical skills.",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Chess.com",
      genre: "Strategy",
      hours: "200+",
      rank: "1200 ELO",
      description: "Classic strategy game that sharpens logical thinking.",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const gamingAchievements = [
    {
      title: "Consistent Player",
      description: "Maintained regular gaming schedule while balancing studies",
      icon: Clock,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Team Leader",
      description: "Led multiple gaming squads to victory in competitive matches",
      icon: Users,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Strategy Expert",
      description: "Developed effective game strategies and tactics",
      icon: Zap,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Community Member",
      description: "Active in gaming communities and forums",
      icon: Star,
      color: "from-purple-500 to-pink-500"
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
                Gaming World
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Gaming isn't just a hobby for me - it's a passion that teaches strategy, teamwork, and problem-solving!
            </p>
          </div>

          {/* Gaming Philosophy */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-white">
              <div className="flex items-center mb-4">
                <Gamepad2 size={32} className="mr-4" />
                <h2 className="text-3xl font-bold">My Gaming Philosophy</h2>
              </div>
              <p className="text-xl leading-relaxed">
                Gaming is more than entertainment - it's a platform for learning strategic thinking, 
                building teamwork skills, and connecting with people worldwide. Every game teaches 
                valuable lessons that I apply to my studies and future career goals.
              </p>
            </div>
          </div>

          {/* Favorite Games */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Favorite Games
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {favoriteGames.map((game, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{game.name}</h3>
                    <span className={`bg-gradient-to-r ${game.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {game.genre}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-4 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span className="font-medium">{game.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Trophy size={16} />
                      <span className="font-medium">{game.rank}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {game.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Gaming Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Gaming Achievements
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gamingAchievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                  <div className={`bg-gradient-to-r ${achievement.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                    <achievement.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gaming & Learning */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                How Gaming Enhances My Studies
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full w-fit mx-auto mb-4">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Problem Solving</h3>
                  <p className="text-gray-600">Games present complex problems that require creative solutions.</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full w-fit mx-auto mb-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Teamwork</h3>
                  <p className="text-gray-600">Multiplayer games teach communication and collaboration.</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-fit mx-auto mb-4">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Goal Setting</h3>
                  <p className="text-gray-600">Gaming teaches persistence and strategic planning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gaming Setup */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl border-2 border-gray-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Always Ready for a Challenge!</h3>
              <p className="text-xl text-gray-600 mb-8">
                Whether it's a competitive match or a casual gaming session, I'm always up for the challenge. 
                Gaming keeps me sharp and ready for any problem-solving scenario!
              </p>
              <div className="flex justify-center space-x-4">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-2 rounded-full font-semibold">
                  Currently Playing: Valorant
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-2 rounded-full font-semibold">
                  Status: Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaming;
