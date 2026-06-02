import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getWritings() {
   const dir = path.join(process.cwd(), "src/writings");
   return fs.readdirSync(dir)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
         const source = fs.readFileSync(path.join(dir, file), "utf8");
         const { data, content } = matter(source);

         const wordCount = content.trim().split(/\s+/).length;
         const readingTime = Math.ceil(wordCount / 200);

         return {
            slug: file.replace(".mdx", ""),
            title: data.title ?? file.replace(".mdx", ""),
            date: new Date(data.date).toLocaleDateString("en-US", {
               year: "numeric",
               month: "short",
               day: "numeric",
            }),
            readingTime,
         };
      });
}