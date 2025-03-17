import { useEffect } from "react";
import BoTieuChuanF from "../../components/Functions/BoTieuChuanF";

function BoTieuChuan() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="BoTieuChuan">
      <BoTieuChuanF />
    </main>
  );
}

export default BoTieuChuan;
