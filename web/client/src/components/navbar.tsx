import { DollarSignIcon } from "@/app/page"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-md">
      <Link className="flex items-center justify-center" href="/">
        <span className="font-bold">Finvest</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Services
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/contract"
        >
          Contract
        </Link>
        <Button variant="outline" asChild>
          <Link href="/onboarding">Sign up</Link>
        </Button>
      </nav>
    </header>
  )
}
