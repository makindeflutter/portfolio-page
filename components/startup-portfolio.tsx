"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Building2,
  ExternalLink,
  Globe,
  MapPin,
  Search,
  Users,
  Award,
  ArrowRight,
  TrendingUp,
  Briefcase,
  UserCheck,
  Target,
} from "lucide-react"

const startups = [
  // Alumni Companies
  {
    id: 1,
    name: "PayFlow Nigeria",
    description:
      "Digital payment platform enabling seamless transactions for small businesses across Nigeria with mobile money integration.",
    industry: "FinTech",
    stage: "Pre-Seed",
    teamSize: 12,
    location: "Lagos, Nigeria",
    website: "https://payflow.ng",
    logo: "/placeholder.svg?height=60&width=60",
    founded: 2022,
    tags: ["Payments", "Mobile Money", "SME"],
    programs: [
      {
        type: "Incubator",
        cohort: "Fall 2022",
        status: "Completed",
        startDate: "September 2022",
        graduationDate: "February 2023",
        preStage: "Idea",
        postStage: "MVP",
      },
      {
        type: "Accelerator",
        cohort: "Spring 2023",
        status: "Completed",
        startDate: "March 2023",
        graduationDate: "August 2023",
        preStage: "MVP",
        postStage: "Pre-Seed",
      },
    ],
    currentProgram: null,
    status: "Alumni",
    revenueGrowth: "400%",
    testimonial:
      "The hub's mentorship and network helped us navigate Nigeria's regulatory landscape and scale across 3 states.",
    mentor: "Adebayo Ogunlesi, Former GTBank Executive",
  },
  {
    id: 2,
    name: "AgriConnect",
    description:
      "Connecting smallholder farmers directly with buyers and providing access to modern farming techniques and microfinance.",
    industry: "AgriTech",
    stage: "Pre-Seed",
    teamSize: 15,
    location: "Abuja, Nigeria",
    website: "https://agriconnect.ng",
    logo: "/placeholder.svg?height=60&width=60",
    founded: 2023,
    tags: ["Agriculture", "Marketplace", "Microfinance"],
    programs: [
      {
        type: "Incubator",
        cohort: "Fall 2023",
        status: "Completed",
        startDate: "September 2023",
        graduationDate: "March 2024",
        preStage: "Prototype",
        postStage: "Pre-Seed",
      },
    ],
    currentProgram: null,
    status: "Alumni",
    revenueGrowth: "250%",
    testimonial:
      "The hub connected us with key stakeholders in Nigeria's agricultural value chain and helped us reach 5,000+ farmers.",
    mentor: "Dr. Funmi Adebayo, Agricultural Development Expert",
  },
  {
    id: 3,
    name: "HealthCare Plus",
    description:
      "Telemedicine platform providing affordable healthcare access to underserved communities across Nigeria.",
    industry: "HealthTech",
    stage: "Pre-Seed",
    teamSize: 18,
    location: "Port Harcourt, Nigeria",
    website: "https://healthcareplus.ng",
    logo: "/placeholder.svg?height=60&width=60",
    founded: 2021,
    tags: ["Telemedicine", "Rural Health", "Accessibility"],
    programs: [
      {
        type: "Incubator",
        cohort: "Summer 2021",
        status: "Completed",
        startDate: "June 2021",
        graduationDate: "December 2021",
        preStage: "Idea",
        postStage: "MVP",
      },
      {
        type: "Accelerator",
        cohort: "Winter 2022",
        status: "Completed",
        startDate: "January 2022",
        graduationDate: "June 2022",
        preStage: "MVP",
        postStage: "Pre-Seed",
      },
    ],
    currentProgram: null,
    status: "Alumni",
    revenueGrowth: "600%",
    testimonial:
      "The hub's healthcare network helped us partner with NHIS and expand to rural communities in 6 states.",
    mentor: "Dr. Kemi Odukoya, Public Health Specialist",
  },
  {
    id: 4,
    name: "EduNaija",
    description:
      "Digital learning platform providing quality education content in local languages for Nigerian students.",
    industry: "EdTech",
    stage: "Pre-Seed",
    teamSize: 10,
    location: "Kano, Nigeria",
    website: "https://edunaija.com",
    logo: "/placeholder.svg?height=60&width=60",
    founded: 2023,
    tags: ["Education", "Local Languages", "K-12"],
    programs: [
      {
        type: "Incubator",
        cohort: "Spring 2024",
        status: "Completed",
        startDate: "March 2024",
        graduationDate: "September 2024",
        preStage: "Concept",
        postStage: "Pre-Seed",
      },
    ],
    currentProgram: null,
    status: "Alumni",
    revenueGrowth: "180%",
    testimonial: "From concept to serving 10,000+ students across Northern Nigeria - the hub made it possible.",
    mentor: "Prof. Ibrahim Garba, Education Technology Researcher",
  },
  // Current Participants
  {
    id: 5,
    name: "LogiMove",
    description:
      "Last-mile delivery platform optimizing logistics for e-commerce and traditional businesses across Nigerian cities.",
    industry: "LogiTech",
    stage: "Pre-Seed",
    teamSize: 8,
    location: "Ibadan, Nigeria",
    website: "https://logimove.ng",
    logo: "/placeholder.svg?height=60&width=60",
    founded: 2024,
    tags: ["Logistics", "E-commerce", "Last-mile"],
    programs: [
      {
        type: "Incubator",
        cohort: "Summer 2024",
        status: "Completed",
        startDate: "June 2024",
        graduationDate: "December 2024",
        preStage: "Idea",
        postStage: "MVP",
      },
    ],
    currentProgram: {
      type: "Accelerator",
      cohort: "Winter 2025",
      status: "Current",
      startDate: "January 2025",
      expectedGraduation: "June 2025",
      preStage: "MVP",
      currentStage: "Pre-Seed",
    },
    status: "Current",
    progressUpdate: "Completed pilot in Lagos and Ibadan, onboarded 200+ delivery partners.",
    mentor: "Chidi Okwu, Former Jumia Logistics Head",
  },
  {
    id: 6,
    name: "CleanEnergy Solutions",
    description:
      "Solar energy solutions for homes and small businesses, addressing Nigeria's power challenges with affordable renewable energy.",
    industry: "CleanTech",
    stage: "Pre-Seed",
    teamSize: 12,
    location: "Enugu, Nigeria",
    website: "https://cleanenergy.ng",
    logo: "/placeholder.svg?height=60&width=60",
    founded: 2024,
    tags: ["Solar", "Renewable Energy", "Power"],
    programs: [],
    currentProgram: {
      type: "Incubator",
      cohort: "Winter 2025",
      status: "Current",
      startDate: "December 2024",
      expectedGraduation: "June 2025",
      preStage: "Idea",
      currentStage: "Pre-Seed",
    },
    status: "Current",
    progressUpdate: "Installed solar systems in 50+ homes, developing pay-as-you-go model.",
    mentor: "Eng. Tunde Salihu, Renewable Energy Consultant",
  },
  // Nominated Companies
  {
    id: 7,
    name: "SecureNaija",
    description:
      "Cybersecurity platform protecting Nigerian businesses from digital threats with AI-powered threat detection.",
    industry: "CyberSecurity",
    stage: "Pre-Seed",
    teamSize: 6,
    location: "Lagos, Nigeria",
    website: "https://securenaija.com",
    logo: "/placeholder.svg?height=60&width=60",
    founded: 2024,
    tags: ["Cybersecurity", "AI", "Business Protection"],
    programs: [],
    currentProgram: {
      type: "Accelerator",
      cohort: "Spring 2025",
      status: "Nominated",
      startDate: "March 2025",
      expectedGraduation: "August 2025",
      preStage: "Prototype",
      currentStage: "Pre-Seed",
    },
    status: "Nominated",
    nominationReason:
      "Strong technical team addressing critical cybersecurity needs of Nigerian businesses with innovative AI approach.",
    mentor: "TBD",
  },
  {
    id: 8,
    name: "WasteToWealth",
    description:
      "Converting plastic waste into valuable products while creating jobs and addressing Nigeria's waste management challenges.",
    industry: "Sustainability",
    stage: "Pre-Seed",
    teamSize: 9,
    location: "Kaduna, Nigeria",
    website: "https://wastetowealth.ng",
    logo: "/placeholder.svg?height=60&width=60",
    founded: 2024,
    tags: ["Waste Management", "Recycling", "Circular Economy"],
    programs: [],
    currentProgram: {
      type: "Incubator",
      cohort: "Spring 2025",
      status: "Nominated",
      startDate: "February 2025",
      expectedGraduation: "August 2025",
      preStage: "Prototype",
      currentStage: "Pre-Seed",
    },
    status: "Nominated",
    nominationReason:
      "Addressing critical environmental challenge while creating economic opportunities for local communities.",
    mentor: "TBD",
  },
  {
    id: 9,
    name: "MedSupply Chain",
    description:
      "Pharmaceutical supply chain platform ensuring authentic medicines reach patients across Nigeria's healthcare system.",
    industry: "HealthTech",
    stage: "Pre-Seed",
    teamSize: 7,
    location: "Abuja, Nigeria",
    website: "https://medsupplychain.ng",
    logo: "/placeholder.svg?height=60&width=60",
    founded: 2024,
    tags: ["Pharmaceuticals", "Supply Chain", "Drug Authentication"],
    programs: [],
    currentProgram: {
      type: "Incubator",
      cohort: "Spring 2025",
      status: "Nominated",
      startDate: "February 2025",
      expectedGraduation: "August 2025",
      preStage: "Research",
      currentStage: "Pre-Seed",
    },
    status: "Nominated",
    nominationReason:
      "Tackling counterfeit drug problem with blockchain technology and strong partnerships with NAFDAC.",
    mentor: "TBD",
  },
  {
    id: 10,
    name: "SkillUp Nigeria",
    description:
      "Digital skills training platform preparing Nigerian youth for the global digital economy with industry-relevant courses.",
    industry: "EdTech",
    stage: "Pre-Seed",
    teamSize: 8,
    location: "Calabar, Nigeria",
    website: "https://skillupnigeria.com",
    logo: "/placeholder.svg?height=60&width=60",
    founded: 2024,
    tags: ["Skills Training", "Youth Development", "Digital Economy"],
    programs: [],
    currentProgram: {
      type: "Accelerator",
      cohort: "Spring 2025",
      status: "Nominated",
      startDate: "March 2025",
      expectedGraduation: "August 2025",
      preStage: "Beta",
      currentStage: "Pre-Seed",
    },
    status: "Nominated",
    nominationReason:
      "Addressing Nigeria's digital skills gap with comprehensive training programs and strong industry partnerships.",
    mentor: "TBD",
  },
]

