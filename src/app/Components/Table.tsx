"use client"
import React, { useState } from "react";
import { Reorder } from "framer-motion";
import { useTableContext } from "../context/TableContext";
import TableRow from "./TableRow";
import Header from "./Header";

const Table: React.FC = () => {
  const { data, addVariant, reorderRows, addState } = useTableContext();

  return (
    <div className="container mx-auto p-4 shadow-2xl rounded-lg border-spacing-1">
      <div className="flex justify-end mb-2">
        <button onClick={addVariant} className="bg-gray-200 text-black px-4 py-2 rounded-lg">
          + Add Variant
        </button>
      </div>
      <div className="mt-4 overflow-x-auto relative">
        <table className="min-w-full bg-white border-collapse">
          <Header />
          <Reorder.Group as="tbody" values={data} onReorder={reorderRows}>
            {data.map((item, index) => (
              <TableRow key={item.id} stateIndex={index} />
            ))}
          </Reorder.Group>
        </table>
      </div>
      <div className="flex justify-start mt-4">
        <button onClick={addState} className="bg-gray-200 text-black px-4 py-2 rounded">
          + Add State
        </button>
      </div>
    </div>
  );
};

export default Table;
