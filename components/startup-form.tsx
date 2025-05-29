"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Save, X } from "lucide-react"

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
}

interface StartupFormProps {
  startup?: Startup | null
  onClose: () => void
  onBack: () => void
}

const industries = [
  "FinTech",
  "AgriTech",
  "HealthTech",
  "EdTech",
  "LogiTech",
  "CleanTech",
  "CyberSecurity",
  "Sustainability",
]

const stages = ["Pre-Seed", "Seed", "Series A", "Series B"]
const statuses = ["Alumni", "Current", "Nominated"]

export function StartupForm({ startup, onClose, onBack }: StartupFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    industry: "",
    stage: "Pre-Seed",
    team_size: 1,
    location: "",
    website: "",
    logo: "",
    founded: new Date().getFullYear(),
    tags: [] as string[],
    status: "Nominated",
    revenue_growth: "",
    testimonial: "",
    mentor: "",
    progress_update: "",
    nomination_reason: "",
  })
  const [newTag, setNewTag] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (startup) {
      setFormData({
        name: startup.name,
        description: startup.description,
        industry: startup.industry,
        stage: startup.stage,
        team_size: startup.team_size,
        location: startup.location,
        website: startup.website || "",
        logo: startup.logo || "",
        founded: startup.founded || new Date().getFullYear(),
        tags: startup.tags || [],
        status: startup.status,
        revenue_growth: startup.revenue_growth || "",
        testimonial: startup.testimonial || "",
        mentor: startup.mentor || "",
        progress_update: startup.progress_update || "",
        nomination_reason: startup.nomination_reason || "",
      })
    }
  }, [startup])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const dataToSubmit = {
        ...formData,
        founded: formData.founded || null,
        website: formData.website || null,
        logo: formData.logo || null,
        revenue_growth: formData.revenue_growth || null,
        testimonial: formData.testimonial || null,
        mentor: formData.mentor || null,
        progress_update: formData.progress_update || null,
        nomination_reason: formData.nomination_reason || null,
      }

      if (startup) {
        // Update existing startup
        const { error } = await supabase.from("startups").update(dataToSubmit).eq("id", startup.id)

        if (error) throw error
      } else {
        // Create new startup
        const { error } = await supabase.from("startups").insert([dataToSubmit])

        if (error) throw error
      }

      onClose()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" onClick={onBack}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                  <CardTitle>{startup ? "Edit Startup" : "Add New Startup"}</CardTitle>
                  <CardDescription>
                    {startup ? "Update startup information" : "Add a new startup to the portfolio"}
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                    className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location *</label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    required
                    placeholder="e.g., Lagos, Nigeria"
                    className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description *</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  required
                  rows={3}
                  className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Industry *</label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
                  >
                    <SelectTrigger className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Stage *</label>
                  <Select
                    value={formData.stage}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, stage: value }))}
                  >
                    <SelectTrigger className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {stages.map((stage) => (
                        <SelectItem key={stage} value={stage}>
                          {stage}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Status *</label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, status: value }))}
                  >
                    <SelectTrigger className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]">
                      <SelectValue />
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Team Size *</label>
                  <Input
                    type="number"
                    min="1"
                    value={formData.team_size}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, team_size: Number.parseInt(e.target.value) || 1 }))
                    }
                    required
                    className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Founded</label>
                  <Input
                    type="number"
                    min="2000"
                    max={new Date().getFullYear()}
                    value={formData.founded}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        founded: Number.parseInt(e.target.value) || new Date().getFullYear(),
                      }))
                    }
                    className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Website</label>
                  <Input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                    placeholder="https://example.com"
                    className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium mb-2">Tags</label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                    className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                  />
                  <Button type="button" onClick={addTag} variant="outline">
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Status-specific fields */}
              {formData.status === "Alumni" && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Revenue Growth</label>
                    <Input
                      value={formData.revenue_growth}
                      onChange={(e) => setFormData((prev) => ({ ...prev, revenue_growth: e.target.value }))}
                      placeholder="e.g., 400%"
                      className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Testimonial</label>
                    <Textarea
                      value={formData.testimonial}
                      onChange={(e) => setFormData((prev) => ({ ...prev, testimonial: e.target.value }))}
                      rows={3}
                      className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mentor</label>
                    <Input
                      value={formData.mentor}
                      onChange={(e) => setFormData((prev) => ({ ...prev, mentor: e.target.value }))}
                      placeholder="e.g., John Doe, Industry Expert"
                      className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                    />
                  </div>
                </>
              )}

              {formData.status === "Current" && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Progress Update</label>
                    <Textarea
                      value={formData.progress_update}
                      onChange={(e) => setFormData((prev) => ({ ...prev, progress_update: e.target.value }))}
                      rows={3}
                      className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mentor</label>
                    <Input
                      value={formData.mentor}
                      onChange={(e) => setFormData((prev) => ({ ...prev, mentor: e.target.value }))}
                      placeholder="e.g., John Doe, Industry Expert"
                      className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                    />
                  </div>
                </>
              )}

              {formData.status === "Nominated" && (
                <div>
                  <label className="block text-sm font-medium mb-2">Nomination Reason</label>
                  <Textarea
                    value={formData.nomination_reason}
                    onChange={(e) => setFormData((prev) => ({ ...prev, nomination_reason: e.target.value }))}
                    rows={3}
                    placeholder="Why was this startup selected for nomination?"
                    className="border-gray-300 focus:border-[#00ff00] focus:ring-[#00ff00]"
                  />
                </div>
              )}

              {error && <div className="text-red-600 text-sm">{error}</div>}

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={onBack}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-[#00ff00] hover:bg-[#00dd00] text-black font-semibold"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {loading ? "Saving..." : startup ? "Update Startup" : "Create Startup"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
