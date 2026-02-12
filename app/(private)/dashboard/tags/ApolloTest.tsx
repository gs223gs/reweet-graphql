"use client";

import { useQuery } from "@apollo/client/react";
import { useState } from "react";

import { AllOwnedTagsDocument } from "@/graphql/__generated__/graphql";

type Props = {
  userId: string;
};
export const ApolloTest = ({ userId }: Props) => {
  const [title, setTitle] = useState("ApolloClientTest");
  const { data, loading, error } = useQuery(AllOwnedTagsDocument, {
    variables: { userId },
    // まずキャッシュを見て、なければネットワークに取りに行く
    fetchPolicy: "cache-first",
    // 2回目以降の再実行はキャッシュだけで返す（再リクエストを抑える）
    nextFetchPolicy: "cache-only",
  });

  return (
    <div>
      <h1 onClick={() => setTitle("ApolloTest")}>{title}</h1>
      {data?.allOwnedTags.map((t) => {
        return <div key={t.id}>{t.name}</div>;
      })}
      {loading ? "loading" : "not loading"}
      {error?.message}
      {error?.name}
    </div>
  );
};
