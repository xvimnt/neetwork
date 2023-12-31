import React from "react";
import { DashboardBanner } from "./DashboardBanner";

interface ItemI {
  id: string;
  authorName: string;
  authorTitle: string;
  authorImageUrl: string;
  timeAgo: string;
  title: string;
  imageUrl: string;
}

export const DashboardCarrousel = ({ items }: { items: ItemI[] }) => {
  const [current, setCurrent] = React.useState(items[0]);

  setTimeout(() => {
    handleNext();
  }, 5000);

  const handleNext = () => {
    const index = current ? items.indexOf(current) : -1;
    if (index === items.length - 1) {
      setCurrent(items[0]);
    } else {
      setCurrent(items[index + 1]);
    }
  };

  const handlePrev = () => {
    const index = current ? items.indexOf(current) : -1;
    if (index === 0) {
      setCurrent(items[items.length - 1]);
    } else {
      setCurrent(items[index - 1]);
    }
  };

  return (
    current && (
      <DashboardBanner
        {...current}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    )
  );
};
