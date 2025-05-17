import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} DokerPhoto, Воронеж</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/contacts" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Контакты
            </Link>
            <Link
              href="http://wa.me/+79935844456"
              target="_blank"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              WhatsApp
            </Link>
            <Link
              href="https://t.me/whats8979"
              target="_blank"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
