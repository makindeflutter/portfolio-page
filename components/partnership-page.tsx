"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  ExternalLink,
  Globe,
  MapPin,
  Lightbulb,
  GraduationCap,
  Rocket,
  Heart,
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
  Users,
  BarChart3,
  Zap,
  Star,
  Calendar,
  PieChart,
  TrendingUp,
  Layers,
} from "lucide-react"

const partnershipTiers = [
  {
    id: 1,
    name: "Strategic Partner",
    description: "Become a key stakeholder in Nigeria's tech innovation ecosystem",
    annualInvestment: "₦10,000,000+",
    color: "#00ff00",
    benefits: [
      "Co-branded innovation challenges and hackathons",
      "Priority access to top talent from all programs",
      "Dedicated innovation workspace at Nithub",
      "Executive mentorship opportunities",
      "Featured placement on all marketing materials",
      "Quarterly impact reports and metrics",
      "Board seat on Nithub advisory council",
      "First-look access to emerging startups",
      "Custom training programs for your team",
    ],
    icon: <Star className="h-8 w-8" />,
  },
  {
    id: 2,
    name: "Growth Partner",
    description: "Support specific programs aligned with your organization's goals",
    annualInvestment: "₦5,000,000 - ₦9,999,999",
    color: "#3b82f6",
    benefits: [
      "Sponsor a full training cohort (25-50 students)",
      "Early access to trained talent pool",
      "Co-branded events and workshops",
      "Regular mentorship opportunities",
      "Logo placement on program materials",
      "Bi-annual impact reports",
      "Participation in demo days and pitch events",
      "Content collaboration opportunities",
    ],
    icon: <TrendingUp className="h-8 w-8" />,
  },
  {
    id: 3,
    name: "Innovation Partner",
    description: "Engage with our ecosystem through targeted initiatives",
    annualInvestment: "₦1,000,000 - ₦4,999,999",
    color: "#a855f7",
    benefits: [
      "Sponsor specific workshops or events",
      "Access to talent recruitment events",
      "Mentorship opportunities",
      "Logo placement on event materials",
      "Annual impact report",
      "Invitation to demo days and community events",
      "Social media recognition",
    ],
    icon: <Lightbulb className="h-8 w-8" />,
  },
  {
    id: 4,
    name: "Community Partner",
    description: "Support our mission with resources, expertise or in-kind donations",
    annualInvestment: "Up to ₦1,000,000 or in-kind support",
    color: "#f97316",
    benefits: [
      "Provide in-kind services or products",
      "Volunteer opportunities for your team",
      "Logo placement on website",
      "Invitation to community events",
      "Social media recognition",
      "Impact updates",
    ],
    icon: <Users className="h-8 w-8" />,
  },
]

const impactMetrics = [
  {
    id: 1,
    metric: "3,000+",
    description: "Students Trained",
    icon: <GraduationCap className="h-8 w-8 text-[#00ff00]" />,
    color: "bg-[#00ff00] bg-opacity-10",
  },
  {
    id: 2,
    metric: "28+",
    description: "Startups Supported",
    icon: <Rocket className="h-8 w-8 text-blue-500" />,
    color: "bg-blue-500 bg-opacity-10",
  },
  {
    id: 3,
    metric: "₦20M+",
    description: "Raised for Digital Inclusion",
    icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
    color: "bg-purple-500 bg-opacity-10",
  },
  {
    id: 4,
    metric: "12+",
    description: "International Placements",
    icon: <Globe className="h-8 w-8 text-amber-500" />,
    color: "bg-amber-500 bg-opacity-10",
  },
]

