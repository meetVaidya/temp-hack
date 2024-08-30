'use client'

import { useState, useEffect, useRef } from 'react';
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Image from "next/image";
import HorizontalNavbar from '@/components/HorizontalNavbar';

export default function Home() {
    const [showExtraContent, setShowExtraContent] = useState(false);
    const macbookScrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (macbookScrollRef.current) {
                const { bottom } = macbookScrollRef.current.getBoundingClientRect();
                if (bottom <= window.innerHeight && !showExtraContent) {
                    setShowExtraContent(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [showExtraContent]);

    return (
        <>
            <HorizontalNavbar />
            <div ref={macbookScrollRef}>
                <MacbookScroll showGradient title={'Slay your finance game. No Cap'} />
            </div>
            {showExtraContent && (
                <div>
                    {/* Your extra content goes here */}
                    <h1>This content appears after scrolling!</h1>
                    <p>Add images, text, or any other content you need.</p>
                </div>
            )}
        </>
    );
}