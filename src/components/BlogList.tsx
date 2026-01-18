import { useBlogs } from "@/hooks/useBlogs";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import clsx from "clsx";

interface BlogListProps {
  selectedBlogId: number | null;
  onSelectBlog: (id: number) => void;
}

export function BlogList({ selectedBlogId, onSelectBlog }: BlogListProps) {
  const { data: blogs, isLoading, error } = useBlogs();

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return <p className="text-sm text-destructive">Failed to load blogs</p>;
  }

  return (
    <div className="space-y-4">
      {blogs?.map((blog) => (
        <Card
          key={blog.id}
          onClick={() => onSelectBlog(blog.id)}
          className={clsx(
            "cursor-pointer transition-all",
            selectedBlogId === blog.id
              ? "border-2 border-primary"
              : "hover:border-muted",
          )}
        >
          <CardContent className="p-5 space-y-3">
            {/* CATEGORY */}
            <div className="text-xs font-semibold uppercase text-muted-foreground">
              {blog.category[0]}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold leading-snug">{blog.title}</h3>

            {/* EXCERPT */}
            <p className="text-sm text-muted-foreground line-clamp-2">
              {blog.excerpt}
            </p>

            {/* BADGE (OPTIONAL) */}
            {blog.readTime && (
              <span className="inline-block text-xs px-2 py-1 rounded-md bg-muted">
                {blog.readTime}
              </span>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
