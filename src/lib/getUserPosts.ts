export const getUserPosts = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } } // This will reload in 60sec
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};