const industries = [
  "All",
  "FinTech",
  "AgriTech",
  "HealthTech",
  "EdTech",
  "LogiTech",
  "CleanTech",
  "CyberSecurity",
  "Sustainability",
]
const stages = ["All", "Pre-Seed"]
const programs = ["All", "Incubator", "Accelerator", "Multiple Programs"]
const cohorts = ["All", "Winter 2022", "Fall 2022", "Spring 2023", "Fall 2023", "Spring 2024", "Summer 2024"]
const statuses = ["All", "Alumni", "Current", "Nominated"]

export function StartupPortfolio() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("All")
  const [selectedStage, setSelectedStage] = useState("All")
  const [selectedProgram, setSelectedProgram] = useState("All")
  const [selectedCohort, setSelectedCohort] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")

  const filteredStartups = startups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesIndustry = selectedIndustry === "All" || startup.industry === selectedIndustry
    const matchesStage = selectedStage === "All" || startup.stage === selectedStage

    // Program matching logic
    const matchesProgram =
      selectedProgram === "All" ||
      (selectedProgram === "Multiple Programs" &&
        ((startup.programs && startup.programs.length > 0 && startup.currentProgram) ||
          (startup.programs && startup.programs.length > 1))) ||
      (selectedProgram !== "Multiple Programs" &&
        ((startup.currentProgram && startup.currentProgram.type === selectedProgram) ||
          (startup.programs && startup.programs.some((p) => p.type === selectedProgram))))

    // Cohort matching logic
    const matchesCohort =
      selectedCohort === "All" ||
      (startup.currentProgram && startup.currentProgram.cohort === selectedCohort) ||
      (startup.programs && startup.programs.some((p) => p.cohort === selectedCohort))

    const matchesStatus = selectedStatus === "All" || startup.status === selectedStatus

    return matchesSearch && matchesIndustry && matchesStage && matchesProgram && matchesCohort && matchesStatus
  })

  const totalTeamMembers = startups.reduce((sum, startup) => sum + startup.teamSize, 0)
  const multiProgramStartups = startups.filter(
    (s) => (s.programs && s.programs.length > 0 && s.currentProgram) || (s.programs && s.programs.length > 1),
  ).length

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
            <Button className="bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold">
              <ExternalLink className="h-4 w-4 mr-2" />
              Apply Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#1a2332] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4 text-white">Our Startup Ecosystem</h2>
              <p className="text-xl text-gray-300 mb-8">
                Discover innovative Nigerian startups solving local challenges and building solutions for Africa and
                beyond. From Lagos to Kano, our entrepreneurs are transforming industries and creating opportunities.
              </p>
              <Button className="bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold px-8 py-3">
                Explore Startups
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Innovation Hub Workspace - Team collaborating on startup projects"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a2332] mb-4">Our Impact</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building a thriving ecosystem of innovation and entrepreneurship across Nigeria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00ff00] bg-opacity-10 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-[#00ff00]" />
              </div>
              <div className="text-3xl font-bold text-[#1a2332] mb-2">
                {startups.filter((s) => s.status === "Alumni").length}
              </div>
              <div className="text-gray-600 font-medium">Alumni Companies</div>
              <div className="text-sm text-gray-500 mt-1">Successfully graduated</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 bg-opacity-10 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-[#1a2332] mb-2">
                {startups.filter((s) => s.status === "Current").length}
              </div>
              <div className="text-gray-600 font-medium">Current Participants</div>
              <div className="text-sm text-gray-500 mt-1">Actively building</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 bg-opacity-10 rounded-full mb-4">
                <Target className="h-8 w-8 text-amber-500" />
              </div>
              <div className="text-3xl font-bold text-[#1a2332] mb-2">
                {startups.filter((s) => s.status === "Nominated").length}
              </div>
              <div className="text-gray-600 font-medium">Nominated Startups</div>
              <div className="text-sm text-gray-500 mt-1">Ready to start</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 bg-opacity-10 rounded-full mb-4">
                <UserCheck className="h-8 w-8 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-[#1a2332] mb-2">{multiProgramStartups}</div>
              <div className="text-gray-600 font-medium">Multi-Program</div>
              <div className="text-sm text-gray-500 mt-1">Advanced through both programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search startups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger className="w-40 border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger className="w-40 border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]">
                  <SelectValue placeholder="Program" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program} value={program}>
                      {program}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStage} onValueChange={setSelectedStage}>
                <SelectTrigger className="w-40 border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]">
                  <SelectValue placeholder="Stage" />
                </SelectTrigger>
                <SelectContent>
                  {stages.map((stage) => (
                    <SelectItem key={stage} value={stage}>
                      {stage}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedCohort} onValueChange={setSelectedCohort}>
                <SelectTrigger className="w-40 border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]">
                  <SelectValue placeholder="Cohort" />
                </SelectTrigger>
                <SelectContent>
                  {cohorts.map((cohort) => (
                    <SelectItem key={cohort} value={cohort}>
                      {cohort}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-40 border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStartups.map((startup) => (
              <Card key={startup.id} className="hover:shadow-lg transition-shadow border-gray-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={startup.logo || "/placeholder.svg"}
                        alt={`${startup.name} logo`}
                        className="w-12 h-12 rounded-lg border border-gray-200"
                      />
                      <div>
                        <CardTitle className="text-lg text-[#1a2332]">{startup.name}</CardTitle>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-3 w-3 mr-1" />
                          {startup.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                        {startup.stage}
                      </Badge>
                      <Badge
                        variant={
                          startup.status === "Alumni"
                            ? "default"
                            : startup.status === "Current"
                              ? "destructive"
                              : "outline"
                        }
                        className={`text-xs ${
                          startup.status === "Alumni"
                            ? "bg-[#1a2332] text-white"
                            : startup.status === "Current"
                              ? "bg-red-500 text-white"
                              : "border-gray-300 text-gray-700"
                        }`}
                      >
                        {startup.status}
                      </Badge>
                      {((startup.programs && startup.programs.length > 0 && startup.currentProgram) ||
                        (startup.programs && startup.programs.length > 1)) && (
                        <Badge className="bg-[#00ff00] text-black hover:bg-[#00dd00]">
                          <Award className="h-3 w-3 mr-1" />
                          Multi-Program
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3 text-gray-600">{startup.description}</CardDescription>

                  <div className="space-y-3">
                    {/* Program Journey */}
                    {((startup.programs && startup.programs.length > 0) || startup.currentProgram) && (
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <h4 className="text-sm font-semibold mb-2 flex items-center text-[#1a2332]">
                          <Award className="h-4 w-4 mr-1 text-[#00ff00]" />
                          Program Journey
                        </h4>
                        <div className="space-y-2">
                          {startup.programs &&
                            startup.programs.map((program, idx) => (
                              <div key={idx} className="flex items-center text-xs">
                                <Badge
                                  variant={program.type === "Accelerator" ? "default" : "secondary"}
                                  className={`mr-2 ${
                                    program.type === "Accelerator"
                                      ? "bg-[#1a2332] text-white"
                                      : "bg-gray-200 text-gray-700"
                                  }`}
                                >
                                  {program.type}
                                </Badge>
                                <span className="text-gray-600">{program.cohort}</span>
                                <ArrowRight className="h-3 w-3 mx-2 text-gray-400" />
                                <Badge variant="outline" className="text-xs border-gray-300 text-gray-700">
                                  {program.preStage} → {program.postStage}
                                </Badge>
                              </div>
                            ))}

                          {startup.currentProgram && (
                            <div className="flex items-center text-xs">
                              <Badge
                                variant={startup.currentProgram.type === "Accelerator" ? "default" : "secondary"}
                                className={`mr-2 ${
                                  startup.currentProgram.type === "Accelerator"
                                    ? "bg-[#1a2332] text-white"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                              >
                                {startup.currentProgram.type}
                              </Badge>
                              <span className="text-gray-600">{startup.currentProgram.cohort}</span>
                              <ArrowRight className="h-3 w-3 mx-2 text-gray-400" />
                              <Badge variant="outline" className="text-xs border-gray-300 text-gray-700">
                                {startup.currentProgram.preStage} → {startup.currentProgram.currentStage}
                              </Badge>
                              <Badge className="ml-2 bg-blue-100 text-blue-800 border-blue-200">Current</Badge>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1">
                      {startup.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-gray-300 text-gray-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Industry</div>
                        <div className="font-medium text-[#1a2332]">{startup.industry}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">
                          {startup.status === "Alumni"
                            ? "Graduated"
                            : startup.status === "Current"
                              ? "Started"
                              : "Starts"}
                        </div>
                        <div className="font-medium text-[#1a2332]">
                          {startup.status === "Alumni"
                            ? startup.programs[startup.programs.length - 1].graduationDate
                            : startup.currentProgram?.startDate}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500">Team Size</div>
                        <div className="font-medium text-[#1a2332]">
                          <Users className="inline-block h-4 w-4 mr-1" />
                          {startup.teamSize}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500">
                          {startup.status === "Alumni"
                            ? "Revenue Growth"
                            : startup.status === "Current"
                              ? "Expected Grad"
                              : "Expected Grad"}
                        </div>
                        <div
                          className={`font-medium ${startup.status === "Alumni" ? "text-[#00ff00]" : "text-[#1a2332]"}`}
                        >
                          {startup.status === "Alumni"
                            ? `+${startup.revenueGrowth}`
                            : startup.currentProgram?.expectedGraduation}
                        </div>
                      </div>
                    </div>

                    {startup.status === "Alumni" && startup.testimonial && (
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <p className="text-sm italic mb-2 text-gray-700">"{startup.testimonial}"</p>
                        <p className="text-xs text-gray-500">Mentor: {startup.mentor}</p>
                      </div>
                    )}

                    {startup.status === "Current" && startup.progressUpdate && (
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <p className="text-sm font-medium text-blue-900 mb-1">Current Progress:</p>
                        <p className="text-sm text-blue-700">{startup.progressUpdate}</p>
                        <p className="text-xs text-gray-500 mt-2">Mentor: {startup.mentor}</p>
                      </div>
                    )}

                    {startup.status === "Nominated" && startup.nominationReason && (
                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                        <p className="text-sm font-medium text-amber-900 mb-1">Why We Selected Them:</p>
                        <p className="text-sm text-amber-700">{startup.nominationReason}</p>
                      </div>
                    )}

                    <Button
                      variant="outline"
                      className="w-full border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-white"
                      asChild
                    >
                      <a href={startup.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStartups.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-600 text-lg">No startups found matching your criteria.</div>
              <Button
                variant="outline"
                className="mt-4 border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-white"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedIndustry("All")
                  setSelectedStage("All")
                  setSelectedProgram("All")
                  setSelectedCohort("All")
                  setSelectedStatus("All")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2332] py-12 mt-16">
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
