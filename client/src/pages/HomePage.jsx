import { Link } from "react-router-dom";

function HomePage() {
    return (
        <section className="flex justify-center items-center h-[calc(100vh-100px)]">
            <header className="bg-zinc-800 p-10 rounded-md max-w-md text-center">
                <h1 className="text-5xl font-bold text-white mb-4">Tasks Manager</h1>
                <p className="text-zinc-400 text-lg mb-8">
                    Welcome to the premium Task Manager application. Organize your life,
                    stay productive, and never miss a deadline again.
                </p>

                <Link
                    className="bg-indigo-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-600 transition-colors"
                    to="/register"
                >
                    Get Started
                </Link>
            </header>
        </section>
    );
}

export default HomePage;