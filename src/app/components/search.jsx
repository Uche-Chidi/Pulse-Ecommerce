import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { data } from './data';

export default function Search({ onSearchItemClick }) {
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const suggestionBoxRef = useRef(null);
    const searchBarRef = useRef(null);

    function searchShoes(e) {
        const value = e.target.value.toLowerCase();
        setQuery(value);
        if (value === "") {
            setFilteredItems([]);
            return;
        }

        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(value) || item.brand.toLowerCase().includes(value)
        ).slice(0, 24);

        setFilteredItems(filtered);
    }

    function handleSearchSubmit() {
        searchShoes({ target: { value: query } });
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(event.target)) {
                setFilteredItems([]);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='relative'>
            <div className='flex items-center'>
                <input
                    ref={searchBarRef}
                    type='text'
                    name='search'
                    id='search'
                    value={query}
                    onChange={searchShoes}
                    placeholder='Search...'
                    className='p-2 border border-gray-300 focus:outline-none focus:border-black rounded-full pr-10 flex-grow'
                />
                <button 
                    type='button' 
                    onClick={handleSearchSubmit} 
                    className='py-2 bg-black text-white rounded-full ml-2 px-5'
                >
                    Search
                </button>
            </div>

            {filteredItems.length > 0 && (
                <div 
                    ref={suggestionBoxRef} 
                    className='absolute w-[70%] bg-white border border-gray-300 p-2 mt-2 rounded-lg shadow-lg'
                    style={{ top: searchBarRef.current ? searchBarRef.current.clientHeight + 10 : 'auto' }}
                >
                    {filteredItems.map(item => (
                        <div key={item.id} className='cursor-pointer' onClick={onSearchItemClick}>
                            <Link href={`/products/${item.name.split(' ').join('-')}`}>
                                <div>{item.name}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
