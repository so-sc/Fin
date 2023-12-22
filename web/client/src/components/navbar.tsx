"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const [language, setLanguage] = useState("en")
  const router = useRouter()
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
        {/* <Select defaultValue="en">
          <SelectTrigger>
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="en">English</SelectItem>
              <SelectItem
                value="ka"
                onSelect={() =>
                  router.push(
                    "https://finvest--rudra-vercel-app.translate.goog/?_x_tr_sl=en&_x_tr_tl=kn&_x_tr_hl=en-US&_x_tr_pto=wapp"
                  )
                }
              >
                Kannada
              </SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
              <SelectItem value="ml">Malayalam</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> */}
        <div className="flex list-none gap-4">
          <Link
            className="border rounded-full cursor-pointer p-1"
            href="https://finvest-rudra.vercel.app"
          >
            A
          </Link>
          <Link
            className="border rounded-full cursor-pointer p-1"
            href="https://finvest--rudra-vercel-app.translate.goog/?_x_tr_sl=en&_x_tr_tl=kn&_x_tr_hl=en-US&_x_tr_pto=wapp"
          >
            ಕ
          </Link>
          <Link
            className="border rounded-full cursor-pointer p-1"
            href="https://finvest--rudra-vercel-app.translate.goog/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=en-US&_x_tr_pto=wapp&_x_tr_hist=true"
          >
            क
          </Link>
          <Link
            className="border rounded-full cursor-pointer p-1"
            href="https://finvest--rudra-vercel-app.translate.goog/?_x_tr_sl=en&_x_tr_tl=ml&_x_tr_hl=en-US&_x_tr_pto=wapp&_x_tr_hist=true"
          >
            ക
          </Link>
        </div>
        {/* <ModeToggle /> */}
        <Button variant="outline" asChild>
          <Link href="/onboarding">Sign up</Link>
        </Button>
      </nav>
    </header>
  )
}
