import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useFilterStore } from "@/store";

const prices = [
  "Under ₹500",
  "₹500 - ₹1000",
  "₹1000 - ₹1500",
  "₹1500 - ₹2000",
  "₹2000+",
];

export default function PriceFilterPicker() {
  const currPriceRange = useFilterStore((state) => state.priceRange);
  const setPriceRange = useFilterStore((state) => state.setPriceRange);

  console.log(currPriceRange);

  const handleOnClick = (event) => {
    const id = event.target.id;
    if (currPriceRange === id) {
      setPriceRange("");
    } else {
      setPriceRange(id);
    }
  };

  return (
    <Collapsible>
      <CollapsibleTrigger>
        <span className="font-bold">Price</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex flex-col space-y-2 py-2">
          {prices.map((priceRange) => (
            <div className="flex items-center space-x-2" key={priceRange}>
              <Checkbox
                defaultChecked={priceRange === currPriceRange ? true : false}
                checked={priceRange === currPriceRange ? true : false}
                onClick={handleOnClick}
                id={priceRange}
              />
              <Label
                htmlFor={priceRange}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {priceRange}
              </Label>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
