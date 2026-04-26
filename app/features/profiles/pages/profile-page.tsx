import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Separator } from "~/common/components/ui/separator";
import type { Route } from "./+types/profile-page";
import z from "zod";
import InfoCardsGrid from "../components/grids/info-cards-grid";
import BusinessCardsGrid from "../components/grids/business-cards-grid";
import { cn } from "~/lib/utils";
import { Button } from "~/common/components/ui/button";

const searchParams = z.object({
  tab: z.string(),
});

export const loader = async ({ request, params }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const { success, data: parsedData } = searchParams.safeParse(
    Object.fromEntries(url.searchParams),
  );

  return {
    searchParams: parsedData?.tab,
  };
};

const ProfilePage = ({ loaderData }: Route.ComponentProps) => {
  const searchParams = loaderData.searchParams ?? "infos";
  return (
    <div className="w-full px-32 py-8 flex flex-col justify-start items-center">
      {/* Header */}
      <div className="w-full flex justify-between items-start pt-5">
        <div className="w-full flex justify-start items-start pb-10 gap-5">
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
        <Button
          className="bg-blue-500 text-white rounded-sm h-11 font-medium [a]:hover:bg-blue-600 duration-300 transition-colors px-10"
          asChild
        >
          <Link to={"/cards/create"}>Add Card</Link>
        </Button>
      </div>

      {/* Body */}
      <div className="w-full flex flex-col justify-start items-start">
        {/* Tabs*/}
        <div className="w-full px-10 py-5 border-b">
          <ul className="w-full flex text-2xl font-semibold dark:text-foreground text-gray-700 justify-end items-end gap-7">
            <li>
              <Link
                to="?tab=infos"
                className={cn(
                  searchParams !== "infos" &&
                    "dark:text-muted-foreground text-gray-400",
                )}
              >
                Infos
              </Link>
            </li>
            <Separator orientation="vertical" />
            <li>
              <Link
                className={cn(
                  searchParams !== "cards" &&
                    "dark:text-muted-foreground text-gray-400",
                )}
                to="?tab=cards"
              >
                Cards
              </Link>
            </li>
          </ul>
        </div>
        {searchParams === "infos" ? <InfoCardsGrid /> : <BusinessCardsGrid />}
      </div>
    </div>
  );
};

export default ProfilePage;
