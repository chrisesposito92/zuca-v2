import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to analyze page by default
  redirect("/analyze");
}
