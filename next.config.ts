import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const nextConfig: NextConfig = {
   reactCompiler: true,
   pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "i.scdn.co",
         },
      ],
   },
};

const withMDX = createMDX({
   extension: /\.(md|mdx)$/,
   options: {
      remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter"],
   },
});

export default withMDX(nextConfig);
