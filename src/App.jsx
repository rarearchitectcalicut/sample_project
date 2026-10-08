import { useEffect, useState } from "react";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Features from './components/Features'
import Contact from './components/Contact'
import StudentCard from "./components/StudentCard";
import StudentProfile from "./components/StudentProfile";
import HoverBox from "./components/HoverBox";
import Counter from "./components/Counter";


export default function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('mycount');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const [user, setUser] = useState("");

  const handleClick = () => setCount(count + 1);
  const handleUserClick = () => setUser("Akshay");
  const handleReset = () => setCount(0);
  const getData = (value) => console.log(`data from child: ${value}`);

  useEffect(() => {
    localStorage.setItem('mycount', count);
  }, [count]);

  return (
    <div className="min-h-screen bg-white white:bg-neutral-950 text-gray-900 dark:text-white">
      {/* Full width Navbar placed at the top */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navbar />
      </header>
      <section
        id="hero"
        className="relative w-full scroll-mt-20"
      >
        <Hero />
      </section>

      <section
        id="features"
        className="w-full scroll-mt-20"
      >
        <Features />
      </section>

      <section
        id="contact"
        className="relative w-full scroll-mt-20"
      >
        <Contact />
      </section>

      {/* Main card container */}
      <main className="pt-24 pb-12 px-4">
        <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm max-w-sm mx-auto text-center gap-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Hello World
          </h1>
          <Header setData={getData} />

          <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
            Count: <span className="font-mono text-xl font-bold text-blue-600 dark:text-blue-400">{count}</span>
          </p>

          <button
            onClick={handleClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all duration-150"
          >
            Click Me
          </button>

          <button
            onClick={handleReset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all duration-150"
          >
            Reset
          </button>

          {user ? (
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
              User: <span className="font-bold text-blue-600 dark:text-blue-400">{user}</span>
            </p>
          ) : (
            <p className="text-sm font-medium text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50 py-1.5 px-4 rounded-full border border-dashed border-gray-200 dark:border-gray-700 italic animate-pulse">
              No user loaded yet
            </p>
          )}

          <button
            onClick={handleUserClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg shadow-blue-600/15 active:scale-[0.98] transition-all duration-200"
          >
            Show User
          </button>
        </div>
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
          <StudentCard />
        </div>
        <div className="flex items-center justify-center min-h-screen bg-white p-4">
          <StudentProfile/>
        </div>
        <div className="flex items-center justify-center min-h-screen w-screen bg-blue-700">
          <HoverBox />
        </div>

        <div className="flex items-center justify-center min-h-screen w-screen bg-black">
          <Counter />
        </div>

      </main>
    </div>
  );
}