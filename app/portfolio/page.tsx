"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { PieChart, Wallet, TrendingUp } from "lucide-react"

export default function FinancialDashboard() {
    const [debtProgress, setDebtProgress] = useState(65)
    const [budgetSavings, setBudgetSavings] = useState(500)
    const [portfolioBalance, setPortfolioBalance] = useState(10000)

    return (
        <div className="flex flex-col gap-8 max-w-3xl mx-auto pt-12 pb-12"> {/* Increased gap between cards */}
            {/* Debt Management Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <PieChart className="h-4 w-4" />
                        Debt Management
                    </CardTitle>
                    <CardDescription>Track your debt repayment progress</CardDescription>
                </CardHeader>
                <CardContent>
                    <Progress value={debtProgress} className="w-full" />
                    <p className="mt-2 text-sm text-muted-foreground">{debtProgress}% of debt repaid</p>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => setDebtProgress(Math.min(100, debtProgress + 5))}>
                        Make Payment
                    </Button>
                </CardFooter>
            </Card>

            {/* Budgeting Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Wallet className="h-4 w-4" />
                        Budgeting
                    </CardTitle>
                    <CardDescription>Monitor your monthly savings</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">${budgetSavings}</div>
                    <p className="text-sm text-muted-foreground">Current monthly savings</p>
                    <div className="mt-4 flex gap-2">
                        <Badge>Groceries</Badge>
                        <Badge>Utilities</Badge>
                        <Badge>Entertainment</Badge>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => setBudgetSavings(budgetSavings + 50)}>
                        Add to Savings
                    </Button>
                </CardFooter>
            </Card>

            {/* Portfolio Optimization Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Portfolio Optimization
                    </CardTitle>
                    <CardDescription>Analyze and balance your investments</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">${portfolioBalance.toLocaleString()}</div>
                    <p className="text-sm text-muted-foreground">Total portfolio value</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        <div>
                            <div className="text-sm font-medium">Stocks</div>
                            <Progress value={60} className="w-full" />
                        </div>
                        <div>
                            <div className="text-sm font-medium">Bonds</div>
                            <Progress value={30} className="w-full" />
                        </div>
                        <div>
                            <div className="text-sm font-medium">Real Estate</div>
                            <Progress value={10} className="w-full" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => setPortfolioBalance(portfolioBalance * 1.05)}>
                        Rebalance Portfolio
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}