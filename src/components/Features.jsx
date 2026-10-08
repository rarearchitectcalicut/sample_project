"use client";

import { LazyMotion, domAnimation, m } from "motion/react";

const Pin = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
    </svg>
);

const Card = ({
    number,
    title,
    description,
    colorTheme = "blue",
    className = "",
    rotate = "",
    colors: customColors,
}) => {
    const defaultBgColors = {
        orange: "bg-orange-50 dark:bg-orange-500/10",
        blue: "bg-blue-50 dark:bg-blue-500/10",
        purple: "bg-purple-50 dark:bg-purple-500/10",
    };
    const defaultTextColors = {
        orange: "text-orange-500 dark:text-orange-400",
        blue: "text-blue-600 dark:text-blue-400",
        purple: "text-purple-600 dark:text-purple-400",
    };
    const defaultBorderColors = {
        orange: "border-orange-100 dark:border-orange-500/20",
        blue: "border-blue-100 dark:border-blue-500/20",
        purple: "border-purple-100 dark:border-purple-500/20",
    };

    const bgColor = customColors?.bg || defaultBgColors[colorTheme];
    const textColor = customColors?.text || defaultTextColors[colorTheme];
    const borderColor = customColors?.border || defaultBorderColors[colorTheme];

    return (
        <div
            className={`relative w-full md:w-[280px] transition-transform duration-300 hover:z-30 hover:scale-105 ${rotate} ${className}`}
        >
            <div className="bg-white dark:bg-neutral-900 p-2 rounded-[25px] shadow-[0px_10px_20px_0px_#D3D3D3] dark:shadow-none border border-neutral-100 dark:border-neutral-800">
                <Pin className={`w-8 h-8 ${textColor} z-20 mb-6 mx-auto`} />
                <div
                    className={`${bgColor} border ${borderColor} rounded-[15px] p-[15px] h-full flex flex-col relative overflow-hidden`}
                >
                    <span
                        className={`${textColor} text-4xl font-handwriting mb-5`}
                        style={{
                            fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
                        }}
                    >
                        {number}
                    </span>
                    <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 leading-none mb-[10px]">
                        {title}
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm/5 tracking-tight">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

// Spreads cards closer to container edges on desktop
const DEFAULT_CARD_POSITIONS = [
    { className: "md:absolute md:top-0 md:left-[2%]", rotate: "rotate-6" },
    { className: "md:absolute md:top-[120px] md:right-[2%]", rotate: "-rotate-6" },
    { className: "md:absolute md:top-[450px] md:left-[2%]", rotate: "rotate-6" },
    { className: "md:absolute md:top-[570px] md:right-[2%]", rotate: "-rotate-6" },
    { className: "md:absolute md:top-[850px] md:left-[2%]", rotate: "rotate-6" },
];

export default function Features({
    features,
    className = "",
    stepPositions,
}) {
    const defaultFeatures = [
        {
            title: "Upload Materials",
            description:
                "Import your lecture slides, PDFs, or notes to instantly build your central study hub.",
            colorTheme: "orange",
        },
        {
            title: "Generate Summaries",
            description:
                "Convert complex chapters into interactive flashcards, key concepts, and quick guides.",
            colorTheme: "blue",
        },
        {
            title: "Smart Scheduling",
            description:
                "Automate your revision timetable using spaced repetition based on upcoming exam dates.",
            colorTheme: "purple",
        },
        {
            title: "Interactive Practice",
            description:
                "Test your recall with tailored practice quizzes, active recall drills, and AI assistance.",
            colorTheme: "orange",
        },
        {
            title: "Track Mastery",
            description:
                "Identify knowledge gaps, monitor study hours, and watch your exam readiness score grow.",
            colorTheme: "blue",
        },
    ];

    const data = features && features.length > 0 ? features : defaultFeatures;
    const positions = stepPositions || DEFAULT_CARD_POSITIONS;

    let height = 1130;
    if (data.length === 1) height = 400;
    else if (data.length === 2) height = 450;
    else if (data.length === 3) height = 800;
    else if (data.length === 4) height = 900;
    else height = 1130;

    return (
        <LazyMotion features={domAnimation}>
            <div
                className={`w-full bg-white dark:bg-black max-md:pt-10 max-md:pb-20 md:py-20 px-4 sm:px-8 relative overflow-hidden ${className}`}
            >
                {/* Horizontal notebook lines background */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.15]"
                    style={{
                        backgroundImage: "linear-gradient(#000 1px, transparent 1px)",
                        backgroundSize: "100% 32px",
                        marginTop: "4px",
                    }}
                ></div>
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-[0.1]"
                    style={{
                        backgroundImage: "linear-gradient(#fff 1px, transparent 1px)",
                        backgroundSize: "100% 32px",
                        marginTop: "4px",
                    }}
                ></div>

                {/* Subtle edge fades (reduced from w-1/2 to w-12/w-24 to stop washing out side spaces) */}
                <div className="from-white dark:from-black to-transparent pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r z-10"></div>
                <div className="from-white dark:from-black to-transparent pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l z-10"></div>

                <div className="w-full max-w-6xl mx-auto relative z-10">
                    <div
                        className="relative w-full max-w-[1000px] mx-auto flex flex-col space-y-8 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
                        style={{ "--md-height": `${height}px` }}
                    >
                        {data.length > 1 && (
                            <svg
                                className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
                                viewBox={`0 0 1000 ${height}`}
                                preserveAspectRatio="none"
                            >
                                {(() => {
                                    const pathD = data.reduce((acc, _, index) => {
                                        if (index >= data.length - 1) return acc;
                                        if (index === 0)
                                            return "M 160 150 C 400 150, 600 270, 840 270"; // 1 -> 2
                                        if (index === 1)
                                            return acc + " C 920 270, 400 350, 160 450"; // 2 -> 3
                                        if (index === 2)
                                            return acc + " C 160 600, 600 720, 840 720"; // 3 -> 4
                                        if (index === 3)
                                            return acc + " C 920 720, 400 800, 160 850"; // 4 -> 5
                                        return acc;
                                    }, "");
                                    return (
                                        <m.path
                                            d={pathD}
                                            stroke="currentColor"
                                            className="text-neutral-300 dark:text-neutral-700"
                                            strokeWidth="2"
                                            strokeDasharray="8 6"
                                            fill="none"
                                            strokeLinecap="round"
                                            vectorEffect="non-scaling-stroke"
                                            initial={{ strokeDashoffset: 0 }}
                                            animate={{ strokeDashoffset: -140 }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />
                                    );
                                })()}
                            </svg>
                        )}

                        {data.map((step, index) => {
                            const position = positions[index % positions.length];

                            return (
                                <Card
                                    key={step.title}
                                    number={`0${index + 1}`}
                                    title={step.title}
                                    description={step.description}
                                    colorTheme={step.colorTheme || "blue"}
                                    colors={step.colors}
                                    rotate={position.rotate}
                                    className={position.className}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </LazyMotion>
    );
}