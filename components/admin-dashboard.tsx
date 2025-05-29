"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Plus, Edit, Trash2, LogOut, Users, TrendingUp, Briefcase, Target } from "lucide-react"
import { StartupForm } from "./startup-form"
import type { User } from "@supabase/supabase-js"

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

interface AdminDashboardProps {
  user: User
  onLogout: () => void
}

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [startups, setStartups] = useState<Startup[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingStartup, setEditingStartup] = useState<Startup | null>(null)

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

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this startup?")) return

    const { error } = await supabase.from("startups").delete().eq("id", id)

    if (error) {
      console.error("Error deleting startup:", error)
    } else {
      fetchStartups()
    }
  }

  const handleEdit = (startup: Startup) => {
    setEditingStartup(startup)
    setShowForm(true)
  }

  const handleFormClose = () => {
    setShowForm(false)
    setEditingStartup(null)
    fetchStartups()
  }

  const stats = {
    total: startups.length,
    alumni: startups.filter((s) => s.status === "Alumni").length,
    current: startups.filter((s) => s.status === "Current").length,
    nominated: startups.filter((s) => s.status === "Nominated").length,
  }

  if (showForm) {
    return <StartupForm startup={editingStartup} onClose={handleFormClose} onBack={() => setShowForm(false)} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1a2332] border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-[#00ff00]" />
              <div>
                <h1 className="text-2xl font-bold text-white">nithub Admin</h1>
                <p className="text-sm text-gray-300">Manage startup portfolio</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Welcome, {user.email}</span>
              <Button onClick={onLogout} variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Startups</p>
                  <p className="text-2xl font-bold text-[#1a2332]">{stats.total}</p>
                </div>
                <Users className="h-8 w-8 text-[#00ff00]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Alumni</p>
                  <p className="text-2xl font-bold text-[#1a2332]">{stats.alumni}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Current</p>
                  <p className="text-2xl font-bold text-[#1a2332]">{stats.current}</p>
                </div>
                <Briefcase className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Nominated</p>
                  <p className="text-2xl font-bold text-[#1a2332]">{stats.nominated}</p>
                </div>
                <Target className="h-8 w-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1a2332]">Manage Startups</h2>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Startup
          </Button>
        </div>

        {/* Startups List */}
        {loading ? (
          <div className="text-center py-8">Loading startups...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {startups.map((startup) => (
              <Card key={startup.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-[#1a2332]">{startup.name}</CardTitle>
                      <CardDescription className="flex items-center space-x-2">
                        <span>{startup.location}</span>
                        <Badge variant="secondary">{startup.industry}</Badge>
                        <Badge
                          variant={
                            startup.status === "Alumni"
                              ? "default"
                              : startup.status === "Current"
                                ? "destructive"
                                : "outline"
                          }
                        >
                          {startup.status}
                        </Badge>
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(startup)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(startup.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{startup.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Team Size:</span>
                      <span className="ml-2 font-medium">{startup.team_size}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Stage:</span>
                      <span className="ml-2 font-medium">{startup.stage}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Founded:</span>
                      <span className="ml-2 font-medium">{startup.founded || "N/A"}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Website:</span>
                      {startup.website ? (
                        <a
                          href={startup.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-600 hover:underline text-xs"
                        >
                          Visit
                        </a>
                      ) : (
                        <span className="ml-2 text-gray-400">N/A</span>
                      )}
                    </div>
                  </div>
                  {startup.tags.length > 0 && (
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-1">
                        {startup.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {startups.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-600 text-lg mb-4">No startups found</div>
            <Button
              onClick={() => setShowForm(true)}
              className="bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Startup
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
