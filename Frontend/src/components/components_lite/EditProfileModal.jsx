import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "../../../utils/data";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const EditProfileModal = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    name: user?.fullname,
    email: user?.email,
    phone: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills ? [...user.profile.skills]: [],
    file: user?.profile?.resume,
  });
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const FileChangehandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phone);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills.join(","));
    if (input.file) formData.append("file", input.file);

    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-[450px] bg-gray-50"
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Edit Profile
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="text-gray-700">
                Name
              </Label>
              <Input
                id="name"
                value={input.name}
                name="name"
                type="text"
                onChange={changeEventHandler}
                placeholder="Enter your name"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                value={input.email}
                type="email"
                onChange={changeEventHandler}
                placeholder="Enter your email"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="text-gray-700">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={input.phoneNumber}
                type="tel"
                onChange={changeEventHandler}
                placeholder="Enter your phone number"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Bio */}
            <div>
              <Label htmlFor="bio" className="text-gray-700">
                Bio
              </Label>
              <Input
                id="bio"
                name="bio"
                value={input.bio}
                placeholder="Enter your bio"
                onChange={changeEventHandler}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Skills */}
            <div>
              <Label htmlFor="skills" className="text-gray-700">
                Skills
              </Label>
              <Input
                id="skills"
                name="skills"
                value={input.skills}
                type="text"
                onChange={changeEventHandler}
                placeholder="Enter your skills"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Resume */}
            <div>
              <Label htmlFor="file" className="text-gray-700">
                Resume
              </Label>
              <Input
                id="file"
                name="file"
                type="file"
                onChange={FileChangehandler}
                accept="application/pdf"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            {/* Submit Button with Spinner */}
            <Button
              type="submit"
              disabled={loading}
              className="mt-1 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;
