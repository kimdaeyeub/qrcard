import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Separator } from "~/common/components/ui/separator";

const ProfilePage = () => {
  return (
    <div className="w-full px-32 py-8 flex flex-col justify-start items-center">
      {/* Header */}
      <div className="w-full flex justify-center items-center py-10 gap-5">
        <Avatar className="size-52">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-full flex flex-col justify-center items-start max-w-2xl">
          <h1 className="text-4xl font-bold">John Doe</h1>
          <p className="text-2xl font-medium text-gray-500">
            john.doe@example.com
          </p>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </p>
        </div>
      </div>
      {/* Body */}
      <div className="w-full flex flex-col justify-start items-start">
        {/* Sidebar */}
        <div className="w-full px-10 py-5 border-b">
          <ul className="w-full flex justify-end font-semibold text-2xl items-start gap-5">
            <li>
              <Link to="?tab=infos">Infos</Link>
            </li>
            <Separator orientation="vertical" />
            <li>
              <Link to="?tab=cards">Cards</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
