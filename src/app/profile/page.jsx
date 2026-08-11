import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Check, Bookmark, Calendar, Bell, Settings } from "lucide-react";
import EditProfile from "@/component/EditProfile";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("");
}

const ProfilePage = async () => {
  const reqHeaders = await headers();
  const cookie = reqHeaders.get("cookie") ?? "";

  const res = await fetch(`${BACKEND_URL}/api/auth/get-session`, {
    headers: { cookie },
    cache: "no-store",
  });

  const session = res.ok ? await res.json() : null;
  const user = session?.user;

  if (!user) {
    redirect("/login");
    return;
  }

  return (
    <div className="min-h-screen bg-[var(--background)] p-6">
      <div className="max-w-2xl mx-auto space-y-4">
        <Card>
          <CardContent className="flex flex-row items-center gap-5 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B3B2E] text-white font-bold text-xl overflow-hidden ring-2 ring-[#D4AF37]">
              {user.image ? (
                <img src={user.image} alt={user.name ?? "User"} className="h-full w-full object-cover" />
              ) : (
                <span>{getInitials(user.name ?? "?")}</span>
              )}
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#032B22]">{user.name}</h2>
              <p className="text-sm text-[var(--muted-foreground)]">{user.email}</p>
              <div className="mt-1">
                <Badge variant="success" className="gap-1">
                  <Check className="h-3 w-3" /> Verified
                </Badge>
              </div>
              <div className="mt-3">
                <EditProfile user={user} />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: <Bookmark className="h-5 w-5 text-[#0B3B2E]" />, title: "Saved animals", sub: "Bookmarked listings" },
            { icon: <Calendar className="h-5 w-5 text-[#0B3B2E]" />, title: "My bookings", sub: "View appointments" },
            { icon: <Bell className="h-5 w-5 text-[#0B3B2E]" />, title: "Notifications", sub: "Alerts & updates" },
            { icon: <Settings className="h-5 w-5 text-[#0B3B2E]" />, title: "Settings", sub: "Preferences" },
          ].map(({ icon, title, sub }) => (
            <Card key={title} className="cursor-pointer transition-shadow hover:shadow-md">
              <CardContent className="p-4">
                <div className="mb-2">{icon}</div>
                <p className="font-semibold text-sm text-[var(--foreground)]">{title}</p>
                <p className="text-xs text-[var(--muted-foreground)]">{sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;