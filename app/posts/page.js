import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Posts() {
    const posts = await getAllPosts();

    return (
        <div className="mt-10 px-8">
            <h1 className="text-3xl font-semibold mb-6">All Posts</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="text-left px-6 py-4 font-medium text-gray-600">ID</th>
                            <th className="text-left px-6 py-4 font-medium text-gray-600">Title</th>
                            <th className="text-left px-6 py-4 font-medium text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 text-gray-800">{post.id}</td>
                                <td className="px-6 py-4 text-gray-800">{post.title}</td>
                                <td className="px-6 py-4">
                                    <Link href={`/posts/${post.id}`}>
                                    <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600 transition">
                                            View
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
