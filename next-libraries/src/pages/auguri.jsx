import { useEffect, useState } from "react";

import Confetti from "react-confetti";

import { useRouter } from "next/router";
import Link from "next/link";

export default function Homepage() {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState("#ffffff");
  const [pieces, setPieces] = useState(10);

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  const onHandleColorChange = (e) => setColor(e.target.value);

  const onHandlePiecesChange = (e) => setPieces(e.target.value);

  return (
    <div>
      <input
        type="range"
        value={pieces}
        onChange={onHandlePiecesChange}
        max={500}
      />
      <input type="text" value={color} onChange={onHandleColorChange} />

      <Link href="https://youtu.be/eK9NTaKIPJ0">
        <h1>AUGURI!</h1>
      </Link>

      <Confetti
        width={width}
        height={height}
        colors={[color]}
        numberOfPieces={pieces}
      />
    </div>
  );
}
