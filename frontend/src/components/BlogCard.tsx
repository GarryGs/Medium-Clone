import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id: number
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 w-screen max-w-screen-md cursor-pointer">
 
            <div className="flex">
                <div >
                    <Avatar size="small" name={authorName} />
                </div>
                <div className="flex justify-center flex-col font-extralight pl-2 text-sm">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="flex justify-center flex-col font-thin pl-2 text-slate-500 text-sm">
                    {publishedDate}
                </div>
            </div>

            <div className="text-xl font-semibold">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin">
                {Math.ceil(content.length / 100)} minute(s) read
            </div>

        </div>
    </Link>
}

export function Circle() {
    return <div className="w-1 h-1 rounded-full bg-gray-500">
    </div>
}