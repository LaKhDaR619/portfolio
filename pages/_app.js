import Layout from "../components/layout/layout";
import "../styles/global.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Scrollbar]);

export default function App() {
  return <Layout />;
}
