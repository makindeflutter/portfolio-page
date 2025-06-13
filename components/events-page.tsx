"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  ExternalLink,
  Search,
  Calendar,
  MapPin,
  Clock,
  Users,
  Tag,
  ChevronRight,
  Filter,
  CalendarDays,
  Ticket,
} from "lucide-react"

const events = [
  // Upcoming Events
  {
    id: 1,
    title: "Nithub Demo Day 2025",
    description:
      "Join us for our bi-annual Demo Day where startups from our incubation and acceleration programs showcase their innovative solutions.",
    date: "July 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Nithub Innovation Space, University of Lagos",
    type: "Demo Day",
    image: "/placeholder.svg?height=300&width=600",
    capacity: 200,
    registrationLink: "https://nithub.unilag.edu.ng/demoday2025",
    isFeatured: true,
    status: "upcoming",
    tags: ["Startups", "Investors", "Networking"],
    speakers: [
      {
        name: "Dr. Olufemi Adeyemi",
        role: "Director, Nithub",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Tunde Johnson",
        role: "CEO, TechVentures Nigeria",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  {
    id: 2,
    title: "AI for Social Good Hackathon",
    description:
      "A 48-hour hackathon focused on developing AI solutions that address pressing social challenges in Nigeria.",
    date: "August 5-7, 2025",
    time: "9:00 AM (Day 1) - 5:00 PM (Day 3)",
    location: "Nithub Innovation Space, University of Lagos",
    type: "Hackathon",
    image: "/placeholder.svg?height=300&width=600",
    capacity: 150,
    registrationLink: "https://nithub.unilag.edu.ng/ai-hackathon",
    isFeatured: true,
    status: "upcoming",
    tags: ["AI", "Social Impact", "Coding Challenge"],
    speakers: [
      {
        name: "Prof. Sarah Okonkwo",
        role: "AI Research Lead, University of Lagos",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  {
    id: 3,
    title: "Tech Career Fair 2025",
    description:
      "Connect with top tech companies hiring in Nigeria. Bring your resume and portfolio for on-the-spot interviews.",
    date: "July 28, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "University of Lagos Main Auditorium",
    type: "Career Fair",
    image: "/placeholder.svg?height=300&width=600",
    capacity: 500,
    registrationLink: "https://nithub.unilag.edu.ng/careerfair2025",
    isFeatured: false,
    status: "upcoming",
    tags: ["Careers", "Recruitment", "Networking"],
    partners: ["Moniepoint", "Paystack", "Google Nigeria", "Microsoft"],
  },
  {
    id: 4,
    title: "NITDEV 4.3 Orientation",
    description:
      "Orientation session for participants of the NITDEV 4.3 program covering UI/UX Design, Mobile App Development, Frontend, and Backend development.",
    date: "August 15, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Nithub Training Center, University of Lagos",
    type: "Workshop",
    image: "/placeholder.svg?height=300&width=600",
    capacity: 100,
    registrationLink: "https://nithub.unilag.edu.ng/nitdev-orientation",
    isFeatured: false,
    status: "upcoming",
    tags: ["Training", "Development", "Orientation"],
  },
  {
    id: 5,
    title: "Blockchain for Beginners Workshop",
    description:
      "An introductory workshop on blockchain technology, cryptocurrencies, and their applications in solving real-world problems.",
    date: "July 22, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Virtual (Zoom)",
    type: "Workshop",
    image: "/placeholder.svg?height=300&width=600",
    capacity: 300,
    registrationLink: "https://nithub.unilag.edu.ng/blockchain-workshop",
    isFeatured: false,
    status: "upcoming",
    tags: ["Blockchain", "Cryptocurrency", "Web3"],
    speakers: [
      {
        name: "Chidi Okeke",
        role: "Blockchain Developer, Binance Africa",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  {
    id: 6,
    title: "Women in Tech Networking Mixer",
    description: "An evening of networking, mentorship, and inspiration for women in technology across Lagos.",
    date: "August 12, 2025",
    time: "5:00 PM - 8:00 PM",
    location: "Radisson Blu, Victoria Island, Lagos",
    type: "Networking",
    image: "/placeholder.svg?height=300&width=600",
    capacity: 150,
    registrationLink: "https://nithub.unilag.edu.ng/women-in-tech",
    isFeatured: false,
    status: "upcoming",
    tags: ["Women in Tech", "Networking", "Mentorship"],
    speakers: [
      {
        name: "Funke Opeke",
        role: "CEO, MainOne",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Odunayo Eweniyi",
        role: "Co-founder, PiggyVest",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },

  // Past Events
  {
    id: 7,
    title: "Nithub x Meta Hackathon 2025",
    description: "A collaborative hackathon with Meta focusing on AR/VR solutions for education and healthcare.",
    date: "May 10-12, 2025",
    time: "9:00 AM (Day 1) - 5:00 PM (Day 3)",
    location: "Nithub Innovation Space, University of Lagos",
    type: "Hackathon",
    image: "/placeholder.svg?height=300&width=600",
    capacity: 120,
    isFeatured: true,
    status: "past",
    tags: ["AR/VR", "Meta", "Education", "Healthcare"],
    winners: [
      {
        team: "Team Innovate",
        project: "VR Medical Training Simulator",
        members: ["Ibrahim Abdulrahim", "Ojo Abisola Deborah", "Toluwase Shoniran", "Chi-ife D. Ileka"],
      },
    ],
    recap:
      "The hackathon saw 30 teams competing to build innovative AR/VR solutions. Team Innovate won with their VR Medical Training Simulator that helps medical students practice surgical procedures in a virtual environment.",
  },
  {
    id: 8,
    title: "Startup Funding Masterclass",
    description:
      "An intensive workshop on fundraising strategies, pitch deck creation, and investor relations for early-stage startups.",
    date: "April 25, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Nithub Training Center, University of Lagos",
    type: "Workshop",
    image: "/placeholder.svg?height=300&width=600",
    capacity: 80,
    status: "past",
    tags: ["Funding", "Startups", "Pitch"],
    speakers: [
      {
        name: "Maya Horgan Famodu",
        role: "Founder, Ingressive Capital",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    recap:
      "The masterclass provided hands-on guidance to 75 startup founders on crafting compelling pitch decks and navigating the fundraising landscape in Africa.",
  },
  {
    id: 9,
    title: "Shenovation Hackathon 2025",
    description: "A women-focused hackathon addressing challenges in the construction and real estate sectors.",
    date: "March 8-10, 2025",
    time: "9:00 AM (Day 1) - 5:00 PM (Day 3)",
    location: "Nithub Innovation Space, University of Lagos",
    type: "Hackathon",
    image: "/placeholder.svg?height=300&width=600",
    capacity: 100,
    status: "past",
    tags: ["Women in Tech", "Construction", "Real Estate"],
    winners: [
      {
        team: "BuildHer",
        project: "Construction Sourcing App",
        members: ["Amina Ibrahim", "Chioma Okafor", "Fatima Bello"],
      },
    ],
    recap:
      "The hackathon brought together 25 all-female teams to develop tech solutions for the construction industry. Team BuildHer won with their web-based construction sourcing application.",
  },
  {
    id: 10,
    title: "Data Science Bootcamp",
    description:
      "A two-day intensive bootcamp covering data analysis, visualization, and machine learning with Python.",
    date: "February 15-16, 2025",
    time: "9:00 AM - 5:00 PM (Both days)",
    location: "Nithub Training Center, University of Lagos",
    type: "Bootcamp",
    image: "/placeholder.svg?height=300&width=600",
    capacity: 50,
    status: "past",
    tags: ["Data Science", "Python", "Machine Learning"],
    speakers: [
      {
        name: "Dr. Femi Johnson",
        role: "Data Science Lead, Nithub",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    recap:
      "The bootcamp trained 48 participants in practical data science skills, with participants working on real-world datasets from Nigerian businesses.",
  },
  {
    id: 11,
    title: "Tech Policy Roundtable",
    description:
      "A discussion on Nigeria's technology policies and their impact on innovation, startups, and digital inclusion.",
    date: "January 30, 2025",
    time: "11:00 AM - 2:00 PM",
    location: "Nithub Conference Room, University of Lagos",
    type: "Panel Discussion",
    image: "/placeholder.svg?height=300&width=600",
    capacity: 60,
    status: "past",
    tags: ["Policy", "Regulation", "Digital Economy"],
    speakers: [
      {
        name: "Hon. Olatunbosun Tijani",
        role: "Minister of Communications, Innovation and Digital Economy",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Iyinoluwa Aboyeji",
        role: "Founder, Future Africa",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    recap:
      "The roundtable brought together government officials, startup founders, and policy experts to discuss regulatory frameworks that can foster innovation in Nigeria's tech ecosystem.",
  },
  {
    id: 12,
    title: "NITPY: Python for Beginners",
    description: "A free introductory Python programming course for beginners with no prior coding experience.",
    date: "January 15-17, 2025",
    time: "4:00 PM - 7:00 PM (All days)",
    location: "Nithub Training Center, University of Lagos",
    type: "Training",
    image: "/placeholder.svg?height=300&width=600",
    capacity: 100,
    status: "past",
    tags: ["Python", "Programming", "Beginners"],
    speakers: [
      {
        name: "Adewale Adetona",
        role: "Software Engineer, Nithub",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    recap:
      "The free Python training introduced 95 beginners to programming concepts and practical coding skills, with participants building simple applications by the end of the course.",
  },
]

const eventTypes = [
  "All Types",
  "Demo Day",
  "Hackathon",
  "Workshop",
  "Bootcamp",
  "Training",
  "Networking",
  "Career Fair",
  "Panel Discussion",
]

export function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("All Types")
  const [activeTab, setActiveTab] = useState("upcoming")

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (event.tags && event.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))

    const matchesType = selectedType === "All Types" || event.type === selectedType
    const matchesTab = event.status === activeTab

    return matchesSearch && matchesType && matchesTab
  })

  const featuredEvents = events.filter((event) => event.isFeatured && event.status === "upcoming")

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1a2332] border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-[#00ff00]" />
              <div>
                <h1 className="text-2xl font-bold text-white">nithub</h1>
                <p className="text-sm text-gray-300">Innovate with Confidence and Build Impactful Solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  Home
                </Button>
              </Link>
              <Link href="/partnership">
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  Partnership
                </Button>
              </Link>
              <Button className="bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold">
                <ExternalLink className="h-4 w-4 mr-2" />
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1a2332] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4 text-white">Events & Community</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our vibrant community of innovators, entrepreneurs, and tech enthusiasts at workshops, hackathons,
                and networking events designed to inspire, educate, and connect.
              </p>
              <Button className="bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold px-8 py-3">
                <Calendar className="h-4 w-4 mr-2" />
                Browse Events
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tech community event with participants collaborating"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#1a2332] mb-4">Featured Events</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don't miss these upcoming flagship events from our community
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="mb-2 bg-[#00ff00] text-black">{event.type}</Badge>
                        <CardTitle className="text-2xl text-[#1a2332]">{event.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{event.description}</CardDescription>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <CalendarDays className="h-4 w-4 mr-2 text-[#00ff00]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-[#00ff00]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-[#00ff00]" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-[#00ff00]" />
                        <span>Capacity: {event.capacity} attendees</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#1a2332] hover:bg-[#2a3342]" asChild>
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        <Ticket className="h-4 w-4 mr-2" />
                        Register Now
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Listing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">All Events</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover workshops, hackathons, training sessions, and networking opportunities
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
              />
            </div>
            <div className="flex gap-4 items-center">
              <Filter className="h-4 w-4 text-gray-500" />
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-40 border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="upcoming" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge className="mb-2" variant={event.type === "Hackathon" ? "default" : "secondary"}>
                      {event.type}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      {event.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-[#1a2332]">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="mb-4 line-clamp-3">{event.description}</CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-3 w-3 mr-2 text-gray-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-3 w-3 mr-2 text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {event.tags && (
                    <div className="mt-4 flex flex-wrap gap-1">
                      {event.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                          <Tag className="h-2 w-2 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {event.status === "past" && event.recap && (
                    <div className="mt-4 bg-gray-50 p-3 rounded-md text-sm text-gray-600">
                      <p className="font-medium text-[#1a2332] mb-1">Event Recap:</p>
                      <p>{event.recap}</p>
                    </div>
                  )}

                  {event.status === "past" && event.winners && (
                    <div className="mt-4 bg-blue-50 p-3 rounded-md text-sm">
                      <p className="font-medium text-blue-800 mb-1">Winners:</p>
                      {event.winners.map((winner, index) => (
                        <div key={index}>
                          <p className="text-blue-700">
                            {winner.team} - {winner.project}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  {event.status === "upcoming" ? (
                    <Button className="w-full" asChild>
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        Register Now
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-600 text-lg">No events found matching your criteria.</div>
              <Button
                variant="outline"
                className="mt-4 border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-white"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedType("All Types")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Host Your Event */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-[#1a2332] rounded-lg p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-4">Host Your Event at Nithub</h4>
                <p className="text-gray-300 mb-6">
                  Looking for a venue for your tech meetup, workshop, or hackathon? Our innovation space is equipped
                  with high-speed internet, presentation equipment, and flexible seating arrangements for groups of all
                  sizes.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#00ff00] mr-2" />
                    <span>Modern facilities with capacity for up to 200 people</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#00ff00] mr-2" />
                    <span>Technical support and event management assistance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#00ff00] mr-2" />
                    <span>Promotional support through our community channels</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#00ff00] mr-2" />
                    <span>Catering and refreshment options available</span>
                  </li>
                </ul>
                <Button className="bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold">
                  Inquire About Venue
                </Button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Nithub event space with modern facilities"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">Community Calendar</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with all our events and never miss an opportunity to learn and connect
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Button className="bg-[#1a2332] hover:bg-[#2a3342]">
              <Calendar className="h-4 w-4 mr-2" />
              Subscribe to Calendar
            </Button>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Want to suggest an event or collaborate on programming?{" "}
              <Link href="#" className="text-[#1a2332] font-medium hover:underline">
                Contact our events team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2332] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="h-6 w-6 text-[#00ff00]" />
                <span className="text-lg font-semibold text-white">nithub</span>
              </div>
              <p className="text-gray-300">
                Supporting Nigerian entrepreneurs to build innovative solutions that address local challenges and create
                global opportunities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Programs</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Accelerator Program</li>
                <li>Incubator Program</li>
                <li>Mentorship Network</li>
                <li>Market Access Support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>hello@nithub.unilag.edu.ng</li>
                <li>+234 (0) 123 456 7890</li>
                <li>University of Lagos, Akoka</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 nithub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
