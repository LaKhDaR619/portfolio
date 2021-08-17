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
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
      />
      <link
        href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default CustomHead;