const successStories = [
  {
    id: 1,
    partnerName: "Moniepoint Microfinance Bank",
    logo: "/placeholder.svg?height=80&width=200",
    title: "HatchDev Full Stack Development Training",
    description:
      "Moniepoint partnered with Nithub to train 98 developers in a nine-month intensive program, with 51% graduating and many securing placements in top tech companies.",
    quote:
      "Our partnership with Nithub has been transformative. We've been able to identify and nurture top tech talent while contributing to Nigeria's digital economy.",
    spokesperson: "Tosin Eniolorunda, CEO of Moniepoint",
    image: "/placeholder.svg?height=300&width=500",
    metrics: [
      { label: "Participants", value: "98" },
      { label: "Graduation Rate", value: "51%" },
      { label: "Hired", value: "32" },
    ],
  },
  {
    id: 2,
    partnerName: "UNDP & Mastercard Foundation",
    logo: "/placeholder.svg?height=80&width=200",
    title: "Young African Innovators Program",
    description:
      "In partnership with UNDP and Mastercard Foundation, Nithub trained 220 young African innovators, including individuals with disabilities, focusing on inclusive innovation.",
    quote:
      "Working with Nithub has allowed us to reach underserved communities and create pathways to digital opportunities for young Africans.",
    spokesperson: "Samuel Choritz, UNDP Nigeria Representative",
    image: "/placeholder.svg?height=300&width=500",
    metrics: [
      { label: "Participants", value: "220" },
      { label: "Countries", value: "6" },
      { label: "Projects", value: "45" },
    ],
  },
]

const partnershipOpportunities = [
  {
    id: 1,
    title: "Talent Development",
    description: "Sponsor training programs and gain access to a pipeline of skilled tech talent.",
    icon: <GraduationCap className="h-10 w-10 text-[#00ff00]" />,
    examples: ["NITDEV Program", "Data Science Bootcamps", "UI/UX Training"],
  },
  {
    id: 2,
    title: "Innovation Challenges",
    description: "Co-create hackathons and challenges focused on solving specific industry problems.",
    icon: <Zap className="h-10 w-10 text-[#00ff00]" />,
    examples: ["Fintech Innovation Challenge", "Healthcare Hackathon", "Sustainability Sprint"],
  },
  {
    id: 3,
    title: "Startup Support",
    description: "Provide resources and mentorship to early-stage startups in your industry.",
    icon: <Rocket className="h-10 w-10 text-[#00ff00]" />,
    examples: ["Incubation Program", "Acceleration Program", "Investor Demo Days"],
  },
  {
    id: 4,
    title: "Research & Development",
    description: "Collaborate on applied research projects with academic and industry experts.",
    icon: <Layers className="h-10 w-10 text-[#00ff00]" />,
    examples: ["AI Research Lab", "Blockchain Applications", "IoT Solutions"],
  },
  {
    id: 5,
    title: "Community Building",
    description: "Support events and initiatives that strengthen Nigeria's tech ecosystem.",
    icon: <Users className="h-10 w-10 text-[#00ff00]" />,
    examples: ["Tech Meetups", "Industry Panels", "Networking Events"],
  },
  {
    id: 6,
    title: "Digital Inclusion",
    description: "Help bridge the digital divide by supporting underserved communities.",
    icon: <Heart className="h-10 w-10 text-[#00ff00]" />,
    examples: ["Women in Tech", "Rural Tech Access", "Disability Inclusion"],
  },
]

