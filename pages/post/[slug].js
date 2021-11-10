import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  return <Layout></Layout>;
}
