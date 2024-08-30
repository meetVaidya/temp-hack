'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search } from "lucide-react"
import SparklineGroup from '@/components/SparklineGroup'
import StockCarousel from '@/components/StockCarousel'

// Mock authentication function (replace with your actual auth logic)
const isAuthenticated = () => {
    // This should check if the user is actually authenticated
    return true
}

export default function Dashboard() {
    const [userName, setUserName] = useState("Warren")
    const [date, setDate] = useState("")
    const router = useRouter()

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/') // Redirect to home if not authenticated
        }

        const currentDate = new Date()
        setDate(currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }, [router])

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">Hello, {userName}</h1>
                        <p className="text-gray-400">{date}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost">For you</Button>
                        <Button variant="ghost">Screener</Button>
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="bg-gray-800 border-gray-700"
                        />
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-gray-900 border-gray-800">
                        {/* <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                                <span className="text-green-400">The markets are bullish</span>
                                <ArrowLeft className="rotate-45" />
                            </CardTitle>
                        </CardHeader> */}
                        {/* <CardContent>
                            <S
                        </CardContent> */}
                        <StockCarousel />
                    </Card>

                    <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                                <span>Sector Performance</span>
                                <span className="text-sm text-gray-400">% price change</span>
                                {/* <SparklineGroup /> */}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {/* Add sector performance data here */}
                            {/* This would ideally be a separate component */}
                        </CardContent>
                    </Card>
                </div>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Markets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent>
                                {/* Add market data table here */}
                                {/* This would ideally be a separate component */}
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent>
                                {/* Add S&P 500 Performance chart here */}
                                {/* This would require a charting library like recharts or react-chartjs-2 */}
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    )
}