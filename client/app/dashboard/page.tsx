"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GithubIcon, Database } from "lucide-react";
import axios from "@/lib/axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CarFormValues, carFormSchema } from "@/lib/validations/car";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState<number>(0);

  const form = useForm<CarFormValues>({
    resolver: zodResolver(carFormSchema),
    defaultValues: {
      name: "",
      year: "",
      km_driven: "",
      fuel: "",
      seller_type: "",
      transmission: "",
      owner: "",
      mileage: "",
      engine: "",
      max_power: "",
    },
  });

  const handlePredict = async (values: CarFormValues) => {
    try {
      const res = await axios.post("/predict", values);
      if (res.status === 200) {
        setIsModalOpen(true);
        const price = Math.round(res.data.predicted_price * 100) / 100;
        setPrice(price);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const generateYearOptions = () => {
    const years = [];
    for (let i = 0; i < 20; i++) {
      years.push(2020 - i);
    }
    return years;
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <main className="max-w-7xl mx-auto">
        <Link href={"/"}>
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-8 shadow-lg">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Used Car Price Predictor
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Enter car details to predict its resale value with AI-powered
              accuracy.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handlePredict)}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Car Name</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                            <SelectValue placeholder="Select Car Name" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Maruti">Maruti</SelectItem>
                          <SelectItem value="Skoda">Skoda</SelectItem>
                          <SelectItem value="Honda">Honda</SelectItem>
                          <SelectItem value="Hyundai">Hyundai</SelectItem>
                          <SelectItem value="Toyota">Toyota</SelectItem>
                          <SelectItem value="Ford">Ford</SelectItem>
                          <SelectItem value="Renault">Renault</SelectItem>
                          <SelectItem value="Mahindra">Mahindra</SelectItem>
                          <SelectItem value="Tata">Tata</SelectItem>
                          <SelectItem value="Chevrolet">Chevrolet</SelectItem>
                          <SelectItem value="Fiat">Fiat</SelectItem>
                          <SelectItem value="Datsun">Datsun</SelectItem>
                          <SelectItem value="Volkswagen">Volkswagen</SelectItem>
                          <SelectItem value="Nissan">Nissan</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                            <SelectValue placeholder="Select Year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {generateYearOptions().map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="km_driven"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kilometers Driven</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="e.g., 120000"
                          className="transition-all duration-200 focus:scale-[1.02]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fuel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                            <SelectValue placeholder="Select fuel type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Petrol">Petrol</SelectItem>
                          <SelectItem value="Diesel">Diesel</SelectItem>
                          <SelectItem value="CNG">CNG</SelectItem>
                          <SelectItem value="LPG">LPG</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="seller_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seller Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                            <SelectValue placeholder="Select seller type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Individual">Individual</SelectItem>
                          <SelectItem value="Dealer">Dealer</SelectItem>
                          <SelectItem value="Trustmark Dealer">
                            Trustmark Dealer
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="transmission"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transmission</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                            <SelectValue placeholder="Select transmission" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Manual">Manual</SelectItem>
                          <SelectItem value="Automatic">Automatic</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="owner"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Owner Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="transition-all duration-200 focus:scale-[1.02]">
                            <SelectValue placeholder="Select owner type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="First Owner">
                            First Owner
                          </SelectItem>
                          <SelectItem value="Second Owner">
                            Second Owner
                          </SelectItem>
                          <SelectItem value="Third Owner">
                            Third Owner
                          </SelectItem>
                          <SelectItem value="Fourth & Above Owner">
                            Fourth & Above
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mileage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mileage (kmpl)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="e.g., 20"
                          className="transition-all duration-200 focus:scale-[1.02]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="engine"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Engine (cc)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="e.g., 1500"
                          className="transition-all duration-200 focus:scale-[1.02]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="max_power"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Max Power</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="e.g., 100"
                          className="transition-all duration-200 focus:scale-[1.02]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </Card>

          <div className="lg:col-span-1 space-y-6">
            <Card className="p-8 shadow-lg">
              <Button
                onClick={form.handleSubmit(handlePredict)}
                className="w-full text-lg h-12 transition-all duration-200 hover:scale-[1.02] mb-6"
              >
                Predict Price
              </Button>

              <div className="space-y-4">
                <Link
                  href={
                    "https://github.com/roshan-acharya/Used-Car-Price-Prediction/blob/main/Cardetails.csv"
                  }
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="w-full gap-2 h-12 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <Database className="w-5 h-5" />
                    View Dataset
                  </Button>
                </Link>
                <Link
                  href={
                    "https://github.com/roshan-acharya/Used-Car-Price-Prediction"
                  }
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="w-full gap-2 h-12 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <GithubIcon className="w-5 h-5" />
                    GitHub Repo
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Predicted Car Price</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <div className="text-center">
                <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  ₹{price}
                </div>
                <p className="text-muted-foreground">
                  Estimated market value based on your inputs
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted">
                  <span className="text-muted-foreground">R2 Score</span>
                  <span className="font-medium">81.58%</span>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
