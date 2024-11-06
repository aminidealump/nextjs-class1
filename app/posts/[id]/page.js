import Comments from "@/app/components/Comments";
import getAllPosts from "@/lib/getAllPosts";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComment";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    const { id } = params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body,
    };
}

export default async function PostPage({ params }) {
    const { id } = params;
    const postPromise = getPost(id);
    const commentsPromise = getPostComments(id);

    const post = await postPromise;

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-blue-600">{post.title}</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">{post.body}</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-2xl font-semibold text-gray-800 mt-8">Comments</h3>
            <div className="mt-4">
                <Suspense fallback={<p className="text-gray-500">Loading comments...</p>}>
                    <Comments promise={commentsPromise} />
                </Suspense>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await getAllPosts();

    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}
