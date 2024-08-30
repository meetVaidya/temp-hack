import { CalendarIcon } from 'lucide-react'

export default function Component() {
    const storylineEvents = [
        {
            date: "1954",
            title: "The Beginning",
            description: "You, our young alchemist`, is born in a small town on the coast."
        },
        {
            date: "1972",
            title: "The Journey Begins",
            description: "You leaves her hometown to pursue the academy of your dreams in the big city."
        },
        {
            date: "1980",
            title: "Career Success",
            description: "After years of hard work, you becomes the youngest alchemist in the country's history."
        },
        {
            date: "1995",
            title: "Personal Triumph",
            description: "Sarah publishes her first book, sharing her journey and inspiring others."
        },
        {
            date: "2010",
            title: "Giving Back",
            description: "Sarah establishes a foundation to support young entrepreneurs from small towns."
        },
        {
            date: "2023",
            title: "Legacy",
            description: "Sarah's foundation has helped launch over 1000 successful businesses worldwide."
        }
    ]

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-900 text-gray-100">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-100">Your Journey Alchemist</h1>
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>

                {storylineEvents.map((event, index) => (
                    <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''
                        }`}>
                        <div className="w-5/12"></div>
                        <div className="z-20">
                            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">
                                <CalendarIcon className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-md p-6 w-5/12 border border-gray-700">
                            <div className="flex items-center mb-2">
                                <CalendarIcon className="w-4 h-4 mr-2 text-primary" />
                                <span className="text-sm text-gray-400">{event.date}</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-100">{event.title}</h3>
                            <p className="text-gray-300">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}