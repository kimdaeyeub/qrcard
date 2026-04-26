import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import { Input } from "~/common/components/ui/input";
import { Textarea } from "~/common/components/ui/textarea";
import { Separator } from "~/common/components/ui/separator";
import CheckInfoCard from "../components/check-info-card";
import { useState } from "react";

const datas = [
  { type: "Instagram", value: "hello@world" },
  { type: "Email", value: "hello@world.com" },
  { type: "phone", value: "010-1234-1234" },
  { type: "Facebook", value: "hello.world.profilezzzzzzzzzzzzzzzzzzzzzzzxx" },
  { type: "Twitter", value: "@hello_world_kr" },
  { type: "LinkedIn", value: "hello-world-123" },
  { type: "YouTube", value: "HelloWorldChannel" },
  { type: "TikTok", value: "hello_world_" },
  { type: "Telegram", value: "@helloworld" },
  { type: "Discord", value: "HelloWorld#1234" },
  { type: "Slack", value: "hello.world" },
  { type: "GitHub", value: "hello-world-dev" },
  { type: "Twitch", value: "helloworld_streamer" },
  { type: "Pinterest", value: "hello_world_pins" },
  { type: "Snapchat", value: "helloworld_snap" },
];

interface IData {
  type: string;
  value: string;
}

const CreateCardPage = () => {
  const [infoLists, setInfoLists] = useState<IData[] | []>([]);
  const handleSubmit = () => {
    console.log(infoLists);
  };
  return (
    <div className="w-full px-32 py-8 flex flex-col justify-start items-center">
      <div className="w-full flex justify-between items-start pt-5">
        <div className="w-full flex justify-start items-start gap-5">
          <Avatar className="size-52">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="w-full flex flex-col justify-center gap-3 items-start max-w-2xl">
            <h1 className="text-4xl font-bold">John Doe</h1>
            <Input
              placeholder="명함의 이름을 등록해주세요."
              className="rounded-sm h-9 bg-gray-100 dark:bg-input/30"
            />
            <Textarea
              placeholder="명함에 들어갈 소개글을 작성해주세요."
              className="rounded-sm resize-none h-32 bg-gray-100 dark:bg-input/30"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleSubmit}
            className="bg-blue-500 text-white rounded-sm h-11 font-medium [a]:hover:bg-blue-600 duration-300 transition-colors px-10"
          >
            Save Card
          </Button>
          <Button
            className="rounded-sm h-11 font-medium px-10"
            variant={"destructive"}
          >
            Cancel
          </Button>
        </div>
      </div>

      <Separator className="my-14" />
      <div className="w-full pt-10 grid grid-cols-4 gap-5">
        {datas.map((data, index) => (
          <CheckInfoCard
            key={index}
            type={data.type}
            value={data.value}
            infoLists={infoLists}
            setInfoLists={setInfoLists}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateCardPage;
