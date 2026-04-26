import { Link } from "react-router";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Separator } from "~/common/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/common/components/ui/tooltip";

interface IBusinessCardProps {
  data: {
    title: string;
    imageUrl: string;
    description: string;
    infos: { type: string; value: string }[];
  };
}

const BusinessCard = ({ data }: IBusinessCardProps) => {
  const formatInfo = (infos: { type: string; value: string }[]) => {
    if (infos.length <= 7) {
      return {
        infos,
        isExceed: false,
      };
    } else {
      return {
        infos: [
          ...infos.filter((item, index) => {
            if (index <= 6) {
              return item;
            }
          }),
        ],
        isExceed: true,
      };
    }
  };
  return (
    <Link to={"#"}>
      <div className="w-full aspect-video rounded-sm shadow-sm dark:shadow-none border backdrop-blur-md bg-gray-800/5 dark:bg-white/5 flex flex-col p-7">
        <div className="w-full flex items-center gap-3">
          <Avatar className="size-16">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-lg font-semibold">{data.title}</span>
        </div>
        <Separator className="my-4" />
        <ul className="flex flex-wrap gap-x-2 gap-y-1 line-clamp-2">
          {formatInfo(data.infos).isExceed ? (
            <>
              {formatInfo(data.infos).infos.map((info, index) => (
                <li key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge variant={"outline"}>{info.type}</Badge>
                    </TooltipTrigger>
                    <TooltipContent>{info.value}</TooltipContent>
                  </Tooltip>
                </li>
              ))}
              <span>...</span>
            </>
          ) : (
            <>
              {formatInfo(data.infos).infos.map((info, index) => (
                <li key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge variant={"outline"}>{info.type}</Badge>
                    </TooltipTrigger>
                    <TooltipContent>{info.value}</TooltipContent>
                  </Tooltip>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </Link>
  );
};

export default BusinessCard;
