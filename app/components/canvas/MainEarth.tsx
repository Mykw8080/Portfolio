'use client';
import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function MainEarth() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="w-full flex justify-center items-center pt-[40vh] md:pt-32 relative">
            {visible && (
                <Spline scene="https://prod.spline.design/6VfGj6YlCKk4eouZ/scene.splinecode" />
            )}
            <div className="absolute inset-0 z-10 w-full h-full" />
        </div>
    );
}
