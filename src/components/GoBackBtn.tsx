"use client";

import { useRouter } from "next/navigation";

export default function GoBackBtn() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/products");
  };
  return <button onClick={handleClick}>뒤로가기 </button>;
}
