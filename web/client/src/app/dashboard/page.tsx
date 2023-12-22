import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen p-8">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Hello, Deveesh!</h1>
          <p className="text-sm text-gray-500">
            Here&apos;s a quick overview of your account.
          </p>
        </div>
        <Button>Settings</Button>
      </header>
      <main className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <Avatar className="w-20 h-20">
              <AvatarImage
                alt="User avatar"
                src="/placeholder.svg?height=80&width=80"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">Deveesh Shetty</h2>
            <p className="text-gray-500">deveeshshetty@gmail.com</p>
            <Badge className="p-2 bg-green-500 text-white">Pro User</Badge>
          </CardContent>
          <CardFooter className="py-4">
            <Button className="w-full" variant="outline">
              Edit Profile
            </Button>
          </CardFooter>
        </Card>
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Balance</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <p className="text-4xl font-bold">Rs. 78,123.00</p>
            <p className="text-gray-500">Your current balance</p>
          </CardContent>
          <CardFooter className="py-4">
            <Button className="w-full">Add Funds</Button>
          </CardFooter>
        </Card>
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Explore</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center space-y-4">
              <PlaneIcon className="w-12 h-12" />
              <h3 className="text-lg font-semibold">Sent</h3>
              <p className="text-gray-500">123 Items</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <PackageIcon className="w-12 h-12" />
              <h3 className="text-lg font-semibold">Received</h3>
              <p className="text-gray-500">456 Items</p>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>My Cards</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 border rounded-md">
              <p>Card 1</p>
            </div>
            <div className="p-4 border rounded-md">
              <p>Card 2</p>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Explore Mutual Funds</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="p-4 border rounded-md">
              <p className="text-lg font-bold mb-2">Equity Mutual Funds</p>
              <p>
                Equity mutual funds primarily invest in stocks, providing
                investors with an opportunity to participate in the potential
                capital appreciation of a diversified portfolio of companies.
              </p>
            </div>
            <div className="p-4 border rounded-md">
              <p className="text-lg font-bold mb-2">Debt Mutual Funds</p>
              <p>
                Debt mutual funds invest in fixed-income securities such as
                government bonds, corporate bonds, and other debt instruments.
              </p>
            </div>
            <div className="p-4 border rounded-md">
              <p className="text-lg font-bold mb-2">Index Mutual Funds</p>
              <p>
                Index mutual funds replicate the performance of a specific
                market index, such as the S&P 500.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function PackageIcon(props: any) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

function PlaneIcon(props: any) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}
