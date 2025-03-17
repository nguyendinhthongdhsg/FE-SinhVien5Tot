import { useEffect } from "react";
import ThongBaoXetF from "../../components/Functions/ThongBaoXetF";

function ThongBaoXet() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="ThongBaoXet">
      <ThongBaoXetF />
    </main>
  );
}

export default ThongBaoXet;
