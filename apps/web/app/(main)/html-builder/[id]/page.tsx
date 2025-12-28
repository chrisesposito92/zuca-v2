"use client";

import { use } from "react";
import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

/**
 * HTML Builder session detail page.
 * Redirects to the unified solution page which handles all session types.
 */
export default function HTMLBuilderSessionPage({ params }: PageProps) {
  const { id } = use(params);
  redirect(`/solution/${id}`);
}
