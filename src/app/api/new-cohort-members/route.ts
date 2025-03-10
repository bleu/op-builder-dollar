import { NextResponse } from "next/server";

import { DuneClient } from "@duneanalytics/client-sdk";

export const GET = async () => {
  try {
    const queryId = process.env.NEW_MEMBERS_QUERY_ID;
    if (!queryId)
      return NextResponse.json(
        {
          error: "Internal Server Error",
          message: "Missing environment variable queryId",
        },
        { status: 500 },
      );

    const dune = new DuneClient(process.env.DUNE_API_KEY ?? "");
    const queryResult = await dune.getLatestResult({
      queryId: Number(queryId),
    });

    if (!queryResult.result)
      return NextResponse.json(
        {
          error: "Internal Server Error",
          message: queryResult.error,
        },
        { status: 500 },
      );

    return NextResponse.json(queryResult.result.rows);
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
};
