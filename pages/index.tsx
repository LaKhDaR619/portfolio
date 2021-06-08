import Layout from "../components/layout";

export default function Home({ allPostsData }) {
  return <Layout />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
