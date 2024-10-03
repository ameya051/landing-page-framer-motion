import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
          <div>
            <div className="border border-white/15   h-10 w-10 rounded-lg inline-flex items-center justify-center">
              <LogoIcon className="w-8 h-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8">
              <a className="text-white/70 hover:text-white transition ease-in-out duration-300" href="#">Features</a>
              <a className="text-white/70 hover:text-white transition ease-in-out duration-300" href="#">Developers</a>
              <a className="text-white/70 hover:text-white transition ease-in-out duration-300" href="#">Pricing</a>
              <a className="text-white/70 hover:text-white transition ease-in-out duration-300" href="#">Changelog</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>Join Waitlist</Button>
            <MenuIcon className="w-8 h-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
