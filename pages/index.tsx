import { useEffect } from "react";

export default function Home() {
  return (
    <div>
      <p>Hello My Name is LaKhDaR</p>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
