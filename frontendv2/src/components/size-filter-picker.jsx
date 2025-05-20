import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useFilterStore } from "@/store";

const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

export default function SizeFilterPicker() {
  const currSetSizes = useFilterStore((state) => state.sizes);
  const setSizes = useFilterStore((state) => state.setSizes);
  console.log(currSetSizes);

  const inCurrSetSizes = (size) => {
    return currSetSizes.includes(size);
  };

  const handleOnClick = (event) => {
    const id = event.target.id;
    const newSizes = currSetSizes.includes(id)
      ? currSetSizes.filter((size) => size !== id)
      : [...currSetSizes, id];
    setSizes(newSizes);
  };

  return (
    <Collapsible>
      <CollapsibleTrigger>
        <span className="font-bold">Sizes</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex flex-col space-y-2 py-2">
          {sizes.map((size) => (
            <div className="flex items-center space-x-2" key={size}>
              <Checkbox
                defaultChecked={inCurrSetSizes(size) ? true : false}
                id={size}
                onClick={handleOnClick}
              />
              <Label
                htmlFor={size}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {size}
              </Label>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
