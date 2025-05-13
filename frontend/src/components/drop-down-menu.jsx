import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPen } from "lucide-react";
import { NavbarButton } from "./ui/resizable-navbar";
import { useUser } from "./providers/user-provider";

export default function DropDownMenu() {
  const { user } = useUser();
  const userAvatarUrl = user.userAvatarUrl;
  return (
    <div className="dropdown-menu">
      <DropDownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={userAvatarUrl} />
            <AvatarFallback>
              <UserPen />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Profile</DropdownMenuLabel>
          <DropdownMenuItem>
            <NavbarButton
              variant="primary"
              onClick={() => console.log("logout")}
            >
              Logout
            </NavbarButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropDownMenu>
    </div>
  );
}
