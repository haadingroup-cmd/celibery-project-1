import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProductsListView } from "@/components/products/ProductsListView";
import { categories, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop all products",
  description: "Browse Celibery NAS storage, GaN chargers, power banks, docks, and wireless chargers.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; series?: string }>;
}) {
  const { category, series } = await searchParams;
  const activeCategory = categories.find((c) => c.slug === category);
  const activeSeries = series;

  const filtered = activeSeries
    ? products.filter((p) => p.series === activeSeries)
    : activeCategory
      ? products.filter((p) => p.categorySlug === activeCategory.slug)
      : products;

  const seriesHeading = activeSeries ? `Celibery ${activeSeries.charAt(0).toUpperCase()}${activeSeries.slice(1)} Series` : null;

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <ProductsListView
          categories={categories}
          activeCategory={activeCategory}
          activeSeries={activeSeries}
          filtered={filtered}
          seriesHeading={seriesHeading}
        />
      </Container>
    </div>
  );
}
