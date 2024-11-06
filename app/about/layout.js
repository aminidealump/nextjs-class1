import Link from "next/link";

export const metadata = {
    title: "About Us",
    description: "Learn more about us, our mission, vision, and values.",
};

export default function AboutLayout({ children }) {
    return (
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto mt-10 px-6">
            {/* Sidebar */}
            <aside className="lg:w-1/4 w-full bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">About Us</h2>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <Link href="/about/mission" className="text-gray-700 hover:text-blue-500 font-medium">
                                Mission
                            </Link>
                        </li>
                        <li>
                            <Link href="/about/vission" className="text-gray-700 hover:text-blue-500 font-medium">
                                Vision
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="lg:w-3/4 w-full bg-white p-8 rounded-lg shadow-md">
                {children}
            </main>
        </div>
    );
}
