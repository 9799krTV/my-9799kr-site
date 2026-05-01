"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [input, setInput] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === '9799kr') {
      // Set access for 24 hours (86400 seconds)
      document.cookie = "site_access=9799kr; path=/; max-age=86400; SameSite=Lax"
      router.push('/')
      router.refresh()
    } else {
      alert('Unauthorized Access')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-sm space-y-6 border border-white/10 p-8 rounded-2xl bg-zinc-900 shadow-2xl">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-black italic tracking-tighter text-blue-500">9799KR TV</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Private Broadcast Access</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="password" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-black border border-white/10 p-3 rounded-lg w-full outline-none focus:border-blue-600 transition-all text-center tracking-widest"
            placeholder="••••••"
            autoFocus
          />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-bold uppercase tracking-widest text-xs transition-all active:scale-95">
            Authenticate
          </button>
        </form>
      </div>
    </div>
  )
}
