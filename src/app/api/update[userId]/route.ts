// pages/api/update/[userId].js

import connectMongoDB from "../../../../libs/mongodb";
import { User } from "../../../../models/user";
import { NextResponse } from "next/server";

export async function POST(request: { query: { userId: any; }; }) {
  try {
    // await connectMongoDB();
    // console.log(request.query)

    // const { userId } = request.query;
    
    // // Update the user's isValid property to true
    // const updatedUser = await User.findByIdAndUpdate(userId, { isVerified: true });

    // if (updatedUser) {
    //   return NextResponse.json({ message: "User marked as verified" }, { status: 200 });
    // } else {
    //   return NextResponse.json({ message: "User not found" }, { status: 404 });
    // }
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    console.error("Error marking as verified:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
