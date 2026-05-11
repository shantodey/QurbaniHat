'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaUserEdit } from "react-icons/fa";

const EditProfile = ({ user }) => {
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData)
        const { data, error } = await authClient.updateUser(
            {
                image: userData.image,
                name: userData.name,
                callbackURL: "/profile"
            },
            {
                onSuccess: (ctx) => {
                    router.refresh()
                },
                onError: (ctx) => {
                    alert(ctx.error.message);
                },
            }
        );

        document.getElementById('edit_profile_modal').close()
    }
    const conFormBooking=()=>{
        toast.promise(
            saveSettings(settings),
            {
                loading: 'Saving...',
                success: <b>Settings saved!</b>,
                error: <b>Could not save.</b>,
            }
        );
    }

    return (
        <div>
            <button
                onClick={() => document.getElementById('edit_profile_modal').showModal()}
                className="btn btn-sm btn-neutral gap-2"
            >
                <FaUserEdit /> Edit profile
            </button>

            <dialog id="edit_profile_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <h3 className="font-semibold text-lg mb-1">Edit profile</h3>
                    <p className="text-sm text-base-content/50 mb-5">Update your display name or avatar URL.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-sm">Display name</span>
                            </div>
                            <input
                                className="input input-bordered w-full"
                                name="name"
                                defaultValue={user.name}
                                type="text"
                                placeholder="Your name"
                                required
                            />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-sm">Avatar URL</span>
                            </div>
                            <input
                                className="input input-bordered w-full"
                                name="image"
                                defaultValue={user.image}
                                type="url"
                                placeholder="https://example.com/avatar.jpg"
                            />
                        </label>

                        <div className="modal-action mt-6">
                            <button
                                type="button"
                                className="btn btn-ghost"
                                onClick={() => document.getElementById('edit_profile_modal').close()}
                            >
                                Cancel
                            </button>
                            <button onClick={conFormBooking} type="submit" className="btn btn-neutral">
                                Save changes
                            </button>
                        </div>

                    </form>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default EditProfile;