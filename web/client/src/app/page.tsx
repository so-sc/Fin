import TextToSpeech from "@/components/text-to-speech"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CurrencyIcon } from "lucide-react"
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
              <Button asChild>
                <Link href="/education">Get Started</Link>
              </Button>
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
                <CardHeader className="flex items-center gap-2 p-0 px-6 pt-6">
                  <CurrencyIcon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Contracts</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-500">
                    Transforming Text into Tailored Legal Agreements with Ease.
                  </p>
                  <Link className="text-blue-500 mt-4" href="/contract">
                    Learn more
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-2 p-0 px-6 pt-6">
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
                <CardHeader className="flex items-center gap-2 p-0 px-6 pt-6">
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
              <Card>
                <CardHeader className="flex items-center gap-2 p-0 px-6 pt-6">
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
              <Card className="col-span-2">
                <CardHeader className="flex items-center gap-2 p-0 px-6 pt-6">
                  <CurrencyIcon className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Financial Education</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-500">
                    Navigate the complexities of personal finance with our
                    comprehensive educational platform. From budgeting
                    fundamentals to savvy investment insights.
                  </p>
                  <Link className="text-blue-500 mt-4" href="/education">
                    Learn more
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <TextToSpeech />
    </div>
  )
}
