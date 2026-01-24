// src/mockData.js
import { Pickaxe, Truck, Leaf, Globe } from "lucide-react";

export const BRANCH_COMPANIES = [
  {
    id: "exploration",
    name: "LM Exploration",
    description: "Geological surveying and advanced mineral discovery units.",
    path: "/branches/exploration",
    icon: Pickaxe,
  },
  {
    id: "machinery",
    name: "Land Heavy Machinery",
    description: "Industrial-grade equipment logistics and maintenance.",
    path: "/branches/machinery",
    icon: Truck,
  },
  {
    id: "ecomine",
    name: "EcoMine",
    description: "Sustainable extraction technologies and rehabilitation.",
    path: "/branches/ecomine",
    icon: Leaf,
  },
  {
    id: "logistics",
    name: "Mineral Logistics",
    description: "Global supply chain management for raw materials.",
    path: "/branches/logistics",
    icon: Globe,
  },
];