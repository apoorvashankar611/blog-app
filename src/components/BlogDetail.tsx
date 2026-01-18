import { useBlog } from "@/hooks/useBlogs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Calendar } from "lucide-react";

interface BlogDetailProps {
  blogId: number | null;
}

export function BlogDetail({ blogId }: BlogDetailProps) {
  const { data: blog, isLoading, error } = useBlog(blogId);

  if (!blogId) {
    return (
      <div className="flex items-center justify-center h-full">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Select a Blog</CardTitle>
            <CardDescription>
              Choose a blog from the list to view its details.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <Card className="w-full max-w-md border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
            <CardDescription>
              Failed to load blog details. Please try again later.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-0">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-md"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="prose prose-slate max-w-none">
              <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                {blog.content}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
