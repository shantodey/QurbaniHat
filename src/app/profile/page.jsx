import EditProfile from "@/component/EditProfile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("");
}

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return <div>Not logged in</div>;
  }

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-2xl mx-auto space-y-4">

        {/* Profile Hero Card */}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <div className="card-body flex flex-row items-center gap-5">
            <div className="avatar placeholder">
              <div className="bg-teal-100 text-teal-800 rounded-full w-16 ring ring-teal-400 ring-offset-base-100 ring-offset-2">
                {user.image ? (
                  <img src={user.image} alt={user.name ?? "User"} />
                ) : (
                  <span className="text-xl font-medium">
                    {getInitials(user.name ?? "?")}
                  </span>
                )}
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-medium">{user.name}</h2>
              <p className="text-sm text-base-content/60">{user.email}</p>
              <div className="badge badge-success badge-sm mt-1 gap-1">
                ✓ Verified
              </div>

              <div className="flex gap-2 mt-3">
               <EditProfile user={user}></EditProfile>
                
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: "🔖", title: "Saved animals",  sub: "Your bookmarked listings" },
            { icon: "📅", title: "My bookings",    sub: "View & manage appointments" },
            { icon: "🔔", title: "Notifications",  sub: "Alerts & updates" },
            { icon: "⚙️", title: "Settings",       sub: "Account preferences" },
          ].map(({ icon, title, sub }) => (
            <div
              key={title}
              className="card bg-base-100 border border-base-300 shadow-sm hover:bg-base-200 cursor-pointer transition-colors"
            >
              <div className="card-body p-4">
                <div className="text-2xl mb-2">{icon}</div>
                <p className="font-medium text-sm">{title}</p>
                <p className="text-xs text-base-content/50">{sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;