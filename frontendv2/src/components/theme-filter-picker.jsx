import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useFilterStore } from "@/store";

const themes = [
  "Marvel Universe",
  "DC Comics",
  "Anime Superheroes",
  "Classic Comics",
  "Sci-Fi & Fantasy",
  "Video Game Characters",
  "Custom Fan Art",
];

export default function ThemeFilterPicker() {
  const currSetThemes = useFilterStore((state) => state.themes);
  const setThemes = useFilterStore((state) => state.setThemes);
  console.log(currSetThemes);
  const inCurrSetThemes = (theme) => {
    return currSetThemes.includes(theme);
  };

  const handleOnClick = (event) => {
    const id = event.target.id;
    const newThemes = currSetThemes.includes(id)
      ? currSetThemes.filter((theme) => theme !== id)
      : [...currSetThemes, id];
    setThemes(newThemes);
  };

  return (
    <Collapsible>
      <CollapsibleTrigger>
        <span className="font-bold">Theme</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex flex-col space-y-2 py-2">
          {themes.map((theme) => (
            <div className="flex items-center space-x-2" key={theme}>
              <Checkbox
                defaultChecked={inCurrSetThemes(theme) ? true : false}
                id={theme}
                onClick={handleOnClick}
              />
              <Label
                htmlFor={theme}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {theme}
              </Label>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
