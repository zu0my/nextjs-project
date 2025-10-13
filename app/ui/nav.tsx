import { cn } from "@/app/lib/utils";

const Nav = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <nav
      className={cn(
        "w-[300px] h-full overflow-clip bg-gray-200 border-gray-300 px-6 transition-all",
        collapsed && "w-0 border-r px-0",
      )}
    >
      <a href="/" className="flex items-center justify-center py-6">
        <span className="text-2xl fond-bold">logo</span>
      </a>
      <div>nav</div>
    </nav>
  );
};

export default Nav;
