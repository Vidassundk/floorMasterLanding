import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const placeId = searchParams.get("placeId");

  if (!placeId) {
    return NextResponse.json(
      { error: "Missing placeId parameter" },
      { status: 400 }
    );
  }

  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY; // Store API key in .env
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { error: data.error_message || "Invalid Place ID" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      rating: data.result.rating,
      voteCount: data.result.user_ratings_total,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" + error },
      { status: 500 }
    );
  }
}
