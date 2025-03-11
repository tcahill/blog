import rss from "@astrojs/rss";
import { articlePath } from "@lib/org";

const articles = import.meta.glob("../articles/*.json", {
  eager: true,
});

export function GET(context) {
  return rss({
    title: "Tom Cahill's Blog",
    description:
      "Hi! I'm Tom and this is my funny little home on the web. Here you can expect to find my opinions and learnings about technology, annoying Emacs evangelism, and occasional detours into a variety of other aspects of life.",
    site: context.site,
    items: Object.values(articles).map((article) => ({
      title: article.properties.title[0],
      link: articlePath(article),
    })),
  });
}
