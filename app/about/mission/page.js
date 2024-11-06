import Button from "@/app/components/Button";
import picture from "@/public/mission.jpg";
import Image from "next/image";

export default function Mission() {
    return (
        <main className="mt-10 max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h1>
                <p className="text-lg text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Excepturi fugit itaque delectus ipsum id amet voluptatem hic
                    repellat, error corporis asperiores est perspiciatis tempora
                    consequatur cupiditate soluta aperiam eos voluptates.
                </p>
            </div>

            <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-[400px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                    <Image 
                        placeholder="blur" 
                        src={picture} 
                        alt="Thumb image" 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-lg" 
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300" />
            </div>
        </main>
    );
}
