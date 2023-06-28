import { useState, useEffect, useRef } from "react";

function Controle() {
  const [data, setData] = useState("");
  const containerRef = useRef<HTMLDivElement>(null); // Add type annotation for containerRef

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [data]);

  return (
    <>
      <input
        type="text"
        className="w-full h-10 font-bold text-3xl outline-none pl-5"
        placeholder="URL ..."
        onChange={(e) => {
          setData(e.target.value);
        }}
      />

      <div
        ref={containerRef}
        className="w-1/2 h-[15em] border m-auto mt-16 bg-[#6b1616] overflow-x-auto overflow-y-auto text-white p-5 font-mono rounded-xl"
        style={{ backgroundImage: "url(./assets/icons/icons8-jake-48.png)" }}
      >
        {data}
      </div>
    </>
  );
}

export default Controle;
