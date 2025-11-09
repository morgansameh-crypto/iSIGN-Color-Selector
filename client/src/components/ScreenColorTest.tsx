import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ScreenColorTestProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ScreenColorTest({ open, onOpenChange }: ScreenColorTestProps) {
  const testColors = {
    grayscale: [
      { name: "Black", hex: "#000000" },
      { name: "Dark Gray", hex: "#404040" },
      { name: "Medium Gray", hex: "#808080" },
      { name: "Light Gray", hex: "#C0C0C0" },
      { name: "White", hex: "#FFFFFF" },
    ],
    primary: [
      { name: "Red", hex: "#FF0000" },
      { name: "Green", hex: "#00FF00" },
      { name: "Blue", hex: "#0000FF" },
      { name: "Cyan", hex: "#00FFFF" },
      { name: "Magenta", hex: "#FF00FF" },
      { name: "Yellow", hex: "#FFFF00" },
    ],
    skin: [
      { name: "Fair", hex: "#FFDFC4" },
      { name: "Light", hex: "#F0C8A0" },
      { name: "Medium", hex: "#D4A574" },
      { name: "Tan", hex: "#C68642" },
      { name: "Brown", hex: "#8D5524" },
      { name: "Dark", hex: "#5C3317" },
    ],
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Screen Color Calibration Test</DialogTitle>
          <DialogDescription>
            Use these color tests to verify your display is showing colors
            accurately. Compare with printed color charts if available.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="grayscale" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="grayscale">Grayscale</TabsTrigger>
            <TabsTrigger value="primary">Primary Colors</TabsTrigger>
            <TabsTrigger value="skin">Skin Tones</TabsTrigger>
          </TabsList>

          <TabsContent value="grayscale" className="space-y-4 mt-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Grayscale Test</h3>
              <p className="text-xs text-muted-foreground">
                You should see distinct steps from pure black to pure white. If
                colors appear tinted, your display may need calibration.
              </p>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {testColors.grayscale.map((color) => (
                <div key={color.hex} className="space-y-2">
                  <div
                    className="w-full aspect-square rounded border"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-center">
                    <div className="text-xs font-medium">{color.name}</div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {color.hex}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2 mt-4">
              <h4 className="text-sm font-semibold">Gradient Test</h4>
              <div
                className="w-full h-20 rounded"
                style={{
                  background:
                    "linear-gradient(to right, #000000, #404040, #808080, #C0C0C0, #FFFFFF)",
                }}
              />
              <p className="text-xs text-muted-foreground">
                The gradient should be smooth without visible banding.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="primary" className="space-y-4 mt-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Primary Color Test</h3>
              <p className="text-xs text-muted-foreground">
                These pure RGB colors should appear vibrant and saturated. Red
                should not appear orange, green should not appear yellow, and
                blue should not appear purple.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {testColors.primary.map((color) => (
                <div key={color.hex} className="space-y-2">
                  <div
                    className="w-full aspect-square rounded border"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-center">
                    <div className="text-xs font-medium">{color.name}</div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {color.hex}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skin" className="space-y-4 mt-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Skin Tone Test</h3>
              <p className="text-xs text-muted-foreground">
                Skin tones are critical for color accuracy. These should appear
                natural without excessive red, yellow, or gray casts.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {testColors.skin.map((color) => (
                <div key={color.hex} className="space-y-2">
                  <div
                    className="w-full aspect-square rounded border"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-center">
                    <div className="text-xs font-medium">{color.name}</div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {color.hex}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-4 p-4 bg-muted rounded-lg space-y-2">
          <h4 className="text-sm font-semibold">Calibration Tips</h4>
          <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
            <li>Adjust your display brightness to comfortable levels</li>
            <li>Ensure ambient lighting is consistent when viewing colors</li>
            <li>Use your display's built-in calibration tools if available</li>
            <li>Compare with physical color samples when possible</li>
            <li>Consider professional calibration for critical color work</li>
          </ul>
        </div>

        <div className="flex justify-end">
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
