import { useState, useMemo } from "react";
import { APP_LOGO, APP_TITLE } from "@/const";
import { ColorCard } from "@/components/ColorCard";
import { adaColors, type ADAColor } from "@/data/ada-colors";
import paintColorsData from "@/data/paint-colors.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Search, X, Copy, FileText, FileDown, Monitor } from "lucide-react";
import { toast } from "sonner";
import { RequestSampleDialog } from "@/components/RequestSampleDialog";
import { ScreenColorTest } from "@/components/ScreenColorTest";

interface PaintColor {
  code: string;
  hex: string;
}

interface SelectedColor {
  id: string;
  code: string;
  name?: string;
  hex: string;
  cmyk?: string;
  rgb?: string;
  ral?: string;
  type: "ada" | "paint";
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFamily, setSelectedFamily] = useState<string>("all");
  const [selectedColors, setSelectedColors] = useState<SelectedColor[]>([]);
  const [activeTab, setActiveTab] = useState("ada");
  const [showRequestDialog, setShowRequestDialog] = useState(false);
  const [showScreenTest, setShowScreenTest] = useState(false);

  // Parse paint colors data
  const paintColors: PaintColor[] = paintColorsData.colors;
  const paintFamilies = paintColorsData.families;

  // Filter ADA colors
  const filteredAdaColors = useMemo(() => {
    return adaColors.filter((color) => {
      const matchesSearch =
        searchQuery === "" ||
        color.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        color.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        color.hex.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  // Filter Paint colors
  const filteredPaintColors = useMemo(() => {
    let colors = paintColors;

    // Filter by family
    if (selectedFamily !== "all") {
      const familyCodes = paintFamilies[selectedFamily as keyof typeof paintFamilies] || [];
      colors = colors.filter((color) => familyCodes.includes(color.code));
    }

    // Filter by search
    if (searchQuery) {
      colors = colors.filter(
        (color) =>
          color.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          color.hex.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return colors;
  }, [searchQuery, selectedFamily, paintColors, paintFamilies]);

  // Toggle color selection
  const toggleColorSelection = (
    id: string,
    code: string,
    hex: string,
    type: "ada" | "paint",
    name?: string,
    cmyk?: string,
    rgb?: string,
    ral?: string
  ) => {
    const isSelected = selectedColors.some((c) => c.id === id);
    if (isSelected) {
      setSelectedColors(selectedColors.filter((c) => c.id !== id));
    } else {
      // Check if already at 5 color limit
      if (selectedColors.length >= 5) {
        toast.error("Maximum 5 colors allowed. Please remove a color first.");
        return;
      }
      setSelectedColors([
        ...selectedColors,
        { id, code, name, hex, cmyk, rgb, ral, type },
      ]);
    }
  };

  // Copy color code to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  // Export selected colors as text
  const exportAsText = () => {
    if (selectedColors.length === 0) {
      toast.error("No colors selected");
      return;
    }

    const text = selectedColors
      .map((color) => {
        let line = `${color.code} - ${color.hex}`;
        if (color.name) line += ` (${color.name})`;
        if (color.cmyk) line += `\n  CMYK: ${color.cmyk}`;
        if (color.rgb) line += `\n  RGB: ${color.rgb}`;
        if (color.ral) line += `\n  RAL: ${color.ral}`;
        return line;
      })
      .join("\n\n");

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "selected-colors.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Exported selected colors!");
  };

  // Clear all selections
  const clearSelections = () => {
    setSelectedColors([]);
    toast.success("Cleared all selections");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={APP_LOGO} alt="Logo" className="h-10 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  {APP_TITLE}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Browse and select colors for your projects
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowScreenTest(true)}
                title="Screen Color Test"
              >
                <Monitor className="w-4 h-4" />
              </Button>
              {selectedColors.length > 0 && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearSelections}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear ({selectedColors.length})
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setShowRequestDialog(true)}
                    disabled={selectedColors.length === 0 || selectedColors.length > 5}
                  >
                    <FileDown className="w-4 h-4 mr-1" />
                    Request Sample
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="ada" className="flex-1 md:flex-none">
                ADA Colors ({adaColors.length})
              </TabsTrigger>
              <TabsTrigger value="paint" className="flex-1 md:flex-none">
                Paint Colors ({paintColors.length})
              </TabsTrigger>
            </TabsList>

            <div className="flex-1 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {activeTab === "paint" && (
                <Select value={selectedFamily} onValueChange={setSelectedFamily}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="All Families" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Families</SelectItem>
                    {Object.keys(paintFamilies).map((family) => (
                      <SelectItem key={family} value={family}>
                        {family}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>

          {/* ADA Colors Tab */}
          <TabsContent value="ada" className="mt-0">
            {filteredAdaColors.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No colors found matching your search.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredAdaColors.map((color) => (
                  <ColorCard
                    key={color.id}
                    code={color.name}
                    name={color.displayName}
                    hex={color.hex}
                    cmyk={color.cmyk}
                    rgb={color.rgb}
                    ral={color.ral}
                    isSelected={selectedColors.some((c) => c.id === color.id)}
                    onClick={() =>
                      toggleColorSelection(
                        color.id,
                        color.name,
                        color.hex,
                        "ada",
                        color.displayName,
                        color.cmyk,
                        color.rgb,
                        color.ral
                      )
                    }
                  />
                ))}
              </div>
            )}
          </TabsContent>

          {/* Paint Colors Tab */}
          <TabsContent value="paint" className="mt-0">
            {filteredPaintColors.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No colors found matching your filters.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredPaintColors.map((color) => (
                  <ColorCard
                    key={color.code}
                    code={color.code}
                    hex={color.hex}
                    isSelected={selectedColors.some((c) => c.id === color.code)}
                    onClick={() =>
                      toggleColorSelection(
                        color.code,
                        color.code,
                        color.hex,
                        "paint"
                      )
                    }
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Selected Colors Panel */}
        {selectedColors.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">
                  Selected Colors ({selectedColors.length})
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const codes = selectedColors.map((c) => c.code).join(", ");
                      copyToClipboard(codes);
                    }}
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    Copy Codes
                  </Button>
                  <Button variant="ghost" size="sm" onClick={exportAsText}>
                    <FileText className="w-4 h-4 mr-1" />
                    Export List
                  </Button>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {selectedColors.map((color) => (
                  <div
                    key={color.id}
                    className="flex-shrink-0 flex items-center gap-2 bg-background border rounded-lg p-2 min-w-[200px]"
                  >
                    <div
                      className="w-10 h-10 rounded border flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">
                        {color.code}
                      </div>
                      {color.name && (
                        <div className="text-xs text-muted-foreground truncate">
                          {color.name}
                        </div>
                      )}
                      <div className="text-xs font-mono text-muted-foreground">
                        {color.hex}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-shrink-0 h-8 w-8 p-0"
                      onClick={() =>
                        setSelectedColors(
                          selectedColors.filter((c) => c.id !== color.id)
                        )
                      }
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer spacer when selected colors panel is visible */}
      {selectedColors.length > 0 && <div className="h-48" />}

      {/* Request Sample Dialog */}
      <RequestSampleDialog
        open={showRequestDialog}
        onOpenChange={setShowRequestDialog}
        selectedColors={selectedColors}
      />

      {/* Screen Color Test Dialog */}
      <ScreenColorTest
        open={showScreenTest}
        onOpenChange={setShowScreenTest}
      />
    </div>
  );
}
