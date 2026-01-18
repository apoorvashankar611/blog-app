import { useState } from "react";
import { BlogList } from "@/components/BlogList";
import { BlogDetail } from "@/components/BlogDetail";
import { CreateBlogForm } from "@/components/CreateBlogForm";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

/* 🔹 NEW UI IMPORTS */
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* ✅ CA MONK NAVBAR */}
      <Navbar />

      {/* ✅ CA MONK HERO SECTION */}
      <Hero />

      {/* EXISTING HEADER (UNCHANGED LOGIC) */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Blog Application</h1>
            <Button onClick={() => setIsCreating(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Blog
            </Button>
          </div>
        </div>
      </header>

      {/* EXISTING BODY (UNCHANGED LOGIC) */}
      {isCreating ? (
        <div className="container mx-auto px-4 py-8">
          <CreateBlogForm onClose={() => setIsCreating(false)} />
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-[calc(100vh-16rem)] overflow-y-auto pr-4">
              <BlogList
                onSelectBlog={setSelectedBlogId}
                selectedBlogId={selectedBlogId}
              />
            </div>

            <div className="h-[calc(100vh-16rem)] overflow-y-auto pr-4">
              <BlogDetail blogId={selectedBlogId} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
