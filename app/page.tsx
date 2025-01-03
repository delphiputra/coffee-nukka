import { redirect } from "next/navigation";

export default function Home() {
  // Redirect ke halaman login
  redirect("/admin");

  return null; // Tidak menampilkan konten di halaman root
}
