import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background shadow-md">
      <Link
        className="relative flex items-center justify-center w-20 h-6"
        href="/"
      >
        {/* <span className="font-bold">Finvest</span> */}
        <Image src="/finvest.png" alt="Finvest Logo" fill className="z-10" />
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/education"
        >
          Educate
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/contract"
        >
          Contract
        </Link>
        {/* <ModeToggle /> */}
        <Button variant="outline" asChild>
          <Link href="/onboarding">Sign up</Link>
        </Button>
      </nav>
    </header>
  )
}
