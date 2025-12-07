import { Metadata } from "next";
import ArtifactMatcherClient from "./client";

export const metadata: Metadata = {
  title: "Artifact Matcher",
};

export default function ArtifactMatcherPage() {
  return <ArtifactMatcherClient />;
}
