import { useRouter } from "next/router";

const article = () => {
  const router = useRouter();
  const { ID } = router.query;

  return <div>this is one of the article's {ID}</div>;
};

export default article;
