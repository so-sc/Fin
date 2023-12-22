import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col py-6 w-full shrink-0 items-center px-4 md:px-6 bg-background">
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Link className="flex items-center justify-center" href="/">
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
      <div className="text-gray-500 mt-4">
        © 2023 Finvest. All rights reserved.
      </div>
    </footer>
  )
}
