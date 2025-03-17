import { useEffect } from "react";
import ThongTinCaNhanF from "../../components/Functions/ThongTinCaNhanF";

function ThongTinCaNhan() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="ThongTinCaNhan">
      <ThongTinCaNhanF />
    </main>
  );
}

export default ThongTinCaNhan;
