import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "Lexardi Lab",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function getProductBySlug(slug) {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug]{
      _id,
      title,
      slug,
      description,
      descriptionOne,
      price,
      "image": image.asset->url,
      "firstimage": firstimage.asset->url,
      "secondimage": secondimage.asset->url,
      "thirdimage": secondimage.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      ref,
      category,
      colors,
      sizes
    }`,
    { slug },
    {
      next: {
        revalidate: 1, //revalidate every 30 days
      },
    }
  );

  return product; // Assuming you expect a single product, not an array
}

export async function getAllProducts() {
  const products = await client.fetch(
    groq`*[_type == "product"]{
      _id,
      title,
      slug,
      description,
      descriptionOne,
      price,
      "image": image.asset->url,
      "firstimage": firstimage.asset->url,
      "secondimage": secondimage.asset->url,
      "thirdimage": secondimage.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      ref,
      category,
      colors,
      sizes
    }`,
    {
      next: {
        revalidateTag: 1, //revalidate every hour
      },
    }
  );

  return products;
}

export async function getProducts() {
  const products = await client.fetch(
    groq`*[_type == "product"] |  [0...6] {
      _id,
      title,
      slug,
      description,
      descriptionOne,
      price,
      "image": image.asset->url,
      "firstimage": firstimage.asset->url,
      "secondimage": secondimage.asset->url,
      "thirdimage": secondimage.asset->url,
      "slug": slug.current,
      ref,
      category,
      colors,
      sizes
    }`,
    { next: { revalidateTag: 1 } } // revalidate every hour
  );

  return products;
}
