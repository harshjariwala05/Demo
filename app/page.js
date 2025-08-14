import FirstOne from "../components/FirstOne";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <main className="border-2 border-black real">
        <FirstOne />
      </main>
    </div>
  );
}
