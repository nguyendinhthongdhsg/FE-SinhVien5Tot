import { useEffect } from "react";
import NopHoSoF from "../../components/Functions/NopHoSoF";

function NopHoSo() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="NopHoSo">
      <NopHoSoF />
    </main>
  );
}

export default NopHoSo;
