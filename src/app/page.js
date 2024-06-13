import styles from "./page.module.css";
import Sidebar from "@/components/sidebar/sidebar";
import { IconoirProvider } from "iconoir-react";

export default function Home() {
  return (
    <IconoirProvider>
      <Sidebar iconColor={'#000'}/>
    </IconoirProvider>
  );
}
