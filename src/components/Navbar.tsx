import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 rounded-md bg-indigo-600 text-white flex items-center justify-center">
            CA
          </div>
          <span>MONK</span>
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <span className="cursor-pointer hover:text-black">Tools</span>
          <span className="cursor-pointer hover:text-black">Practice</span>
          <span className="cursor-pointer hover:text-black">Events</span>
          <span className="cursor-pointer hover:text-black">Job Board</span>
          <span className="cursor-pointer hover:text-black">Points</span>
        </div>

        {/* Right */}
        <Button className="bg-indigo-600 hover:bg-indigo-700">Profile</Button>
      </div>
    </nav>
  );
}
