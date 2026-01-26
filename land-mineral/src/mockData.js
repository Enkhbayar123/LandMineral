// src/mockData.js
import { Wheat, Milk, Building2, Mountain } from "lucide-react";

export const BRANCH_COMPANIES = [
  {
    id: "agriculture",
    name: "Tsetsen Dald Trade LLC",
    description: "Meat production, trade, and export.",
    path: "/branches/agriculture",
    icon: Wheat,
    details: {
      founded: "2005",
      introduction: "Specializing in meat and meat product production, trade, and export. Our facility operates on a 3.5-hectare site in Ulaanbaatar.",
      features: [
        "Factory facility: 3.5 hectares in Ulaanbaatar",
        "Storage: 4 deep freezers with 200-ton capacity",
        "Experience: Exported meat products to China (2018–2020)"
      ],
      founder: "Information not currently available",
      website: "#"
    }
  },
  {
    id: "dairy",
    name: "Lansiin Tsatsal LLC",
    description: "Dairy products and sustainable farming operations.",
    path: "/branches/dairy",
    icon: Milk,
    details: {
        founded: "2005",
        introduction: "A premier dairy and farming enterprise operating in Ulaanbaatar and Baganuur district, dedicated to providing fresh, high-quality milk and dairy products.",
        features: [
          "Sector: Milk & Dairy Products",
          "Operations: Sustainable Farming",
          "Location: Ulaanbaatar & Baganuur District"
        ],
        founder: "Information not currently available",
        website: "#"
    }
  },
  {
    id: "danista",
    name: "Danista-Od LLC",
    description: "Trade, service, and commercial leasing operations.",
    path: "/branches/danista",
    icon: Building2, // Represents the facility/trade center
    details: {
        founded: "2002",
        introduction: "A key player in the trade and service sector, operating commercial and leasing facilities in the heart of Erdenet City.",
        features: [
          "Location: Orkhon Province, Erdenet City",
          "Activities: Trade, Services, Leasing",
          "Established: 2002"
        ],
        founder: "Information not currently available",
        website: "#"
    }
  },
  {
    id: "vajra",
    name: "Vajra Wisdom Foundation",
    description: "Tourism and travel initiatives across Mongolia.",
    path: "/branches/vajra",
    icon: Mountain, // Represents tourism/nature
    details: {
        founded: "2025",
        introduction: "A newly established foundation focused on tourism development, operating in Ulaanbaatar, Uvs, and Tuv provinces in collaboration with leading travel agencies.",
        features: [
          "Regions: Ulaanbaatar, Uvs, Tuv Aimag",
          "Focus: Tourism & Cultural Travel",
          "Partners: Collaboration with tourism companies"
        ],
        founder: "Information not currently available",
        website: "#"
    }
  },
];