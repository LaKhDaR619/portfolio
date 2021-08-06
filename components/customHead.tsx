import Head from "next/head";

type Props = {
  title: string;
};

const CustomHead: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta name="og:title" content={title} />
      <link
        href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
        rel="stylesheet"
      />
    </Head>
  );
};

export default CustomHead;
