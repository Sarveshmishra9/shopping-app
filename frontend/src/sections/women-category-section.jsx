import dummyData from "../dummy-data/tshirt-dummy-data.json";
import { ThreeDCard } from "@/components/3d-card-component";
import { useFilterStore } from "@/store";
import { filterCategoryData } from "@/lib/utils";

export function WomenCategorySection() {
  const currSetCategories = useFilterStore((state) => state.categories);
  const currSetSizes = useFilterStore((state) => state.sizes);
  const currSetThemes = useFilterStore((state) => state.themes);
  const currSetPriceRange = useFilterStore((state) => state.priceRange);

  const filteredData = dummyData.filter((item) => {
    return filterCategoryData(
      item,
      currSetCategories,
      currSetSizes,
      currSetThemes,
      currSetPriceRange,
    );
  });

  return (
    <div className="w-full men-page grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {filteredData.map((item) => {
        return <ThreeDCard key={item.id} {...item} />;
      })}
    </div>
  );
}
