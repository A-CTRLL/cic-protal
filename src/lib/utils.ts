import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function calculateLevyPercentage(projectCost: number) {
  // Convert project cost to number and handle invalid inputs
  const cost = Number(projectCost);
  
  if (isNaN(cost) || cost < 0) {
    throw new Error('Invalid project cost. Please provide a valid positive number.');
  }

  // Define levy brackets with ranges and percentages
  const levyBrackets = [
    { min: 0, max: 2000000, percentage: 1 },
    { min: 2000001, max: 5000000, percentage: 0.8 },
    { min: 5000001, max: 10000000, percentage: 0.75 },
    { min: 10000001, max: 15000000, percentage: 0.6 },
    { min: 15000001, max: Infinity, percentage: 0.5 }
  ];

  // Find applicable bracket
  const bracket = levyBrackets.find(
    bracket => cost >= bracket.min && cost <= bracket.max
  );

  if (!bracket) {
    throw new Error('Unable to determine levy percentage.');
  }

  return bracket.percentage;
}


export function calculateLevyAmount(projectCost: number) {
  const percentage = calculateLevyPercentage(projectCost);
  return (projectCost * percentage) / 100; // Convert percentage to decimal
}