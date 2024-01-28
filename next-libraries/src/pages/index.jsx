import { useEffect, useState } from "react";

import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/router";

export default function Homepage() {
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.push("/auguri")}>
        Tanti Auguri!
      </button>
    </div>
  );
}
