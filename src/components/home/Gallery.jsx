import { useState } from "react";
import { useGallery } from "../../hooks/useGallery";
import { useHero } from "../../hooks/useHero";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Skeleton from "../ui/Skeleton";
import QueryState from "./QueryState";

/** Accessible photo preview and modal gallery, driven by mock gallery data. */
export default function Gallery() {
  const query = useGallery();
  const heading = useHero();
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const copy = heading.data?.gallerySection;
  if (query.isLoading)
    return (
      <Section id="gallery">
        <Skeleton lines={4} />
      </Section>
    );
  if (query.isError)
    return (
      <Section id="gallery">
        <QueryState error={query.error} onRetry={query.refetch} />
      </Section>
    );
  const images = query.data ?? [];
  if (!images.length)
    return (
      <Section id="gallery">
        <QueryState isEmpty />
      </Section>
    );
  return (
    <Section id="gallery">
      <SectionHeading
        eyebrow={copy?.eyebrow}
        title={copy?.title}
        subtitle={copy?.subtitle}
        align="center"
        className="mx-auto"
      />
      <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3 sm:gap-5">
        {images.slice(0, 6).map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelected(image)}
            aria-label={`${copy?.viewImage ?? "View photo"}: ${image.alt}`}
            className={`group overflow-hidden rounded-2xl bg-canvas-muted focus-visible:outline ${index === 0 || index === 3 ? "row-span-2" : ""}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button variant="outline" size="lg" onClick={() => setShowAll(true)}>
          {copy?.action}
        </Button>
      </div>
      <Modal
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        title={copy?.modalTitle}
      >
        {selected && (
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-h-[65vh] w-full rounded-2xl object-contain"
          />
        )}
      </Modal>
      <Modal
        open={showAll}
        onClose={() => setShowAll(false)}
        title={copy?.title}
      >
        <div className="grid grid-cols-2 gap-3">
          {images.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => {
                setShowAll(false);
                setSelected(image);
              }}
              aria-label={`${copy?.viewImage ?? "View photo"}: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-36 w-full rounded-xl object-cover sm:h-48"
              />
            </button>
          ))}
        </div>
      </Modal>
    </Section>
  );
}
