"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="DokerPhoto" width={150} height={50} className="grayscale-filter" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/organizations" className="text-gray-800 hover:text-gray-600 transition-colors">
            Для организаций
          </Link>
          <Link href="/private" className="text-gray-800 hover:text-gray-600 transition-colors">
            Частные фотосессии
          </Link>
          <Link href="/reportage" className="text-gray-800 hover:text-gray-600 transition-colors">
            Репортажи
          </Link>
          <Link href="/contacts" className="text-gray-800 hover:text-gray-600 transition-colors">
            Контакты
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/organizations"
              className="text-gray-800 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Для организаций
            </Link>
            <Link
              href="/private"
              className="text-gray-800 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Частные фотосессии
            </Link>
            <Link
              href="/reportage"
              className="text-gray-800 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Репортажи
            </Link>
            <Link
              href="/contacts"
              className="text-gray-800 hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
