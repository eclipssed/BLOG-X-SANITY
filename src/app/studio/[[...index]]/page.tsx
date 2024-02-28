"use client";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { metadata as studioMetaData } from "next-sanity/studio/metadata";
import { viewport as studioViewPort } from "next-sanity/studio/viewport";
/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

// export const metadata: Metadata = {
//   ...studioMetaData,
//   title: "Loading Studio...",
// };

// export const viewport: Viewport = {
//   ...studioViewPort,
//   interactiveWidget: "resizes-content",
// };
export default function StudioPage() {
  return <NextStudio config={config} />;
}