const partnerBenefits = [
  {
    id: 1,
    title: "Talent Access",
    description: "First access to a pipeline of skilled tech talent trained in industry-relevant skills.",
    icon: <Users className="h-6 w-6 text-[#00ff00]" />,
  },
  {
    id: 2,
    title: "Brand Visibility",
    description: "Prominent placement across digital platforms, events, and marketing materials.",
    icon: <Globe className="h-6 w-6 text-[#00ff00]" />,
  },
  {
    id: 3,
    title: "Innovation Pipeline",
    description: "Early exposure to cutting-edge solutions and startups addressing market challenges.",
    icon: <Lightbulb className="h-6 w-6 text-[#00ff00]" />,
  },
  {
    id: 4,
    title: "ESG Impact",
    description: "Measurable contributions to SDGs with detailed impact reporting.",
    icon: <PieChart className="h-6 w-6 text-[#00ff00]" />,
  },
  {
    id: 5,
    title: "Market Insights",
    description: "Access to research, trends, and insights from Nigeria's tech ecosystem.",
    icon: <BarChart3 className="h-6 w-6 text-[#00ff00]" />,
  },
  {
    id: 6,
    title: "Community Engagement",
    description: "Opportunities to connect with tech leaders, founders, and innovators.",
    icon: <Calendar className="h-6 w-6 text-[#00ff00]" />,
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

const testimonials = [
  {
    id: 1,
    quote:
      "Our partnership with Nithub has been instrumental in our CSR strategy. We've been able to directly impact Nigeria's tech ecosystem while also identifying top talent for our organization.",
    author: "Adeola Johnson",
    position: "Head of Corporate Affairs, Moniepoint",
    image: "/placeholder.svg?height=80&width=80",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    id: 2,
    quote:
      "Working with Nithub has given us unprecedented access to innovative solutions and talented developers. The ROI on our partnership has exceeded our expectations.",
    author: "Michael Oluwaseun",
    position: "CTO, Paystack",
    image: "/placeholder.svg?height=80&width=80",
    logo: "/placeholder.svg?height=40&width=120",
  },
  {
    id: 3,
    quote:
      "The quality of talent coming out of Nithub's programs is exceptional. As partners, we've been able to shape curriculum to address industry needs while supporting Nigeria's digital transformation.",
    author: "Sarah Okonkwo",
    position: "Country Director, Google Nigeria",
    image: "/placeholder.svg?height=80&width=80",
    logo: "/placeholder.svg?height=40&width=120",
  },
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
              <Link href="/events">
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  Events
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
      <section className="bg-[#1a2332] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge className="bg-[#00ff00] text-black mb-4 px-3 py-1 text-sm">Partner With Us</Badge>
              <h2 className="text-5xl font-bold mb-6 text-white leading-tight">
                Drive Innovation.
                <br />
                Create Impact.
                <br />
                Transform Nigeria.
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join Nigeria's leading tech innovation hub in building the next generation of tech talent and startups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold px-8 py-6 text-lg">
                  Become a Partner
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#1a2332] px-8 py-6 text-lg"
                >
                  Download Partnership Deck
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaborating on startup projects"
                  className="rounded-lg shadow-lg max-w-full h-auto z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#00ff00] rounded-lg p-6 shadow-lg">
                  <div className="text-3xl font-bold text-black">18+</div>
                  <div className="text-sm font-medium text-black">Corporate Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric) => (
              <div
                key={metric.id}
                className="text-center p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${metric.color} rounded-full mb-4`}>
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold text-[#1a2332] mb-2">{metric.metric}</div>
                <div className="text-gray-600 font-medium">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#1a2332] text-white mb-4">Why Partner With Us</Badge>
            <h3 className="text-4xl font-bold text-[#1a2332] mb-4">The Value We Deliver</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our partnerships create measurable impact while delivering tangible benefits to your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit) => (
              <Card key={benefit.id} className="border-gray-200 hover:shadow-md transition-shadow h-full">
                <CardHeader>
                  <div className="bg-[#00ff00] bg-opacity-10 p-3 inline-flex rounded-lg mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl text-[#1a2332]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#1a2332] text-white mb-4">Partnership Tiers</Badge>
            <h3 className="text-4xl font-bold text-[#1a2332] mb-4">Choose Your Level of Engagement</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer flexible partnership options designed to align with your organization's goals and resources
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {partnershipTiers.map((tier) => (
              <Card
                key={tier.id}
                className={`border-2 ${tier.id === 1 ? "border-[#00ff00]" : "border-gray-200"} hover:shadow-lg transition-shadow h-full flex flex-col`}
              >
                <CardHeader className={`${tier.id === 1 ? "bg-[#00ff00] bg-opacity-10" : ""}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-full" style={{ backgroundColor: `${tier.color}20`, color: tier.color }}>
                      {tier.icon}
                    </div>
                    {tier.id === 1 && <Badge className="bg-[#00ff00] text-black">Most Popular</Badge>}
                  </div>
                  <CardTitle className="text-2xl text-[#1a2332]">{tier.name}</CardTitle>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <p className="text-sm text-gray-500">Annual Investment</p>
                    <p className="text-2xl font-bold text-[#1a2332]">{tier.annualInvestment}</p>
                  </div>
                  <div className="space-y-3">
                    {tier.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#00ff00] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${tier.id === 1 ? "bg-[#00ff00] hover:bg-[#00dd00] text-black" : "bg-[#1a2332] hover:bg-[#2a3342]"}`}
                  >
                    Select {tier.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Looking for a custom partnership solution? We can tailor a package to meet your specific needs.
            </p>
            <Button variant="outline" className="border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-white">
              Contact Us for Custom Options
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#1a2332] text-white mb-4">Engagement Areas</Badge>
            <h3 className="text-4xl font-bold text-[#1a2332] mb-4">Partnership Opportunities</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the different ways your organization can engage with our ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="border-gray-200 hover:shadow-md transition-shadow h-full">
                <CardHeader>
                  <div className="bg-[#1a2332] bg-opacity-10 p-3 inline-flex rounded-lg mb-4">{opportunity.icon}</div>
                  <CardTitle className="text-xl text-[#1a2332]">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm font-medium text-[#1a2332] mb-2">Examples:</p>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.examples.map((example, index) => (
                        <Badge key={index} variant="outline" className="border-gray-300 text-gray-700">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#1a2332] text-white mb-4">Success Stories</Badge>
            <h3 className="text-4xl font-bold text-[#1a2332] mb-4">Partner Impact Showcase</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our partners are making a difference in Nigeria's tech ecosystem
            </p>
          </div>

          <div className="space-y-16">
            {successStories.map((story, index) => (
              <div
                key={story.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="mb-6">
                    <img src={story.logo || "/placeholder.svg"} alt={story.partnerName} className="h-12 mb-4" />
                    <h4 className="text-2xl font-bold text-[#1a2332] mb-2">{story.title}</h4>
                    <p className="text-gray-600">{story.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {story.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-[#1a2332]">{metric.value}</div>
                        <div className="text-sm text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#1a2332] bg-opacity-5 p-6 rounded-lg">
                    <p className="italic text-gray-700 mb-4">"{story.quote}"</p>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold text-[#1a2332]">{story.spokesperson}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1a2332]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#00ff00] text-black mb-4">Testimonials</Badge>
            <h3 className="text-4xl font-bold text-white mb-4">What Our Partners Say</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear directly from organizations that have partnered with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-[#232d3f] border-none text-white">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <img src={testimonial.logo || "/placeholder.svg"} alt="Partner logo" className="h-8" />
                  </div>
                  <p className="text-gray-300 italic mb-6 text-lg">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">Our Partners & Funders</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join these leading organizations in supporting Nigeria's tech ecosystem
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100">
                  <span className="text-gray-700 font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#1a2332] text-white mb-4">Next Steps</Badge>
            <h3 className="text-4xl font-bold text-[#1a2332] mb-4">Partnership Process</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple four-step process to establish a meaningful partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 h-full">
                <div className="bg-[#00ff00] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h4 className="text-xl font-bold text-[#1a2332] mb-2">Initial Consultation</h4>
                <p className="text-gray-600">
                  We'll discuss your goals, interests, and how they align with our mission and programs.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-gray-300" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 h-full">
                <div className="bg-[#00ff00] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h4 className="text-xl font-bold text-[#1a2332] mb-2">Partnership Design</h4>
                <p className="text-gray-600">
                  We'll craft a tailored partnership proposal that meets your specific objectives and budget.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-gray-300" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 h-full">
                <div className="bg-[#00ff00] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h4 className="text-xl font-bold text-[#1a2332] mb-2">Implementation</h4>
                <p className="text-gray-600">
                  We'll execute the partnership plan with clear milestones, deliverables, and communication.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-gray-300" />
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 h-full">
                <div className="bg-[#00ff00] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                  4
                </div>
                <h4 className="text-xl font-bold text-[#1a2332] mb-2">Impact Reporting</h4>
                <p className="text-gray-600">
                  We'll provide regular updates and comprehensive reports on the impact of your partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a2332]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Join us in building Nigeria's tech future. Schedule a consultation with our partnership team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold px-8 py-6 text-lg">
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1a2332] px-8 py-6 text-lg"
              >
                Download Partnership Deck
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold text-[#1a2332] mb-4">Contact Our Partnership Team</h4>
                <p className="text-gray-600 mb-6">
                  Have questions or ready to explore partnership opportunities? Our team is here to help.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#00ff00] mr-3" />
                    <span className="text-gray-600">partnerships@nithub.unilag.edu.ng</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#00ff00] mr-3" />
                    <span className="text-gray-600">+234 (0) 123 456 7890</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#00ff00] mr-3" />
                    <span className="text-gray-600">University of Lagos, Akoka, Lagos, Nigeria</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <a href="https://twitter.com/nithub_lag" className="text-gray-600 hover:text-[#00ff00]">
                    Twitter: @nithub_lag
                  </a>
                  <a href="https://instagram.com/nithub_unilag" className="text-gray-600 hover:text-[#00ff00]">
                    Instagram: @nithub_unilag
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-[#1a2332] mb-4">Partnership Inquiry</h4>
                <p className="text-gray-600 mb-4">
                  Fill out this form and our team will get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Interest</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff00]">
                      <option>Select an option</option>
                      <option>Strategic Partner</option>
                      <option>Growth Partner</option>
                      <option>Innovation Partner</option>
                      <option>Community Partner</option>
                      <option>Custom Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ff00]"
                      rows={4}
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#1a2332] hover:bg-[#2a3342]">Submit Inquiry</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">Frequently Asked Questions</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Common questions about partnering with Nithub</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>What types of organizations can partner with Nithub?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We welcome partnerships with a diverse range of organizations including corporations, foundations,
                      NGOs, government agencies, academic institutions, and international organizations that share our
                      commitment to tech innovation and digital inclusion in Nigeria.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>What is the minimum partnership duration?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      While we prefer partnerships of at least one year to create meaningful impact, we also offer
                      shorter-term collaborations for specific events, programs, or initiatives. Our team can work with
                      you to determine the optimal timeframe based on your goals.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Can we partner on specific initiatives rather than a full program?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We offer flexible partnership options that can be tailored to specific initiatives, events, or
                      focus areas that align with your organization's interests and objectives.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="financial" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>What is the typical investment range for partnerships?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Our partnership investments range from ₦500,000 for smaller initiatives to ₦10,000,000+ for
                      strategic partnerships. We also welcome in-kind contributions such as technology resources,
                      mentorship, or expertise.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Are there tax benefits for partnering with Nithub?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      As a university-based innovation hub, contributions to Nithub may qualify for tax benefits under
                      Nigerian corporate social responsibility regulations. We recommend consulting with your tax
                      advisor for specific guidance.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>How are partnership funds allocated?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Partnership funds are allocated based on the specific agreement and focus areas. Typically, 70-80%
                      goes directly to program implementation, with the remainder supporting operational costs. We
                      provide detailed financial reporting to all partners.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="process" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>How long does it take to establish a partnership?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      The partnership process typically takes 2-4 weeks from initial consultation to agreement
                      finalization. For more complex partnerships or those requiring extensive customization, the
                      timeline may extend to 6-8 weeks.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>What reporting do partners receive?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Partners receive regular updates and comprehensive impact reports tailored to their partnership
                      level. Strategic Partners receive quarterly reports, while other tiers typically receive bi-annual
                      or annual reports with metrics aligned to partnership objectives.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Can we modify our partnership agreement over time?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Yes, we understand that organizational priorities evolve. We conduct regular partnership reviews
                      and can adjust focus areas, investment levels, or engagement strategies as needed to ensure
                      continued alignment with your goals.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
