import { useState } from 'react';
import { useCreateBlog } from '@/hooks/useBlogs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, X } from 'lucide-react';

interface CreateBlogFormProps {
  onClose: () => void;
}

export function CreateBlogForm({ onClose }: CreateBlogFormProps) {
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryInput, setCategoryInput] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [content, setContent] = useState('');

  const createBlogMutation = useCreateBlog();

  const handleAddCategory = () => {
    if (categoryInput.trim() && !categories.includes(categoryInput.trim().toUpperCase())) {
      setCategories([...categories, categoryInput.trim().toUpperCase()]);
      setCategoryInput('');
    }
  };

  const handleRemoveCategory = (categoryToRemove: string) => {
    setCategories(categories.filter((cat) => cat !== categoryToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || categories.length === 0 || !description.trim() || !coverImage.trim() || !content.trim()) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await createBlogMutation.mutateAsync({
        title: title.trim(),
        category: categories,
        description: description.trim(),
        coverImage: coverImage.trim(),
        content: content.trim(),
      });

      setTitle('');
      setCategories([]);
      setCategoryInput('');
      setDescription('');
      setCoverImage('');
      setContent('');
      onClose();
    } catch (error) {
      console.error('Failed to create blog:', error);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Blog Post</CardTitle>
        <CardDescription>Fill in the details to create a new blog post.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Categories</Label>
            <div className="flex gap-2">
              <Input
                id="category"
                placeholder="Enter category (e.g., TECH, FINANCE)"
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddCategory();
                  }
                }}
              />
              <Button type="button" onClick={handleAddCategory} variant="secondary">
                Add
              </Button>
            </div>
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-md"
                  >
                    {cat}
                    <button
                      type="button"
                      onClick={() => handleRemoveCategory(cat)}
                      className="hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter a brief description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverImage">Cover Image URL</Label>
            <Input
              id="coverImage"
              placeholder="https://example.com/image.jpg"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Write your blog content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              required
            />
          </div>

          <div className="flex gap-2 justify-end pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={createBlogMutation.isPending}>
              {createBlogMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Blog
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
