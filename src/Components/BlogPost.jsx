import { blogposts } from "../lib/posts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function BlogPost() {
    const { slug } = useParams();
    const post = blogposts.find(p => p.slug === slug);
    if (!post) {
        return (
            <div><h2>Page not found</h2>
                <Link to='/blog'>Back to Blog</Link>
            </div>
        )
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to='/blog'>Back to Blog</Link>
        </div>

    );
}