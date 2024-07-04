import React, { createContext, useContext, useState } from "react";

interface Variant {
  id: string;
  url: string | null;
  width: number | null;
  size: number | null;
}

interface State {
  id: string;
  state: string;
  variants: Variant[];
}

interface TableContextProps {
  data: State[];
  variantHeaders: string[];
  showFilterOptions: boolean[];
  addState: () => void;
  deleteState: (id: string) => void;
  addVariant: () => void;
  deleteVariant: (variantIndex: number) => void;
  handleFileChange: (stateIndex: number, variantIndex: number, event: any) => void;
  reorderRows: (newData: State[]) => void;
}

const initialData: State[] = [
  {
    id: "state-1",
    state: "State 1",
    variants: [
      { id: "variant-1-1", url: "/images/photo1.png", width: 100, size: 100 },
      { id: "variant-1-2", url: "/images/photo2.jpeg", width: 100, size: 100 },
    ],
  },
  {
    id: "state-2",
    state: "State 2",
    variants: [
      { id: "variant-2-1", url: "/images/photo3.png", width: 100, size: 100 },
      { id: "variant-2-2", url: "/images/photo4.jpeg", width: 100, size: 100 },
    ],
  },
];

const TableContext = createContext<TableContextProps | undefined>(undefined);

export const useTableContext = (): TableContextProps => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext must be used within a TableProvider");
  }
  return context;
};

export const TableProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<State[]>(initialData);
  const [variantHeaders, setVariantHeaders] = useState<string[]>(["Primary Variant", "Variant 2"]);
  const [showFilterOptions, setShowFilterOptions] = useState<boolean[]>(Array(initialData.length).fill(false));

  const addState = () => {
    const newState: State = {
      id: `state-${data.length + 1}`,
      state: `State ${data.length + 1}`,
      variants: Array(variantHeaders.length).fill({
        id: `variant-${data.length + 1}-${variantHeaders.length + 1}`,
        url: null,
        width: null,
        size: null,
      }),
    };
    setData([...data, newState]);
    setShowFilterOptions([...showFilterOptions, false]);
  };

  const deleteState = (id: string) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    setShowFilterOptions(showFilterOptions.slice(0, newData.length));
  };

  const addVariant = () => {
    setVariantHeaders([...variantHeaders, `Variant ${variantHeaders.length + 1}`]);
    const newData = data.map((item) => ({
      ...item,
      variants: [
        ...item.variants,
        {
          id: `variant-${item.id}-${variantHeaders.length + 1}`,
          url: null,
          width: null,
          size: null,
        },
      ],
    }));
    setData(newData);
  };

  const deleteVariant = (variantIndex: number) => {
    setVariantHeaders(variantHeaders.filter((_, index) => index !== variantIndex));
    const newData = data.map((item) => {
      const newVariants = item.variants.filter((_, index) => index !== variantIndex);
      return { ...item, variants: newVariants };
    });
    setData(newData);
  };

  const handleFileChange = (stateIndex: number, variantIndex: number, event: any) => {
    const file = event.target.files[0];
    if (file) {
      const newData = [...data];
      newData[stateIndex].variants[variantIndex] = {
        ...newData[stateIndex].variants[variantIndex],
        url: URL.createObjectURL(file),
        width: null,
        size: null,
      };
      setData(newData);
    }
  };

  const reorderRows = (newData: State[]) => {
    setData(newData);
  };

  const contextValue: TableContextProps = {
    data,
    variantHeaders,
    showFilterOptions,
    addState,
    deleteState,
    addVariant,
    deleteVariant,
    handleFileChange,
    reorderRows,
  };

  return <TableContext.Provider value={contextValue}>{children}</TableContext.Provider>;
};
