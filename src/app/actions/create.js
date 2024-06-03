"use server";

import { client } from "@/lib/db";
import { redirect } from "next/navigation";

export async function createBook(formData) {
  const { title, rating, author, blurb } = Object.fromEntries(formData);

  // books: ID , books: 3
  // create book id
  // save new hash for the book
  const id = Math.floor(Math.random() * (1e9 + 7));

  // add the books to the sorted set
  const unique = await client.zAdd(
    "books",
    {
      value: title,
      score: id,
    },
    {
      NX: true,
    }
  );

  if (!unique) {
    return { error: "that book is already being added" };
  }

  await client.hSet(`books:${id}`, {
    title,
    rating,
    author,
    blurb,
  });

  redirect("./");
}
