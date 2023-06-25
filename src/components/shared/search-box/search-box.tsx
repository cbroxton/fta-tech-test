'use client';

import { ChangeEvent, useCallback, useState } from "react";
import debounce from 'lodash.debounce';

export default function SearchBox({
    handleSearch,
    debounceTimeMs,
    placeHolder,
    className
}: {
    handleSearch: (searchTerm: string) => void,
    debounceTimeMs?: number,
    placeHolder?: string,
    className?: string
}) {
    debounceTimeMs ??= 500;

    const [searchTerm, setSearchTerm] = useState('');

    const debounceFn = useCallback(debounce(handleSearch, debounceTimeMs), [debounceTimeMs, handleSearch]);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        setSearchTerm(value);
        debounceFn(value);
    }

    return (
        <input
            type="search"
            className={`${className} border border-gray-400 rounded-md focus:outline-none p-1 text-base md:text-lg`}
            placeholder={placeHolder}
            value={searchTerm} onChange={handleChange}
        />
    )
}