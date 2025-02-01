import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardOverview } from './DashboardOverview';
import { BlockDetails } from './BlockDetails';
import { Search } from './Search';
import { Settings } from './Settings';

export function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<DashboardOverview />} />
      <Route path="/blocks/:blockNumber" element={<BlockDetails />} />
      <Route path="/search" element={<Search />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}