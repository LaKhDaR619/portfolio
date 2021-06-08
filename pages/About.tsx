import Layout from "../components/layout";

export default function Home({ allPostsData }) {
  return <h1>About</h1>;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
