import anna from "./anna";
import isaiah from "./isaiah";

const siteProfiles = {
  anna,
  isaiah,
};

const isLocalPreviewHost = (hostname) =>
  hostname === "" ||
  hostname === "localhost" ||
  hostname === "127.0.0.1" ||
  hostname === "[::1]";

export const resolveSiteKey = (locationLike) => {
  const search = locationLike?.search ?? "";
  const hostname = (locationLike?.hostname ?? "").toLowerCase();
  const override = new URLSearchParams(search).get("site")?.toLowerCase();

  if (hostname === "anna.harville.dev" || hostname.startsWith("anna.")) {
    return "anna";
  }

  if (hostname === "isaiah.harville.dev" || hostname.startsWith("isaiah.")) {
    return "isaiah";
  }

  if (isLocalPreviewHost(hostname) && override && siteProfiles[override]) {
    return override;
  }

  return "isaiah";
};

export const getSiteProfile = (
  locationLike = typeof window !== "undefined" ? window.location : undefined,
) => siteProfiles[resolveSiteKey(locationLike)];

export default siteProfiles;
