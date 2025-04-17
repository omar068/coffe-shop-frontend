import { fetchAllItems } from "@/services/apiService";
import HomeClient from "./HomeClient";

export default async function HomePage() {
  const [items, itemsByState] = await fetchAllItems();

  return <HomeClient items={items} itemsByState={itemsByState} />;
}
