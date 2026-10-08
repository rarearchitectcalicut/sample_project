import { motion } from "framer-motion";
import Icon from "../assets/Icon.png";

// ---------------- ANIMATION VARIANTS ----------------

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const imageVariants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

// ---------------- HERO ----------------

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black">

            {/* Background Image */}
            <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="absolute inset-0"
            >
                <img
                    src={Icon}
                    alt="Hero Background"
                    className="
                        h-full
                        w-full
                        object-cover
                        object-center
                        opacity-40

                        sm:opacity-50

                        lg:object-left
                        lg:opacity-100
                    "
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />
            </motion.div>


            {/* Content Container */}
            <div
                className="
                    relative
                    z-10
                    flex
                    min-h-screen
                    items-center
                    px-5
                    py-20

                    sm:px-8
                    sm:py-24

                    md:px-12

                    lg:px-16
                    lg:py-28

                    xl:px-24
                "
            >

                {/* Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="
                        w-full

                        sm:max-w-xl

                        lg:ml-auto
                        lg:w-1/2
                        lg:max-w-2xl
                    "
                >

                    {/* Small Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="
                            font-sans
                            text-sm
                            font-normal
                            tracking-tight
                            text-white/70

                            sm:text-base

                            md:text-lg
                        "
                    >
                        Master the basics of Studying
                    </motion.h1>


                    {/* Main Heading */}
                    <motion.div
                        variants={itemVariants}
                        className="
                            mt-4
                            tracking-tight
                            text-white

                            sm:mt-5

                            md:mt-6
                        "
                    >
                        <span
                            className="
                                block
                                font-serif
                                text-5xl
                                font-normal
                                italic
                                leading-none

                                sm:text-6xl

                                md:text-7xl

                                lg:text-8xl
                            "
                        >
                            Study
                        </span>

                        <span
                            className="
                                block
                                font-sans
                                text-4xl
                                font-normal
                                leading-tight

                                sm:text-5xl

                                md:text-6xl

                                lg:text-7xl
                            "
                        >
                            like a pro
                        </span>
                    </motion.div>


                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="
                            mt-5
                            max-w-md
                            font-sans
                            text-sm
                            font-normal
                            leading-6
                            text-white/70

                            sm:mt-6
                            sm:text-base
                            sm:leading-7

                            md:max-w-lg
                        "
                    >
                        Discover proven study techniques, time-management
                        strategies, and active learning habits. Learn how to
                        retain more information, reduce exam stress, and master
                        any subject efficiently.
                    </motion.p>


                    {/* Button */}
                    <motion.div
                        variants={itemVariants}
                        className="
                            mt-7
                            flex
                            items-center

                            sm:mt-8
                        "
                    >
                        <motion.a
                            href="#"
                            title="Get started"
                            role="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                                inline-flex
                                items-center
                                justify-center
                                rounded-full
                                bg-white
                                px-6
                                py-3
                                font-sans
                                text-sm
                                font-semibold
                                text-black
                                transition-colors
                                duration-200
                                hover:bg-white/90

                                sm:px-7
                                sm:py-3.5
                                sm:text-base

                                md:px-8
                            "
                        >
                            Get started
                        </motion.a>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;