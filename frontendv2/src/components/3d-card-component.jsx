import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { CircleArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ThreeDCard({
  id,
  name,
  description,
  price,
  imageUrl,
  altText,
}) {
  return (
    <CardContainer className="inter-var w-[90%]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="a"
            target="__blank"
            className="px-4 py-2 rounded-xl text-lg font-bold dark:text-white"
          >
            {"Rs." + price}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link to={"/product/" + id}>
              <div className="flex gap-1 items-center justify-center">
                View Product <CircleArrowRight />
              </div>
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
