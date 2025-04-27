import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  "New Arrivals",
  "TRENDING OVERSIZED FITS",
  "MOST LOVED DESIGN",
  "STYLES IN SPOTLIGHT",
  "BOLD STYLES",
  "FANDOM HIDDEN GEMS",
];

const dummyProducts = [
  {
    id: 1,
    title: "Space Exploration Tee",
    img: "/images/space-exploration.jpg",
    price: "Rs.2407",
  },
  {
    id: 2,
    title: "Classic Marvel Tee",
    img: "/images/classic-marvel.jpg",
    price: "Rs.1299",
  },
  // Add more products as needed
];

export default function HomePage() {
  const [category, setCategory] = useState("Men");

  return (
    <div className="flex flex-col gap-6">
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <Button variant={category === "Men" ? "default" : "outline"} onClick={() => setCategory("Men")}>
          Men
        </Button>
        <Button variant={category === "Women" ? "default" : "outline"} onClick={() => setCategory("Women")}>
          Women
        </Button>
        <Button variant={category === "Kids" ? "default" : "outline"} onClick={() => setCategory("Kids")}>
          Kids
        </Button>
      </div>

      {/* Big Hero Image */}
      <div className="w-full h-96 bg-cover bg-center rounded-2xl shadow-lg" style={{ backgroundImage: `url('/images/hero-${category.toLowerCase()}.jpg')` }}>
        <div className="w-full h-full bg-black/30 flex items-center justify-center rounded-2xl">
          <h1 className="text-4xl font-bold text-white">{category} Collection</h1>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <div key={section} className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold px-4">{section}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {dummyProducts.map((product) => (
              <Card key={product.id} className="hover:scale-105 transition-transform">
                <CardContent className="flex flex-col items-center p-4">
                  <img src={product.img} alt={product.title} className="w-full h-48 object-cover rounded-xl mb-2" />
                  <h3 className="font-medium text-center">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}