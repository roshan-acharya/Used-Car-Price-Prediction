"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GithubIcon, Database } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    carName: "",
    year: "",
    kmDriven: "",
    fuelType: "",
    sellerType: "",
    transmission: "",
    owner: "",
    mileage: "",
    engine: "",
    seats: "",
  });

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Section - Left Column */}
          <Card className="lg:col-span-2 p-8 shadow-lg">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Used Car Price Predictor
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Enter car details to predict its resale value with AI-powered
              accuracy.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="carName">Car Name</Label>
                <Input
                  id="carName"
                  value={formData.carName}
                  onChange={(e) =>
                    setFormData({ ...formData, carName: e.target.value })
                  }
                  placeholder="e.g., Honda City"
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={formData.year}
                  onChange={(e) =>
                    setFormData({ ...formData, year: e.target.value })
                  }
                  placeholder="e.g., 2020"
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="kmDriven">Kilometers Driven</Label>
                <Input
                  id="kmDriven"
                  type="number"
                  value={formData.kmDriven}
                  onChange={(e) =>
                    setFormData({ ...formData, kmDriven: e.target.value })
                  }
                  placeholder="e.g., 50000"
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fuelType">Fuel Type</Label>
                <Select
                  value={formData.fuelType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, fuelType: value })
                  }
                >
                  <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                    <SelectValue placeholder="Select fuel type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="petrol">Petrol</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="cng">CNG</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="lpg">LPG</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sellerType">Seller Type</Label>
                <Select
                  value={formData.sellerType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, sellerType: value })
                  }
                >
                  <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                    <SelectValue placeholder="Select seller type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="dealer">Dealer</SelectItem>
                    <SelectItem value="trustmark">Trustmark Dealer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="transmission">Transmission</Label>
                <Select
                  value={formData.transmission}
                  onValueChange={(value) =>
                    setFormData({ ...formData, transmission: value })
                  }
                >
                  <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                    <SelectValue placeholder="Select transmission" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="automatic">Automatic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="owner">Owner Type</Label>
                <Select
                  value={formData.owner}
                  onValueChange={(value) =>
                    setFormData({ ...formData, owner: value })
                  }
                >
                  <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                    <SelectValue placeholder="Select owner type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="first">First Owner</SelectItem>
                    <SelectItem value="second">Second Owner</SelectItem>
                    <SelectItem value="third">Third Owner</SelectItem>
                    <SelectItem value="fourth">Fourth & Above</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mileage">Mileage (kmpl)</Label>
                <Input
                  id="mileage"
                  type="number"
                  value={formData.mileage}
                  onChange={(e) =>
                    setFormData({ ...formData, mileage: e.target.value })
                  }
                  placeholder="e.g., 15"
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="engine">Engine (cc)</Label>
                <Input
                  id="engine"
                  type="number"
                  value={formData.engine}
                  onChange={(e) =>
                    setFormData({ ...formData, engine: e.target.value })
                  }
                  placeholder="e.g., 1500"
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="seats">Number of Seats</Label>
                <Select
                  value={formData.seats}
                  onValueChange={(value) =>
                    setFormData({ ...formData, seats: value })
                  }
                >
                  <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                    <SelectValue placeholder="Select seats" />
                  </SelectTrigger>
                  <SelectContent>
                    {[2, 4, 5, 6, 7, 8].map((seat) => (
                      <SelectItem key={seat} value={seat.toString()}>
                        {seat} Seats
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </form>
          </Card>

          {/* Right Column - Actions and Resources */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-8 shadow-lg">
              <Button
                onClick={handlePredict}
                className="w-full text-lg h-12 transition-all duration-200 hover:scale-[1.02] mb-6"
              >
                Predict Price
              </Button>

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full gap-2 h-12 transition-all duration-200 hover:scale-[1.02]"
                >
                  <Database className="w-5 h-5" />
                  View Dataset
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2 h-12 transition-all duration-200 hover:scale-[1.02]"
                >
                  <GithubIcon className="w-5 h-5" />
                  GitHub Repo
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Prediction Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Predicted Car Price</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <div className="text-center">
                <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  ₹15,25,000
                </div>
                <p className="text-muted-foreground">
                  Estimated market value based on your inputs
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted">
                  <span className="text-muted-foreground">
                    Confidence Score
                  </span>
                  <span className="font-medium">85%</span>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
