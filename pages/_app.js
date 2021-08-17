import "../styles/global.css";
import Layout from "../components/layout/layout";

import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
SwiperCore.use([Pagination, Navigation, Scrollbar]);

export default function App() {
  return <Layout />;
}
