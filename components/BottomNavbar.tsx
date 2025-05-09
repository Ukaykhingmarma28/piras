'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { CgMoreR } from "react-icons/cg";
import { RiCalendarScheduleLine } from "react-icons/ri";


export default function BottomNavbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/pages/home', icon: <FaHome />, label: 'Home' },
    { href: '/pages/schedule', icon: <RiCalendarScheduleLine />, label: 'Schedule' },
    { href: '/pages/class', icon: <SiGoogleclassroom />, label: 'Class' },
    { href: '/pages/more', icon: <CgMoreR />, label: 'More' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t backdrop-blur-md border-gray-200 z-50">
      <div className="flex justify-around items-center py-4 px-2">
        {navItems.map(({ href, icon, label }) => (
          <NavItem
            key={href}
            href={href}
            icon={icon}
            label={label}
            active={pathname === href}
          />
        ))}
      </div>
    </nav>
  )
}

function NavItem({
  href,
  icon,
  label,
  active,
}: {
  href: string
  icon: React.ReactNode
  label: string
  active: boolean
}) {
  return (
    <Link href={href} className="flex flex-col items-center text-sm group">
      <div
        className={`text-xl ${
          active ? 'text-violet-400' : 'text-gray-600 group-hover:text-black'
        } transition`}
      >
        {icon}
      </div>
      <span
        className={`font-semibold ${
          active ? 'text-violet-400' : 'text-gray-600 group-hover:text-black'
        } transition`}
      >
        {label}
      </span>
    </Link>
  )
}
