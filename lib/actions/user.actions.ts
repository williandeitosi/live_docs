"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { liveblocks } from "../liveblocks";
import { parseStringify } from "../utils";

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
  try {
    const { data } = await clerkClient.users.getUserList({
      emailAddress: userIds,
    });

    // Create a map for quick lookup
    const userMap = new Map(
      data.map((user) => [
        user.emailAddresses[0].emailAddress,
        {
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.emailAddresses[0].emailAddress,
          avatar: user.imageUrl,
        },
      ])
    );

    // Map through userIds and handle missing users
    const sortedUsers = userIds.map((email) => {
      const user = userMap.get(email);
      if (!user) {
        // Return a placeholder user object if no matching user found
        return {
          id: email,
          name: "Unknown User",
          email: email,
          avatar: "",
        };
      }
      return user;
    });

    return parseStringify(sortedUsers);
  } catch (error) {
    console.error(`Error fetching users:`, error);
    return parseStringify([]); // Return empty array instead of undefined
  }
};

export const getDocumentUsers = async ({
  roomId,
  currentUser,
  text,
}: {
  roomId: string;
  currentUser: string;
  text: string;
}) => {
  try {
    const room = await liveblocks.getRoom(roomId);
    if (!room) throw new Error("Room not found");

    const users = Object.keys(room.usersAccesses).filter(
      (email) => email !== currentUser
    );

    if (text?.length) {
      const lowerCaseText = text.toLowerCase();
      const filteredUsers = users.filter((email: string) =>
        email.toLowerCase().includes(lowerCaseText)
      );
      return parseStringify(filteredUsers);
    }

    return parseStringify(users);
  } catch (error) {
    console.error(`Error fetching document users:`, error);
    return parseStringify([]); // Return empty array instead of undefined
  }
};
