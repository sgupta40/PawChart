import { IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    onSearch(query);
  };
  

  return (
    <IonSearchbar
      value={query}
      onIonChange={(e) => setQuery(e.detail.value!)}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      }}
      placeholder="Enter a food item"
    />
  );
};

export default Search;
