'use client';

import { useState } from "react";
import DriverActivity from "../components/driver-activity/driver-activity";
import SearchBox from "../components/shared/search-box/search-box";
import { DriverHelper } from "../lib/driver-helper";
import { Driver } from "../models/driver";

export default function Home() {
  const drivers: Driver[] = DriverHelper.getDrivers();
  const [filteredDrivers, setFilteredDrivers] = useState([...drivers]);

  function handleSearch(searchTerm: string): void {
    setFilteredDrivers(DriverHelper.filterDrivers(drivers, searchTerm));
  }

  return (
    <>
      <h1 className="text-2xl mb-4">Driver Activity</h1>
      <SearchBox
        className="mb-4"
        handleSearch={handleSearch}
        placeHolder="Search by name/reg"></SearchBox>
      <DriverActivity drivers={filteredDrivers}></DriverActivity>
    </>
  );
}
