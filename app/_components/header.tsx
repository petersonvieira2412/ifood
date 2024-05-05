import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Image src="/logo.png" alt="Logo Ifood" height={30} width={100} />
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent "
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
