export interface ADAColor {
  id: string;
  name: string;
  displayName: string;
  hex: string;
  cmyk?: string;
  rgb?: string;
  ral?: string;
}

export const adaColors: ADAColor[] = [
  // Page 1 - Row 1
  { id: "ada-1", name: "iMajestic Blue", displayName: "Majestic Blue", hex: "#172347", cmyk: "79-63-0-70", rgb: "23-35-79", ral: "7694" },
  { id: "ada-2", name: "iFrench Vanilla", displayName: "French Vanilla", hex: "#F4E4AC", cmyk: "0-1-35-1", rgb: "244-228-172", ral: "1401" },
  { id: "ada-3", name: "iAlmond", displayName: "Almond", hex: "#EDE7C6", cmyk: "0-2-18-7", rgb: "238-231-206", ral: "Warm Gray 1" },
  { id: "ada-4", name: "iLagoon", displayName: "Lagoon", hex: "#00A2A7", cmyk: "88-0-25-8", rgb: "0-162-167", ral: "7474" },
  
  // Page 1 - Row 2
  { id: "ada-5", name: "iLatte", displayName: "Latte", hex: "#AD9677", cmyk: "0-15-35-38", rgb: "173-150-119", ral: "8031" },
  { id: "ada-6", name: "iBlack", displayName: "Black", hex: "#1D0E00", cmyk: "29-14-0-100", rgb: "0-0-0", ral: "Black" },
  { id: "ada-7", name: "iSpruce", displayName: "Spruce", hex: "#456159", cmyk: "36-0-18-68", rgb: "69-97-89", ral: "5487" },
  { id: "ada-8", name: "iBlue", displayName: "Blue", hex: "#005C82", cmyk: "100-50-0-39", rgb: "0-78-130", ral: "900" },
  
  // Page 1 - Row 3
  { id: "ada-9", name: "iMerlot", displayName: "Merlot", hex: "#A34D4D", cmyk: "0-63-42-50", rgb: "143-73-89", ral: "7637" },
  { id: "ada-10", name: "iSpring Green", displayName: "Spring Green", hex: "#00A484", cmyk: "84-0-64-3", rgb: "0-164-84", ral: "7724" },
  { id: "ada-11", name: "iBright White", displayName: "Bright White", hex: "#FFFFFF", cmyk: "0-0-0-0", rgb: "255-255-255", ral: "Trans. White" },
  { id: "ada-12", name: "iBurgundy", displayName: "Burgundy", hex: "#842B4B", cmyk: "0-88-58-75", rgb: "84-0-23", ral: "218" },
  
  // Page 1 - Row 4
  { id: "ada-13", name: "iPutty", displayName: "Putty", hex: "#C3B89C", cmyk: "0-8-24-0", rgb: "195-184-156", ral: "452" },
  { id: "ada-14", name: "iFirestone", displayName: "Firestone", hex: "#A02C34", cmyk: "0-87-69-48", rgb: "156-44-34", ral: "484" },
  { id: "ada-15", name: "iCharcoal Grey", displayName: "Charcoal Grey", hex: "#626B67", cmyk: "0-0-0-67", rgb: "98-107-103", ral: "421" },
  { id: "ada-16", name: "iSlate Blue", displayName: "Slate Blue", hex: "#5D6D87", cmyk: "93-50-0-17", rgb: "93-109-137", ral: "5415" },
  
  // Page 1 - Row 5
  { id: "ada-17", name: "iFrosted Plum", displayName: "Frosted Plum", hex: "#645858", cmyk: "0-0-0-74", rgb: "100-88-92", ral: "430" },
  { id: "ada-18", name: "iMedieval Copper", displayName: "Medieval Copper", hex: "#4F5E4E", cmyk: "79-63-0-70", rgb: "23-35-79", ral: "7694" },
  { id: "ada-19", name: "iChocolate Brown", displayName: "Chocolate Brown", hex: "#503821", cmyk: "0-43-55-93", rgb: "80-38-21", ral: "438" },
  { id: "ada-20", name: "iAged Bronze", displayName: "Aged Bronze", hex: "#8A5C33", cmyk: "0-48-85-88", rgb: "114-68-13", ral: "448" },
  
  // Page 1 - Row 6
  { id: "ada-21", name: "iRiver Clay", displayName: "River Clay", hex: "#74755E", cmyk: "0-3-18-58", rgb: "134-129-117", ral: "Cool Grey 9" },
  { id: "ada-22", name: "Gold", displayName: "Gold", hex: "#C89D49", cmyk: "0-29-79-25", rgb: "198-149-73", ral: "4645" },
  { id: "ada-23", name: "iGraphite", displayName: "Graphite", hex: "#4B4B49", cmyk: "0-3-7-84", rgb: "75-75-73", ral: "Black 7" },
  { id: "ada-24", name: "iMint", displayName: "Mint", hex: "#7DBA42", cmyk: "48-0-89-12", rgb: "125-183-42", ral: "348" },
  
  // Page 2 - Row 1
  { id: "ada-25", name: "iSilver", displayName: "Silver", hex: "#A3A7A7", cmyk: "2-0-2-40", rgb: "163-167-167", ral: "Cool Grey 7" },
  { id: "ada-26", name: "iLight Gray", displayName: "Light Gray", hex: "E1E8E4", cmyk: "1-0-8-11", rgb: "225-228-212", ral: "Cool Grey 2" },
  { id: "ada-27", name: "iDenim Blue", displayName: "Denim Blue", hex: "#1E3250", cmyk: "80-38-0-78", rgb: "15-50-79", ral: "7463" },
  { id: "ada-28", name: "iPeriwinkle", displayName: "Periwinkle", hex: "#89ACCC", cmyk: "49-15-0-8", rgb: "136-172-204", ral: "284" },
  
  // Page 2 - Row 2
  { id: "ada-29", name: "iChestnut", displayName: "Chestnut", hex: "#7B5737", cmyk: "0-48-55-67", rgb: "112-87-67", ral: "7518" },
  { id: "ada-30", name: "iKhaki", displayName: "Khaki", hex: "#CDB894", cmyk: "0-8-33-23", rgb: "205-184-154", ral: "7734" },
  { id: "ada-31", name: "iPink", displayName: "Pink", hex: "#E24F79", cmyk: "0-81-40-11", rgb: "216-79-121", ral: "213" },
  { id: "ada-32", name: "iOyster Shell", displayName: "Oyster Shell", hex: "#C2AFAC", cmyk: "8-0-13-25", rgb: "194-175-190", ral: "Warm Grey 3" },
  
  // Page 2 - Row 3
  { id: "ada-33", name: "iEvergreen", displayName: "Evergreen", hex: "#006E53", cmyk: "100-0-76-53", rgb: "0-88-70", ral: "342" },
  { id: "ada-34", name: "iRed", displayName: "Red", hex: "#C01E13", cmyk: "0-100-90-23", rgb: "190-18-35", ral: "1797" },
  { id: "ada-35", name: "iBisque", displayName: "Bisque", hex: "#E3D9C4", cmyk: "0-8-20-4", rgb: "243-224-196", ral: "Warm Gray 1" },
  { id: "ada-36", name: "iBone", displayName: "Bone", hex: "#E4D9CE", cmyk: "0-4-14-5", rgb: "244-229-206", ral: "Warm Gray 1" },
  
  // Page 2 - Row 4
  { id: "ada-37", name: "iSilver", displayName: "Silver", hex: "#A3A7A7", cmyk: "2-0-2-40", rgb: "163-167-167", ral: "Cool Grey 7" },
  { id: "ada-38", name: "iTaupe", displayName: "Taupe", hex: "#8F7759", cmyk: "0-17-39-57", rgb: "134-115-98", ral: "Warm Gray 7" },
  { id: "ada-39", name: "iIntense Teal", displayName: "Intense Teal", hex: "#006B7F", cmyk: "85-0-33-47", rgb: "0-113-118", ral: "7475" },
  { id: "ada-40", name: "iWarm White", displayName: "Warm White", hex: "#FFF5E2", cmyk: "0-1-4-0", rgb: "255-251-242", ral: "Warm Gray 1" },
  
  // Page 2 - Row 5
  { id: "ada-41", name: "iYellow", displayName: "Yellow", hex: "#FFE600", cmyk: "0-11-100-0", rgb: "255-218-0", ral: "108" },
  { id: "ada-42", name: "iCobalt Blue", displayName: "Cobalt Blue", hex: "#004E98", cmyk: "100-70-0-58", rgb: "0-42-96", ral: "682" },
  { id: "ada-43", name: "iDesert Sand", displayName: "Desert Sand", hex: "#D9C289", cmyk: "0-13-49-18", rgb: "219-190-137", ral: "453" },
];
