// components/ConsultationForm.tsx
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export const ConsultationForm = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [childName, setChildName] = useState("");
  const [age, setAge] = useState("");
  const [parentPhone, setParentPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ childName, age, parentPhone }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      toast({ title: "Success", description: "Consultation booked successfully" });
      setChildName("");
      setAge("");
      setParentPhone("");
      onClose();
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-background p-6 rounded-xl max-w-md w-full shadow-lg space-y-4">
          <Dialog.Title className="text-xl font-semibold text-foreground">Book a Free 15-Min Call</Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Child's Name</label>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                className="w-full border border-border rounded-md px-3 py-2 mt-1 bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border border-border rounded-md px-3 py-2 mt-1 bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Parent's Phone</label>
              <input
                type="tel"
                value={parentPhone}
                onChange={(e) => setParentPhone(e.target.value)}
                className="w-full border border-border rounded-md px-3 py-2 mt-1 bg-background text-foreground"
                required
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="hero">
                Submit
              </Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
