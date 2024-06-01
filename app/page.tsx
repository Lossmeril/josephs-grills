"use client";

import { useRouter } from "next/navigation";

const IndexDef = () => {
  const router = useRouter();
  router.push("/cs");

  return <></>;
};

export default IndexDef;
