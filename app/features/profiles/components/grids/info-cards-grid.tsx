import InfoCard from "../cards/info-card";

const datas = [
  { type: "Instagram", value: "hello@world" },
  { type: "Email", value: "hello@world.com" },
  { type: "phone", value: "010-1234-1234" },
  { type: "Facebook", value: "hello.world.profile" },
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

const InfoCardsGrid = () => {
  return (
    <div className="w-full pt-10 grid grid-cols-3 gap-5">
      {datas.map((data, index) => (
        <InfoCard key={index} type={data.type} value={data.value} />
      ))}
    </div>
  );
};

export default InfoCardsGrid;
