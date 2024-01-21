import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function App() {
  noStore();
  const session = await getServerAuthSession();

  return <></>;
}
