import { fetchAuthUserAction } from "@/actions";

export default async function Home() {
  const currentUserInfo = await fetchAuthUserAction();
  // console.log("cure: ", currentUserInfo);
  return (
    <div className="text-white">
      <h1>{currentUserInfo?.data?.userName}</h1>
      <h1>{currentUserInfo?.data?.email}</h1>
    </div>
  );
}
