import Link from 'next/link'
import { Flame } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function HorizontalNavbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-black text-white">
            <div className="flex items-center space-x-8">
                <Link href="/" className="flex items-center space-x-2">
                    <Flame className="h-6 w-6" />
                    <span className="sr-only">Company Logo</span>
                </Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="/features" className="flex items-center">
                        Features
                        <Badge variant="secondary" className="ml-2 bg-yellow-500 text-black text-xs">New</Badge>
                    </Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/updates">Updates</Link>
                    <Link href="/app">App</Link>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Button variant="ghost" className="text-white">
                    <LoginLink>Sign in</LoginLink>
                </Button>

                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    <RegisterLink>Sign up</RegisterLink>
                </Button>

            </div>
        </nav>
    )
}