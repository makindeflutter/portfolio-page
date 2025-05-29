"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
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
  TrendingUp,
  Briefcase,
  UserCheck,
  Target,
} from "lucide-react"

interface Startup {
  id: string
  name: string
  description: string
  industry: string
  stage: string
  team_size: number
  location: string
  website?: string
  logo?: string
  founded?: number
  tags: string[]
  status: string
  revenue_growth?: string
  testimonial?: string
  mentor?: string
  progress_update?: string
  nomination_reason?: string
  created_at: string
  updated_at: string
}

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
const statuses = ["All", "Alumni", "Current", "Nominated"]

export function StartupPortfolio() {
  const [startups, setStartups] = useState<Startup[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("All")
  const [selectedStage, setSelectedStage] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")

  useEffect(() => {
    fetchStartups()
  }, [])

  const fetchStartups = async () => {
    setLoading(true)
    const { data, error } = await supabase.from("startups").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching startups:", error)
    } else {
      setStartups(data || [])
    }
    setLoading(false)
  }

  const filteredStartups = startups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesIndustry = selectedIndustry === "All" || startup.industry === selectedIndustry
    const matchesStage = selectedStage === "All" || startup.stage === selectedStage
    const matchesStatus = selectedStatus === "All" || startup.status === selectedStatus

    return matchesSearch && matchesIndustry && matchesStage && matchesStatus
  })

  const stats = {
    alumni: startups.filter((s) => s.status === "Alumni").length,
    current: startups.filter((s) => s.status === "Current").length,
    nominated: startups.filter((s) => s.status === "Nominated").length,
    total: startups.length,
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00ff00] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading startup portfolio...</p>
        </div>
      </div>
    )
  }

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
              <div className="text-3xl font-bold text-[#1a2332] mb-2">{stats.alumni}</div>
              <div className="text-gray-600 font-medium">Alumni Companies</div>
              <div className="text-sm text-gray-500 mt-1">Successfully graduated</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 bg-opacity-10 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-[#1a2332] mb-2">{stats.current}</div>
              <div className="text-gray-600 font-medium">Current Participants</div>
              <div className="text-sm text-gray-500 mt-1">Actively building</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 bg-opacity-10 rounded-full mb-4">
                <Target className="h-8 w-8 text-amber-500" />
              </div>
              <div className="text-3xl font-bold text-[#1a2332] mb-2">{stats.nominated}</div>
              <div className="text-gray-600 font-medium">Nominated Startups</div>
              <div className="text-sm text-gray-500 mt-1">Ready to start</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 bg-opacity-10 rounded-full mb-4">
                <UserCheck className="h-8 w-8 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-[#1a2332] mb-2">{stats.total}</div>
              <div className="text-gray-600 font-medium">Total Startups</div>
              <div className="text-sm text-gray-500 mt-1">In our ecosystem</div>
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
                        src={startup.logo || "/placeholder.svg?height=60&width=60"}
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
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3 text-gray-600">{startup.description}</CardDescription>

                  <div className="space-y-3">
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
                        <div className="text-gray-500">Founded</div>
                        <div className="font-medium text-[#1a2332]">{startup.founded || "N/A"}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Team Size</div>
                        <div className="font-medium text-[#1a2332]">
                          <Users className="inline-block h-4 w-4 mr-1" />
                          {startup.team_size}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500">
                          {startup.status === "Alumni" && startup.revenue_growth ? "Revenue Growth" : "Status"}
                        </div>
                        <div
                          className={`font-medium ${startup.status === "Alumni" && startup.revenue_growth ? "text-[#00ff00]" : "text-[#1a2332]"}`}
                        >
                          {startup.status === "Alumni" && startup.revenue_growth
                            ? `+${startup.revenue_growth}`
                            : startup.status}
                        </div>
                      </div>
                    </div>

                    {startup.status === "Alumni" && startup.testimonial && (
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <p className="text-sm italic mb-2 text-gray-700">"{startup.testimonial}"</p>
                        {startup.mentor && <p className="text-xs text-gray-500">Mentor: {startup.mentor}</p>}
                      </div>
                    )}

                    {startup.status === "Current" && startup.progress_update && (
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <p className="text-sm font-medium text-blue-900 mb-1">Current Progress:</p>
                        <p className="text-sm text-blue-700">{startup.progress_update}</p>
                        {startup.mentor && <p className="text-xs text-gray-500 mt-2">Mentor: {startup.mentor}</p>}
                      </div>
                    )}

                    {startup.status === "Nominated" && startup.nomination_reason && (
                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                        <p className="text-sm font-medium text-amber-900 mb-1">Why We Selected Them:</p>
                        <p className="text-sm text-amber-700">{startup.nomination_reason}</p>
                      </div>
                    )}

                    {startup.website && (
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
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStartups.length === 0 && !loading && (
            <div className="text-center py-12">
              <div className="text-gray-600 text-lg">No startups found matching your criteria.</div>
              <Button
                variant="outline"
                className="mt-4 border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-white"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedIndustry("All")
                  setSelectedStage("All")
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
