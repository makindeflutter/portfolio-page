"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  ExternalLink,
  Globe,
  MapPin,
  Award,
  Briefcase,
  Target,
  Handshake,
  Lightbulb,
  GraduationCap,
  Rocket,
  Heart,
  CheckCircle2,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react"

const partnerPrograms = [
  {
    id: 1,
    name: "HatchDev Full Stack Development Training",
    sponsor: "Moniepoint",
    description:
      "A nine-month intensive program that trained 98 participants selected from over 2,200 applicants. It included training and internship placements, with a 51.02% graduation rate.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    name: "Young African Innovators Program",
    sponsor: "UNDP and Mastercard Foundation",
    description:
      "A two-week program that trained 220 young African innovators, including individuals with disabilities, focusing on inclusive innovation.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    name: "Cybersecurity Training",
    sponsor: "Commercio and ABC",
    description: "160 participants were trained in digital security and online protection.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    name: "Capacity Building Programme",
    sponsor: "HCI Nigeria",
    description: "Supported researchers in transforming ideas into viable prototypes and ventures.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    name: "Women in Green Jobs",
    sponsor: "Poder Green",
    description: "Nithub facilitated the third cohort, training women in data analytics.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    name: "DSN AI Bootcamp",
    sponsor: "DSN",
    description:
      "Hosted in collaboration with DSN, with 200 participants undergoing hands-on training, workshops, and hackathons.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 7,
    name: "NEXTGEN Identity Management Bootcamp",
    sponsor: "Datasphir",
    description: "A 3-day bootcamp for 45 participants, covering SSO, IAM, and multi-factor authentication.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const testimonials = [
  {
    id: 1,
    quote:
      "Nithub was one of the best things that ever happened to my career as a Software Engineer. Not only did I gain relevant skills, I also had the right support system.",
    author: "Adedeji Tobiloba",
    position: "Gaia, Developer Relations Engineer",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    quote:
      "Having a vision is one thing, having a community eager to see you actualize that vision is more than a blessing. Nithub has been extremely inspiring and supportive.",
    author: "Fikayo Anikwe",
    position: "Product Designer, JPMorgan Chase & Co.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    quote:
      "NITDEV was the spark I needed to kickstart my journey as a backend developer. Beyond technical skills, the program gave me confidence to build and launch my first product.",
    author: "NITDEV Participant",
    position: "2024",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    quote:
      "The HatchDev program unlocks potential you didn't know existed. The people, the environment—it makes you want to be better.",
    author: "Abdullah Oyetoro",
    position: "HatchDev Graduate",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const successStories = [
  {
    id: 1,
    category: "International Placements",
    title: "Global Career Opportunities",
    description:
      "Alumni secured roles in Terrace USA, Gaia, Goldman Sachs with salaries up to $30,000/year and fully funded internships.",
    icon: <Globe className="h-6 w-6 text-[#00ff00]" />,
  },
  {
    id: 2,
    category: "Local Opportunities",
    title: "Nigerian Tech Ecosystem",
    description:
      "Community members placed in firms like FCMB, Moniepoint with salaries up to $8,000/year and stipends.",
    icon: <MapPin className="h-6 w-6 text-[#00ff00]" />,
  },
  {
    id: 3,
    category: "Product Innovation",
    title: "Startup Success",
    description: "Some founders launched refined solutions and secured partnerships (e.g., Retailbox, PayEasy).",
    icon: <Lightbulb className="h-6 w-6 text-[#00ff00]" />,
  },
  {
    id: 4,
    category: "Hackathons & Competitions",
    title: "Award-Winning Projects",
    description:
      "Winners of Shenovation Hackathon 2025 built a web-based construction sourcing app. Nithub x Meta Hackathon 2025 featured talented teams.",
    icon: <Award className="h-6 w-6 text-[#00ff00]" />,
  },
]

const upcomingPrograms = [
  {
    id: 1,
    name: "Interview Etiquette & Soft Skills Workshops",
    schedule: "Bi-annually",
    description: "Preparing talents for job interviews and workplace success.",
  },
  {
    id: 2,
    name: "NITDEV 4.3",
    schedule: "Q3 2025",
    description: "UI/UX Design, Mobile App Dev, Frontend, Backend development training.",
  },
  {
    id: 3,
    name: "NITDATA 3.3",
    schedule: "Q4 2025",
    description: "Comprehensive data analytics training program.",
  },
  {
    id: 4,
    name: "NITTeens & NITKids",
    schedule: "Summer 2025",
    description: "Tech education for younger generations.",
  },
  {
    id: 5,
    name: "Coding Challenges & Hackathons",
    schedule: "Monthly",
    description: "Regular competitive events to showcase skills and innovation.",
  },
  {
    id: 6,
    name: "3D Printing Training",
    schedule: "Q2 2025",
    description: "Hands-on training with 3D printing technology.",
  },
  {
    id: 7,
    name: "NITPY",
    schedule: "Quarterly",
    description: "Free Python Training for beginners.",
  },
  {
    id: 8,
    name: "Startup Incubation Program",
    schedule: "Year-round",
    description: "Supporting early-stage startups from ideation to market.",
  },
]

const partnershipOpportunities = [
  {
    id: 1,
    title: "Strategic Funding Partner",
    description: "Help us train 5,000+ talents and support 1,000+ job placements.",
    icon: <Handshake className="h-10 w-10 text-[#00ff00]" />,
  },
  {
    id: 2,
    title: "Program/Challenge Co-Host",
    description: "Co-create bootcamps, hackathons, and sprints.",
    icon: <Rocket className="h-10 w-10 text-[#00ff00]" />,
  },
  {
    id: 3,
    title: "Tech Resource Provider",
    description: "Provide licenses, devices, and modern tools.",
    icon: <Briefcase className="h-10 w-10 text-[#00ff00]" />,
  },
  {
    id: 4,
    title: "Corporate CSR Alignment",
    description: "Drive measurable, SDG-aligned impact in Nigerian communities.",
    icon: <Heart className="h-10 w-10 text-[#00ff00]" />,
  },
  {
    id: 5,
    title: "Mentorship & Talent Development",
    description: "Guide and inspire the next generation of innovators.",
    icon: <GraduationCap className="h-10 w-10 text-[#00ff00]" />,
  },
]

const partnerBenefits = [
  {
    id: 1,
    title: "Branding & Visibility",
    description: "Across events, social platforms, and co-branded materials.",
  },
  {
    id: 2,
    title: "Access to Top Talent",
    description: "Engage early with 5,000+ trained talents.",
  },
  {
    id: 3,
    title: "Co-branded Events & Impact Reports",
    description: "Showcase your contributions to innovation.",
  },
  {
    id: 4,
    title: "ESG/CSR Alignment with SDGs",
    description: "Quality Education, Decent Work & Economic Growth, Industry, Innovation & Infrastructure.",
  },
  {
    id: 5,
    title: "Shared Value Creation",
    description: "Collaborate to drive growth and impact.",
  },
]

const partners = [
  "Moniepoint Microfinance Bank",
  "EduAI Hub",
  "Meta",
  "Paystack",
  "Datasphir",
  "Nokia",
  "Google",
  "Co-Creation Hub",
  "UNDP",
  "ABC (American British Council)",
  "ARFH",
  "Hbque",
  "Afretech",
  "HCI UI",
  "Liquid Telecoms",
  "WACREN",
  "Vinekross Technologies",
  "Jasper",
]

export function PartnershipPage() {
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
              <h2 className="text-4xl font-bold mb-4 text-white">
                Empowering Communities through Tech, Innovation & Impact
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in creating a dynamic platform that fosters innovation, entrepreneurship, and inclusive digital
                transformation by connecting academia, industry, and communities.
              </p>
              <Button className="bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold px-8 py-3">
                Become a Partner
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating, coding, and engaging in startup activities"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">About Us</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founded in 2020 by NITDA and hosted at the University of Lagos, Nithub launched operations in 2021 to fuel
              Nigeria's digital economy and develop tech talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="bg-[#00ff00] bg-opacity-10 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-[#00ff00]" />
                  </div>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To create a dynamic platform that fosters innovation, entrepreneurship, and inclusive digital
                  transformation by connecting academia, industry, and communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="bg-[#00ff00] bg-opacity-10 p-2 rounded-full mr-3">
                    <Target className="h-6 w-6 text-[#00ff00]" />
                  </div>
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">To become Nigeria's leading research-driven technology innovation hub.</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="bg-[#00ff00] bg-opacity-10 p-2 rounded-full mr-3">
                    <Rocket className="h-6 w-6 text-[#00ff00]" />
                  </div>
                  Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-[#00ff00] mr-2" />
                    <span className="text-gray-600">Talent Upskilling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-[#00ff00] mr-2" />
                    <span className="text-gray-600">Product Development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-[#00ff00] mr-2" />
                    <span className="text-gray-600">Startup Incubation and Acceleration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Ecosystem Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">Our Ecosystem</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Nithub, we bridge the gap between ideas and impact through comprehensive programs and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-gray-200 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-[#1a2332]">Tech Training & Bootcamps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We offer comprehensive training in various tech disciplines to prepare talents for the digital
                  economy:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Frontend</Badge>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Backend</Badge>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Mobile Development</Badge>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Data Analytics</Badge>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">3D Design</Badge>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">AI</Badge>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Blockchain</Badge>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">UI/UX</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-[#1a2332]">Product Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our labs focus on developing innovative solutions to address local challenges:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-[#00ff00] mr-2 mt-1" />
                    <span className="text-gray-600">Translation systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-[#00ff00] mr-2 mt-1" />
                    <span className="text-gray-600">IoT solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-[#00ff00] mr-2 mt-1" />
                    <span className="text-gray-600">Smart farming tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-[#00ff00] mr-2 mt-1" />
                    <span className="text-gray-600">Dynamic traffic lights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-[#1a2332]">Startup Incubation & Acceleration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We support founders from ideation to investor-readiness through mentorship, resources, and networking
                  opportunities. Our structured programs help startups validate their ideas, build MVPs, and prepare for
                  market entry and growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-[#1a2332]">Community Events & Hackathons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We create platforms for learning, connecting, and growing through various community initiatives:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">AI Saturdays</Badge>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Bredhub</Badge>
                  <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">African Creative Tech</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-xl font-bold text-[#1a2332] mb-4">Our Partners & Funders</h4>
            <div className="flex flex-wrap gap-3">
              {partners.map((partner, index) => (
                <Badge key={index} variant="outline" className="border-gray-300 text-gray-700">
                  {partner}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Partner Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">Past Partner Programs</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've collaborated with industry leaders to deliver impactful programs that transform lives and
              communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerPrograms.map((program) => (
              <Card key={program.id} className="border-gray-200 hover:shadow-md transition-shadow h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[#1a2332]">{program.name}</CardTitle>
                  </div>
                  <CardDescription>
                    <Badge className="bg-[#00ff00] text-black">{program.sponsor}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">Our Impact So Far</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud of the difference we're making in Nigeria's tech ecosystem and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00ff00] bg-opacity-10 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-[#00ff00]" />
              </div>
              <div className="text-3xl font-bold text-[#1a2332] mb-2">3,000+</div>
              <div className="text-gray-600 font-medium">Students Trained</div>
              <div className="text-sm text-gray-500 mt-1">In industry-relevant tech skills</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 bg-opacity-10 rounded-full mb-4">
                <Globe className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-[#1a2332] mb-2">12+</div>
              <div className="text-gray-600 font-medium">International Internships</div>
              <div className="text-sm text-gray-500 mt-1">JP Morgan, Bloomberg, etc.</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 bg-opacity-10 rounded-full mb-4">
                <Target className="h-8 w-8 text-amber-500" />
              </div>
              <div className="text-3xl font-bold text-[#1a2332] mb-2">₦20M+</div>
              <div className="text-gray-600 font-medium">Raised for Digital Inclusion</div>
              <div className="text-sm text-gray-500 mt-1">Supporting underserved communities</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 bg-opacity-10 rounded-full mb-4">
                <Rocket className="h-8 w-8 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-[#1a2332] mb-2">28+</div>
              <div className="text-gray-600 font-medium">Startups Supported</div>
              <div className="text-sm text-gray-500 mt-1">From ideation to market</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-[#1a2332] mb-8 text-center">What Our Community Says</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-semibold text-[#1a2332]">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">Success Stories</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our alumni are making waves locally and globally, showcasing the impact of our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <Card key={story.id} className="border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#1a2332] bg-opacity-10 p-2 rounded-full">{story.icon}</div>
                    <div>
                      <Badge variant="outline" className="mb-1 border-gray-300 text-gray-700">
                        {story.category}
                      </Badge>
                      <CardTitle className="text-[#1a2332]">{story.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">Upcoming Programs</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us in the next 6-12 months as we continue to build Nigeria's tech ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingPrograms.map((program) => (
              <Card key={program.id} className="border-gray-200 hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base text-[#1a2332]">{program.name}</CardTitle>
                    <Badge className="bg-[#00ff00] text-black">{program.schedule}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">Partnership Opportunities</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We invite partners to join us in driving inclusive innovation across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partnershipOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="border-gray-200 hover:shadow-md transition-shadow text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">{opportunity.icon}</div>
                  <CardTitle className="text-[#1a2332]">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-[#1a2332] rounded-lg p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-4">Partner Benefits</h4>
                <ul className="space-y-4">
                  {partnerBenefits.map((benefit) => (
                    <li key={benefit.id} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#00ff00] mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold">{benefit.title}</p>
                        <p className="text-gray-300 text-sm">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#232d3f] p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Our Goals</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#00ff00] mr-2" />
                    <span>Raise $1M+ in funding to support training, incubation, and community programs</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#00ff00] mr-2" />
                    <span>Train 5,000+ talents in future-ready tech</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#00ff00] mr-2" />
                    <span>Facilitate 1,000+ internships and job placements</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#00ff00] mr-2" />
                    <span>Secure partners to sponsor tech training cohorts</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold">
                    Become a Partner
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">Let's Build Together</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to make an impact? Reach out to our partnership team to explore collaboration opportunities.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Partnership Lead"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h4 className="text-xl font-bold text-[#1a2332]">Partnership Lead</h4>
                <p className="text-gray-600">Nithub, University of Lagos</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#00ff00] mr-3" />
                <span className="text-gray-600">+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#00ff00] mr-3" />
                <span className="text-gray-600">partnerships@nithub.unilag.edu.ng</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-[#00ff00] mr-3" />
                <span className="text-gray-600">www.nithub.unilag.edu.ng</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button className="bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold">Schedule a Meeting</Button>
              <Button variant="outline" className="border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-white">
                Download Partnership Deck
              </Button>
            </div>
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
              <div className="mt-4 flex space-x-4">
                <a href="https://instagram.com/nithub_unilag" className="text-gray-300 hover:text-[#00ff00]">
                  Instagram: @nithub_unilag
                </a>
              </div>
              <div className="mt-2 flex space-x-4">
                <a href="https://twitter.com/nithub_lag" className="text-gray-300 hover:text-[#00ff00]">
                  Twitter: @nithub_lag
                </a>
              </div>
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
