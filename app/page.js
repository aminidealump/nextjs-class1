export default function Home() {
    return (
        <main className="mt-10 flex flex-col items-center bg-gray-50 py-16 px-6 rounded-lg shadow-lg">
        <div className="text-center max-w-3xl">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
                Welcome to Our Website
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Discover the latest insights, products, and services that we have to offer. Our mission is to provide top-notch solutions tailored to meet your needs. Explore our site to learn more about how we can help you achieve your goals.
            </p>
            <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
                Get Started
            </button>
        </div>
    </main>
    
    );
}
