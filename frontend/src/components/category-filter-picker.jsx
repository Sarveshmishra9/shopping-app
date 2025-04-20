
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import { useFilterStore } from "@/store";


const categories = [
    "Oversized",
    "Acid Wash",
    "Graphic Printed",
    "Solid Color",
    "Polo T-Shirts",
    "Sleeveless",
    "Long Sleeve",
    "Henley",
    "Hooded",
    "Crop Tops",
];



export default function CategoryFilterPicker() {
    const currSetCategories = useFilterStore((state) => state.categories);
    const setCategories = useFilterStore((state) => state.setCategories);
    console.log(currSetCategories);

    const inCurrSetCategories = (category) => {
        return currSetCategories.includes(category);
    }

    const handleOnClick = (event) => {
        const id = event.target.id;
        const newCategories = currSetCategories.includes(id) ? currSetCategories.filter((category) => category !== id) : [...currSetCategories, id];
        setCategories(newCategories);
    }

    return (
        <Collapsible>
            <CollapsibleTrigger><span className="font-bold">Categories</span></CollapsibleTrigger>
            <CollapsibleContent>
                <div className="flex flex-col space-y-2 py-2">
                    {categories.map((category) => (
                        <div className="flex items-center space-x-2" key={category}>
                            <Checkbox defaultChecked={inCurrSetCategories(category) ? true : false} id={category} onClick={handleOnClick} />
                            <Label
                                htmlFor={category}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {category}
                            </Label>
                        </div>
                    ))}
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}

