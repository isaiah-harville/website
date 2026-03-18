import anna from "./anna";
import isaiah from "./isaiah";

const siteProfiles = {
  anna,
  isaiah,
};

export const resolveSiteKey = (locationLike) => {
  const search = locationLike?.search ?? "";
  const hostname = (locationLike?.hostname ?? "").toLowerCase();
  const override = new URLSearchParams(search).get("site")?.toLowerCase();

  if (override && siteProfiles[override]) {
    return override;
  }

  if (hostname === "anna.harville.dev" || hostname.startsWith("anna.")) {
    return "anna";
  }

  return "isaiah";
};

export const getSiteProfile = (
  locationLike = typeof window !== "undefined" ? window.location : undefined,
) => siteProfiles[resolveSiteKey(locationLike)];

export default siteProfiles;
