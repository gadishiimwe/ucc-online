import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, Users, Heart, Globe } from 'lucide-react';

const About = () => {
  const leaders = [
    {
      name: "Pastor John Smith",
      title: "Senior Pastor",
      bio: "Pastor John has been leading UCC for over 15 years with a passion for biblical teaching and community outreach. He holds a Master of Divinity from Dallas Theological Seminary and has authored several books on Christian living.",
      image: "/images/ucconline___14030707_191543282.jpg",
      education: "M.Div, Dallas Theological Seminary",
      experience: "15+ years in ministry"
    },
    {
      name: "Pastor Mary Johnson",
      title: "Associate Pastor",
      bio: "Pastor Mary specializes in youth ministry and women's programs, bringing energy and heart to our community. She has a background in counseling and has been instrumental in developing our family support programs.",
      image: "/images/ucconline___14030707_191543295.jpg",
      education: "M.A. in Counseling Psychology",
      experience: "10+ years in ministry"
    },
    {
      name: "Minister David Thompson",
      title: "Music Director",
      bio: "David leads our worship team and has been serving in music ministry for over 20 years. His passion for worship creates an atmosphere where people can truly connect with God.",
      image: "/images/ucconline___14030707_191543248.jpg",
      education: "B.A. in Music Ministry",
      experience: "20+ years in worship ministry"
    },
    {
      name: "Sarah Wilson",
      title: "Children's Director",
      bio: "Sarah oversees all children's programs and has a heart for seeing young hearts discover Jesus. She's a certified elementary educator with a passion for creative Bible teaching.",
      image: "/images/ucconline___14030707_191543282.jpg",
      education: "B.Ed in Elementary Education",
      experience: "8+ years in children's ministry"
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: "Growing Community",
      description: "Over 500 active members and growing",
      stat: "500+"
    },
    {
      icon: Heart,
      title: "Lives Transformed",
      description: "Hundreds of lives touched through our ministries",
      stat: "1000+"
    },
    {
      icon: Globe,
      title: "Mission Outreach",
      description: "Supporting missionaries in 5 countries",
      stat: "5"
    },
    {
      icon: Award,
      title: "Community Impact",
      description: "Years of faithful service to our community",
      stat: "15+"
    }
  ];

  const timeline = [
    {
      year: "2009",
      title: "Church Founded",
      description: "United Christian Church was established with 25 founding members in a small rented space."
    },
    {
      year: "2012",
      title: "First Building",
      description: "Purchased our first permanent location on Faith Street, accommodating 200 people."
    },
    {
      year: "2015",
      title: "Youth Ministry Launch",
      description: "Started dedicated youth programs, rapidly growing to over 50 active youth members."
    },
    {
      year: "2018",
      title: "Building Expansion",
      description: "Major renovation and expansion project, doubling our capacity and adding new facilities."
    },
    {
      year: "2020",
      title: "Digital Ministry",
      description: "Launched online services and digital outreach, reaching people beyond our local community."
    },
    {
      year: "2024",
      title: "Today",
      description: "Thriving community of 500+ members with 12 active ministries serving God and our neighbors."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div 
        className="relative text-white py-32"
        style={{
          backgroundImage: `url('/images/ucconline___14030707_191708224.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About United Christian Church</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover our story, mission, and the people who make our church family special
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To glorify God by making disciples of Jesus Christ who love God, love others, 
                and serve the world. We are committed to creating a welcoming community where 
                everyone can experience God's love and grow in their faith journey.
              </p>
              <p className="text-gray-600">
                We believe in the transformative power of authentic relationships, biblical teaching, 
                and practical service that makes a real difference in people's lives.
              </p>
            </div>
            <div>
              <img 
                src="/images/ucconline___14030707_191543282.jpg"
                alt="Church community"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="order-2 md:order-1">
              <img 
                src="/images/ucconline___14030707_191543295.jpg"
                alt="Community service"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be a church that transforms lives and communities through the power of 
                God's love, creating a place where people can find hope, healing, and purpose 
                in Jesus Christ.
              </p>
              <p className="text-gray-600">
                We envision a future where our church serves as a beacon of light in our community, 
                reaching people from all walks of life and empowering them to live out their God-given potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Church History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to a thriving community - see how God has blessed our church over the years.
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-4">
                  <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-800 rounded-full mt-2 mr-4"></div>
                <div className="flex-1 bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">By God's Grace</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We give all glory to God for what He has accomplished through our church family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{achievement.stat}</div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-blue-100">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">The Bible</h3>
              <p className="text-gray-700 mb-4">
                We believe the Bible is the inspired Word of God, completely trustworthy and the final authority for faith and life.
              </p>
              <p className="text-sm text-gray-600">
                "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness." - 2 Timothy 3:16
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Salvation</h3>
              <p className="text-gray-700 mb-4">
                We believe in salvation by grace through faith in Jesus Christ alone, not by works or good deeds.
              </p>
              <p className="text-sm text-gray-600">
                "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God." - Ephesians 2:8
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Trinity</h3>
              <p className="text-gray-700 mb-4">
                We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.
              </p>
              <p className="text-sm text-gray-600">
                "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." - Matthew 28:19
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Jesus Christ</h3>
              <p className="text-gray-700 mb-4">
                We believe Jesus Christ is fully God and fully man, who died for our sins and rose again, offering eternal life to all who believe.
              </p>
              <p className="text-sm text-gray-600">
                "Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die.'" - John 11:25
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">The Church</h3>
              <p className="text-gray-700 mb-4">
                We believe the church is the body of Christ, called to worship, fellowship, discipleship, and service.
              </p>
              <p className="text-sm text-gray-600">
                "And he is the head of the body, the church; he is the beginning and the firstborn from among the dead." - Colossians 1:18
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Eternal Life</h3>
              <p className="text-gray-700 mb-4">
                We believe in the reality of heaven and hell, and that all people will spend eternity in one of these places.
              </p>
              <p className="text-sm text-gray-600">
                "And this is the testimony: God has given us eternal life, and this life is in his Son." - 1 John 5:11
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-800 font-medium mb-4">{leader.title}</p>
                  <p className="text-gray-700 mb-4">{leader.bio}</p>
                  <div className="border-t pt-4 space-y-2">
                    <p className="text-sm text-gray-600"><span className="font-medium">Education:</span> {leader.education}</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Experience:</span> {leader.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
