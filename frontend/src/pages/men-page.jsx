import dummyData from "../dummy-data/tshirt-dummy-data.json";
import { ThreeDCard } from "@/components/3d-card-component";

export default function MenPage() {
    return (
        <div className="men-page grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {dummyData.map((item) => {
                return <ThreeDCard key={item.id} {...item} />
            })}
        </div>
    )
}


