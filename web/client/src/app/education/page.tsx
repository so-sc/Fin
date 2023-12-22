import { Card, CardContent } from "@/components/ui/card"
import eduContent from "@/lib/education.json"

export default function Component() {
  return (
    <section className="container mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          One Stop Destination.
        </h1>
        <h2 className="text-2xl text-center">
          To all financial topics you need to know.
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="rounded-md shadow-md overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Physics</h2>
            <p className="text-gray-600 mb-4">
              Physics is the natural science that studies matter, its motion and
              behavior through space and time, and the related entities of
              energy and force.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
