'use client'

import { useState } from 'react'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import VideoGrid from './components/VideoGrid'
import SearchBar from './components/SearchBar'
import UserProfile from './components/UserProfile'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Build A Netflix Style
        </h1>

        <div className="grid gap-6">
          <Header />
          <VideoPlayer />
          <VideoGrid />
          <SearchBar />
          <UserProfile />
        </div>
      </div>
    </main>
  )
}