import Radio from "@/components/Form/Radio";
import Page from "@/components/layout";
import { fetcher, generateUrl, shuffleArr } from "@/helpers/helpers";
import { testUrl } from "@/helpers/urls";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import useSWR from "swr"

function Test() {
  const router = useRouter();
  let [count, setCount] = useState(1);
  const [settings, setSettings] = useState({});
  const { data, isLoading } = useSWR('https://opentdb.com/api.php' + generateUrl({ ...settings, amount: 10 }), fetcher)
  const tests = useMemo(() => {
    return data ? data.results : []
  }, [data])
  useEffect(() => {
    if (typeof window !== undefined) {
      const localData = localStorage.getItem("settings");
      setSettings(JSON.parse(localData));
    }
  }, []);
  const handleNext = () => {
    if (count <= tests.length) {
      setCount(count + 1)
    }
    else {
      router.push("/result")
    }
  }
  const handlePrev = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <Page>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex items-center w-full h-full justify-center">
          <div className="flex flex-col items-center justify-between border w-[30%] h-[40%] shadow-lg rounded">
            <div className="w-full  text-center bg-sky-500 text-xl py-3 text-white">Question #{count}</div>
            <Radio
              question={tests[count]?.question}
              data={shuffleArr([...tests[count]?.incorrect_answers, tests[count].correct_answer])}
            />
            <div className="flex w-full justify-between mt-5">
              <button
                disabled={0}
                onClick={handlePrev}
                className="flex-1 bg-sky-500 text-white py-5 hover:bg-sky-600 rounded-bl"
              >
                Previous
              </button>
              <button onClick={handleNext} className="flex-1 bg-sky-500 text-white py-5 hover:bg-sky-600 rounded-br">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </Page>
  );
}

export default Test;
