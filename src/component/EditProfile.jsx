"use client";

import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { UserPen } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EditProfile = ({ user }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      image: user?.image || "",
    },
  });

  useEffect(() => {
    if (open) {
      reset({
        name: user?.name || "",
        image: user?.image || "",
      });
    }
  }, [open, user, reset]);

  const onSubmit = async (userData) => {
    setLoading(true);
    const { error } = await authClient.updateUser({
      image: userData.image,
      name: userData.name,
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Profile updated");
      router.refresh();
      setOpen(false);
    }
  };

  return (
    <>
      <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setOpen(true)}>
        <UserPen className="h-3.5 w-3.5" />
        Edit Profile
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>Update your display name or avatar URL.</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 pt-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[var(--foreground)]">Display Name</label>
              <Input
                {...register("name", { required: "Display name is required" })}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[var(--foreground)]">Avatar URL</label>
              <Input
                type="url"
                {...register("image", {
                  pattern: {
                    value: /^(https?:\/\/|\/).+/i,
                    message: "Please enter a valid URL",
                  },
                })}
                placeholder="https://example.com/avatar.jpg"
              />
              {errors.image && (
                <p className="text-red-500 text-xs">{errors.image.message}</p>
              )}
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditProfile;