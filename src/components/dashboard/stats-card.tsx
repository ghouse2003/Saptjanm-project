import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div className="text-gray-500">{title}</div>
        <div className="text-rose-500">{icon}</div>
      </div>
      <div className="mt-2 flex items-baseline">
        <div className="text-2xl font-semibold">{value}</div>
        {trend && (
          <span
            className={`ml-2 text-sm ${
              trend.isPositive ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {trend.isPositive ? '+' : '-'}{trend.value}%
          </span>
        )}
      </div>
    </motion.div>
  );
}