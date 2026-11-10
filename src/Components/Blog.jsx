import {blogposts} from '../lib/posts'
import { Link } from 'react-router-dom'
export default function Blog(){
    return(<div>
        <h1 className="text-black">Blog List</h1>
     <ul>{blogposts.map((blogpost)=>(
        <li key={blogpost.id}><Link to={`/blog/${blogpost.slug}`}>{blogpost.title}</Link>
            </li>))}
    </ul>
    </div>)
}