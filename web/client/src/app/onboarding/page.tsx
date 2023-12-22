"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormEvent, useState } from "react"

export default function Onboarding() {
  const [details, setDetails] = useState({
    name: "",
    age: "",
    gender: "0",
    area: "0",
    phone: "",
    disablity: "0",
    experience: "0",
  })

  function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(details)
  }

  return (
    <div className="mx-auto max-w-lg space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold mt-8">Onboarding Form</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill in the details to complete the onboarding process.
        </p>
      </div>
      <Card className="space-y-4 p-4">
        <CardHeader className="p-0 px-6 pt-6">
          <h2 className="text-2xl font-semibold">Personal Information</h2>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onFormSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  defaultValue={details.name}
                  onChange={(e) => {
                    setDetails({
                      ...details,
                      name: e.target.value,
                    })
                  }}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  placeholder="Enter your age"
                  defaultValue={details.age}
                  onChange={(e) => {
                    setDetails({
                      ...details,
                      age: e.target.value,
                    })
                  }}
                  required
                  type="number"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Gender</Label>
              <div className="grid grid-cols-2 gap-4">
                <RadioGroup
                  defaultValue="0"
                  className="flex gap-4"
                  onValueChange={(e) => {
                    setDetails({
                      ...details,
                      age: e,
                    })
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Area</Label>
              <div className="grid grid-cols-2 gap-4">
                <RadioGroup
                  defaultValue="0"
                  className="flex gap-4"
                  onValueChange={(e) => {
                    setDetails({
                      ...details,
                      age: e,
                    })
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0" id="rural" />
                    <Label htmlFor="rural">Rural</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="urban" />
                    <Label htmlFor="urban">Urban</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input
                id="phone-number"
                placeholder="Enter your phone number"
                defaultValue={details.phone}
                onChange={(e) => {
                  setDetails({
                    ...details,
                    phone: e.target.value,
                  })
                }}
                required
                type="tel"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disability">Has Disability?</Label>
              <div className="space-y-2">
                <Select
                  defaultValue="0"
                  onValueChange={(e) => {
                    setDetails({
                      ...details,
                      age: e,
                    })
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Disability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="0">None</SelectItem>
                      <SelectItem value="1">Physical</SelectItem>
                      <SelectItem value="2">Hearing</SelectItem>
                      <SelectItem value="3">Visual</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Experience in Investing</Label>
              <div className="space-y-2">
                <Select
                  defaultValue="0"
                  onValueChange={(e) => {
                    setDetails({
                      ...details,
                      experience: e,
                    })
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="0">0 years</SelectItem>
                      <SelectItem value="1">1-3 years</SelectItem>
                      <SelectItem value="2">4-10 years</SelectItem>
                      <SelectItem value="3">More than 10 years</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
