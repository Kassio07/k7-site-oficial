import type { ReactNode } from "react";

type GalleryItem = {
  key: string;
  type: string;
  title: string;
  note: string;
  preview: ReactNode;
  browserLabel?: string;
};

export function ProjectGallery({ items }: { items: GalleryItem[] }) {
  return <div className="project-grid">{items.map((item) => <article className="project-card reveal" key={item.key}>
    <div className="project-screen real-project project-gallery-screen">
      <div className="project-browser"><i /><i /><i /><span>{item.browserLabel ?? "projeto demonstrativo K7 Sites"}</span></div>
      {item.preview}
    </div>
    <div className="project-meta"><div><small>{item.type}</small><h3>{item.title}</h3><p>{item.note}</p></div><i aria-hidden="true">↗</i></div>
  </article>)}</div>;
}
