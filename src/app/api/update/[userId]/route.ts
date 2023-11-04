// pages/api/update/[userId].js

import connectMongoDB from "../../../../../libs/mongodb";
import { User } from "../../../../../models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request, route: { params: { userId: string } }) {
  try {
    await connectMongoDB();
    const userId  = route.params.userId; // Access route parameters using request.query
    console.log(userId);
    if (!userId) {
      return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }
    const user=await User.findById(userId)
    const updatedUser = await User.findByIdAndUpdate(userId, { isVerified: true });
    if(user){
    const maxTotalMoneyUser = await User.findOne({
      teamName: user.teamName,
      isVerified: true,
    }).sort({ totalMoney: -1 });
    if(maxTotalMoneyUser){
      if(updatedUser){
    updatedUser.totalMoney = maxTotalMoneyUser.totalMoney + updatedUser.profitLoss;}}}
    if (updatedUser) {
      return NextResponse.json({ message: "User marked as verified" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error marking as verified:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
