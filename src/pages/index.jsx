import Page from "@/components/layout";
import { fetcher, generateUrl } from "@/helpers/helpers";
import { setLoading, setQuizList } from "@/redux/slices/QuizSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("settings");
      if (localData) {
        setSettings(JSON.parse(localData));
      }
    }
  }, []);

  // Generate URL only if settings are loaded
  const url = settings ? `https://opentdb.com/api.php${generateUrl({ ...settings, amount: 10 })}` : null;

  // Fetch data using useSWR
  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (data && data.results) {
      dispatch(setQuizList(data.results));
      dispatch(setLoading(false));
    } else if (error) {
      dispatch(setLoading(false));
      console.error("Error fetching data:", error);
    } else {
      dispatch(setLoading(true));
    }
  }, [data, error, dispatch]);

  console.log("Expected data: ", data, "Error: ", error);

  const handleBtnClick = () => {
    router.push({ pathname: "/test", query: { ...router.query } });
  };

  return (
    <Page>
      <div className="container">
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut fugit libero molestiae explicabo, similique magnam? Magni quod illum cum vero eius animi esse, delectus tenetur accusantium minus sequi rem. Libero ipsum porro pariatur saepe optio nostrum, amet rerum aperiam quisquam, placeat ratione? Consectetur aspernatur cumque ipsum nemo necessitatibus facere sed dolore aut omnis distinctio ullam vel in recusandae totam quo, illum eligendi. Explicabo ab, cupiditate ducimus omnis ea velit provident consequuntur incidunt sapiente reiciendis porro magni illo quasi repellendus doloremque. Nobis modi, expedita cupiditate quo placeat quis animi natus doloremque nesciunt sint sequi dignissimos aut temporibus nostrum odio voluptatem ducimus fugiat ab! Dolores impedit ad, dolor laborum blanditiis incidunt natus quae vitae quos, amet ullam nam in sint mollitia libero exercitationem dolorum qui voluptate harum a deleniti. Sit ducimus, officia incidunt consequuntur quo tempore ea laboriosam culpa quia porro, nisi, non pariatur eum ex. Quas animi quo adipisci, reprehenderit nam exercitationem veritatis consequuntur eos, ut illum tempore maxime! Praesentium sit obcaecati quod officia cupiditate explicabo dolorem hic. Similique vel magni exercitationem minima veniam consectetur consequatur in dolores eos a odio pariatur, alias quod accusantium sit autem ratione dolorem inventore ad cupiditate accusamus reiciendis qui! Maxime doloremque ullam voluptate quis repellendus!
        </h1>
        <div className="flex items-center justify-center my-8">
          <button className="border py-2 px-5" onClick={handleBtnClick}>Start</button>
        </div>
      </div>
    </Page>
  );
}
