import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchData } from "../api";

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

export const FilterContextProvider = ({ children }) => {
  const [ data, setData ] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState('');

  useEffect(() => {
    const fetchDataFromApi = async() => {
      try {
        const responseData = await fetchData();
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);

  const filteredData = data.filter((post) => {
    const { title, text } = post;
    const searchLower = searchQuery.toLowerCase();
    return (
      title.toLowerCase().includes(searchLower) ||
      text.toLowerCase().includes(searchLower)
    );
  });

  return (
    <FilterContext.Provider value={{ searchQuery, setSearchQuery, filteredData, data }}>
      {children}
    </FilterContext.Provider>
  );
};
