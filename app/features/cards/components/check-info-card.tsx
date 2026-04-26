import { Checkbox } from "~/common/components/ui/checkbox";

interface ICheckInfoCardProps {
  type: string;
  value: string;
  infoLists: [] | { type: string; value: string }[];
  setInfoLists: React.Dispatch<
    React.SetStateAction<[] | { type: string; value: string }[]>
  >;
}

const CheckInfoCard = ({
  type,
  value,
  infoLists,
  setInfoLists,
}: ICheckInfoCardProps) => {
  // const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="w-full py-4 rounded-sm shadow-sm dark:shadow-none px-6 border backdrop-blur-md bg-black/5 dark:bg-white/5 flex justify-between items-center gap-4">
      <div className="w-full overflow-clip flex justify-start items-center gap-4">
        <Checkbox
          checked={
            infoLists.filter(
              (item) => item.type === type && item.value === value,
            ).length === 1
          }
          onCheckedChange={() => {
            const currentIndex = infoLists.findIndex(
              (item) => item.type === type && item.value === value,
            );
            if (currentIndex !== -1) {
              // Delete Item
              const prev = infoLists.splice(0, currentIndex);
              const next = infoLists.splice(currentIndex);
              setInfoLists([...prev, ...next]);
            } else {
              // Add Item
              setInfoLists((prev) => [...prev, { type, value }]);
            }
          }}
        />
        <div className="flex text-nowrap flex-col justify-center items-start">
          <span className="text-lg font-semibold capitalize">{type}</span>
          <span className="text-muted-foreground overflow-hidden -mt-1.5 w-full text-ellipsis">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckInfoCard;
