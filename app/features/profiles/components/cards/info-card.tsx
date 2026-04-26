import { ArrowRight, CheckIcon, Clipboard } from "lucide-react";
import { useState } from "react";
import { Button } from "~/common/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/common/components/ui/tooltip";

interface IInfoCardProps {
  type: string;
  value: string;
}

const InfoCard = ({ type, value }: IInfoCardProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);

      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      setIsCopied(false);
    } catch (err) {
      console.error("복사 실패:", err);
      alert("복사에 실패했습니다.");
    }
  };
  return (
    <div className="w-full h-30 rounded-sm shadow-sm dark:shadow-none px-6 border backdrop-blur-md bg-black/5 dark:bg-white/5 flex justify-between items-center gap-4">
      <div className="w-full flex justify-start items-center gap-4">
        <div
          onClick={handleCopy}
          className="rounded-full transition-all duration-300 flex justify-center items-center size-12 bg-black/10 dark:bg-white/10 cursor-pointer"
        >
          {isCopied ? (
            <CheckIcon className="text-green-500" />
          ) : (
            <Clipboard className="dark:text-foreground text-blue-400" />
          )}
        </div>
        <div className="flex text-nowrap flex-col justify-center items-start">
          <span className="text-lg font-semibold capitalize">{type}</span>
          <span className="text-muted-foreground -mt-1.5">{value}</span>
        </div>
      </div>
      <div className="w-24 h-full flex justify-center items-center cursor-pointer">
        <InfoCardDialog type={type} value={value} />
      </div>
    </div>
  );
};

export default InfoCard;

const InfoCardDialog = ({ type, value }: { type: string; value: string }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Tooltip>
          <TooltipTrigger>
            <ArrowRight />
          </TooltipTrigger>
          <TooltipContent>Edit info</TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Information</DialogTitle>
          <DialogDescription className="mt-5 flex flex-col justify-between items-start">
            <div className="w-full flex flex-col justify-start items-start gap-2.5">
              <Label className="capitalize font-medium">{type}</Label>
              <Input className="w-full rounded-sm" defaultValue={value} />
            </div>
            <div className="w-full flex mt-8 gap-2 justify-end items-center">
              <Button size={"lg"} variant="destructive">
                Delete
              </Button>
              <Button size={"lg"}>Edit</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
