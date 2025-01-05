import { slugifyStr } from "@utils/slugify";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, description, image } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {/* Render the image if it exists */}
        {image && (
          <div className="image-container">
            <img
              src={image}
              alt={`Image for ${title}`}
              className="image"
            />
          </div>
        )}

        {secHeading ? (
          <h2 {...headerProps} className="text-center">{title}</h2> // Center title
        ) : (
          <h3 {...headerProps} className="text-center">{title}</h3> // Center title
        )}
      </a>
      <p className="text-center">{description}</p> {/* Center description */}
    </li>
  );
}
