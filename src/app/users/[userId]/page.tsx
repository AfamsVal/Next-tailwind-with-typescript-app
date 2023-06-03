import React from "react";
import { getUser } from "@/lib/getUser";
import { getUserPosts } from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<IUser> = getUser(userId);
  const user = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<IUser> = getUser(userId);
  const userPostsData: Promise<IPost> = getUserPosts(userId);

  //Method 1
  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);

  // Method 2
  const user = await userData;

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h3>Loading...</h3>}>
        {/* <UserPosts posts={userPosts} /> */}

        {/*@ts-expect-error Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
};

export default UserPage;
