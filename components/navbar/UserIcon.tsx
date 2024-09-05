import { LuUser2 } from "react-icons/lu";
import { currentUser, auth } from "@clerk/nextjs/server";
import Image from "next/image";

async function UserIcon() {
    // const { userId } = auth();

    const user = await currentUser();

    const profileImage = user?.imageUrl;

    if (profileImage) {
        return (
            <Image src={profileImage} className="w-6 h-6 rounded-full object-cover" alt={"image"} width={24} height={24} />

        );
    }
    return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;