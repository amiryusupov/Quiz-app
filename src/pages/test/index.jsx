import Radio from "@/components/Form/Radio";
import Page from "@/components/layout";
import { testUrl } from "@/helpers/urls";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";
import { Result } from "postcss";
import React, { useEffect, useMemo, useState } from "react";

function Test() {
  const router = useRouter();
  let [count, setCount] = useState(1);
  const [settings, setSettings] = useState({});
  const { data, loading } = useFetch(testUrl, { amount: 10, ...settings }, [
    settings,
  ]);
  const tests = useMemo(() => {
    return data === null ? [] : data.results;
  }, [data]);
  const isTestTrue = tests[count];
  console.log(tests);
  useEffect(() => {
    if (typeof window !== undefined) {
      const localData = localStorage.getItem("settings");
      setSettings(JSON.parse(localData));
    }
  }, []);
  const handleNext = () => {
    if(count<=tests.length) { 
      setCount(count+1)
    }
    else {
      router.push("/result")
    }
  }
  const handlePrev = () => {
    if(count>0) {
      setCount(count-1)
    }
  }
  return (
    <Page>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex items-center w-full h-full justify-center">
          <div className="flex flex-col items-center justify-between border w-[40%] h-[40%] shadow-lg rounded">
          <div className="w-full  text-center bg-sky-500 text-white">Question #{count}</div>
            <Radio
              question={tests[count]?.question}
              data={
                isTestTrue ? (
                  [...tests[count].incorrect_answers]
                ) : (
                  <p>Loading...</p>
                )
              }
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
