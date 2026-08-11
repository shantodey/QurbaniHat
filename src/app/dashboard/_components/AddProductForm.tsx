"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { PackagePlus, ImagePlus, Loader2, X } from "lucide-react";
import { uploadImageToImgBB } from "@/api/imgbb";
import { addProduct } from "@/api/products";

interface ProductFormInput {
  title: string;
  type: string;
  breed: string;
  price: number;
  weight: number;
  age: number;
  description: string;
  category: string;
}

export default function AddProductForm() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors },} = useForm<ProductFormInput>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const onSubmit = async (data: ProductFormInput) => {
    if (!imageFile) {
      toast.error("Please select an image");
      return;
    }
    console.log(data);
    
    setSubmitting(true);
    try {
      const imageUrl = await uploadImageToImgBB(imageFile);

      await addProduct({
        title: data.title,
        type: data.type,
        breed: data.breed,
        price: Number(data.price),
        weight: Number(data.weight),
        age: Number(data.age),
        description: data.description,
        image: imageUrl,
        category: data.category,
      });

      toast.success("Product posted successfully!");
      reset();
      removeImage();
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Failed to post product");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <PackagePlus className="h-5 w-5 text-[#0B3B2E]" />
          <CardTitle>Post New Product</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Row 1: Title + Category */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="title">Title / Name</Label>
              <Input
                id="title"
                {...register("title", { required: "Title is required" })}
                placeholder="e.g. Deshi Red Bull"
              />
              {errors.title && (
                <p className="text-red-500 text-xs">{errors.title.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="category">Category</Label>
              <Select
                id="category"
                {...register("category", { required: "Category is required" })}
              >
                <option value="">Select category</option>
                <option value="cow">Cow</option>
                <option value="goat">Goat</option>
                <option value="sheep">Sheep</option>
                <option value="camel">Camel</option>
                <option value="buffalo">Buffalo</option>
              </Select>
              {errors.category && (
                <p className="text-red-500 text-xs">{errors.category.message}</p>
              )}
            </div>
          </div>

          {/* Row 2: Type + Breed */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="type">Type</Label>
              <Input
                id="type"
                {...register("type", { required: "Type is required" })}
                placeholder="e.g. Bull / Heifer"
              />
              {errors.type && (
                <p className="text-red-500 text-xs">{errors.type.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="breed">Breed</Label>
              <Input
                id="breed"
                {...register("breed", { required: "Breed is required" })}
                placeholder="e.g. Sahiwal"
              />
              {errors.breed && (
                <p className="text-red-500 text-xs">{errors.breed.message}</p>
              )}
            </div>
          </div>

          {/* Row 3: Price + Weight + Age */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <Label htmlFor="price">Price (৳)</Label>
              <Input
                id="price"
                type="number"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 1, message: "Must be > 0" },
                })}
                placeholder="e.g. 150000"
              />
              {errors.price && (
                <p className="text-red-500 text-xs">{errors.price.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                {...register("weight", {
                  required: "Weight is required",
                  min: { value: 1, message: "Must be > 0" },
                })}
                placeholder="e.g. 280"
              />
              {errors.weight && (
                <p className="text-red-500 text-xs">{errors.weight.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="age">Age (months)</Label>
              <Input
                id="age"
                type="number"
                {...register("age", {
                  required: "Age is required",
                  min: { value: 1, message: "Must be > 0" },
                })}
                placeholder="e.g. 24"
              />
              {errors.age && (
                <p className="text-red-500 text-xs">{errors.age.message}</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description", { required: "Description is required" })}
              placeholder="Describe the animal — health, color, special traits..."
              rows={3}
            />
            {errors.description && (
              <p className="text-red-500 text-xs">{errors.description.message}</p>
            )}
          </div>

          {/* Image upload */}
          <div className="space-y-1.5">
            <Label>Photo</Label>
            {imagePreview ? (
              <div className="relative inline-block">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-40 w-40 rounded-[var(--radius)] border border-[var(--border)] object-cover"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white shadow hover:bg-red-600"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <label
                htmlFor="image-upload"
                className="flex h-40 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-[var(--radius)] border-2 border-dashed border-[var(--border)] bg-[var(--input-bg)] text-sm text-[var(--muted-foreground)] transition-colors hover:border-[#0B3B2E] hover:text-[#0B3B2E]"
              >
                <ImagePlus className="h-8 w-8" />
                <span>Click to upload image</span>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Posting...
              </>
            ) : (
              "Post Product"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
