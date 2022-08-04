import React from "react";
import Pagination from "./Pagination";
import { useState } from "react";
import CardImage from "../components/CardImage";
import { CardData } from "./CardData";

const Card = () => {
  const { length: itemsCount } = CardData;
  const [pageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <CardImage
        pageSize={pageSize}
        currentPage={currentPage}
        itemsCount={itemsCount}
      />
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        itemsCount={itemsCount}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Card;
