import React from "react";
import useTheme from "../app/hooks/useTheme";
import Table from "../app/Components/Table";

const Home: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <header className="p-4 flex justify-end">
        <button onClick={toggleTheme} className="bg-gray-200 text-black px-4 py-2 rounded-lg">
          Toggle Theme
        </button>
      </header>
      <main className="p-4">
        <Table />
      </main>
    </div>
  );
};

export default Home;
