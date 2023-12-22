import TextToSpeech from "@/components/text-to-speech"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1">
        <section className="bg-image w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-no-repeat">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Your Friendly Financial App.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Helping you make informed decisions for a brighter financial
                  future.
                </p>
              </div>
              <Button>Get Started</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
              Our Services
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <CurrencyIcon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Financial Education</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-500">
                    Unlocking Opportunities with Comprehensive Financial
                    Education.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CurrencyIcon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">
                    Intelligent Investment Planning
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-500">
                    We help you make the best investment decisions based on your
                    personal financial goals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CurrencyIcon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Contracts</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-500">
                    Transforming Text into Tailored Legal Agreements with Ease.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CurrencyIcon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Micro Loans</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-500">
                    Empowering Financial Inclusion, One Small Loan at a Time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CurrencyIcon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Pots</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-500">
                    Collaborative Money Pots for Seamless and Shared Financial
                    Goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col py-6 w-full shrink-0 items-center px-4 md:px-6 bg-white">
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link className="flex items-center justify-center" href="#">
              <span className="font-bold">Finvest</span>
            </Link>
            <div className="text-gray-500">by Rudra</div>
          </div>
          <div className="flex items-center space-x-4">
            <Link className="text-gray-500 hover:text-gray-700" href="#">
              <FacebookIcon className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="text-gray-500 hover:text-gray-700" href="#">
              <TwitterIcon className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="text-gray-500 hover:text-gray-700" href="#">
              <InstagramIcon className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <TextToSpeech />
        <div className="text-gray-500 text-xs mt-4">
          © 2023 Finvest. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function CurrencyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}

export function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function GraduationCapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
