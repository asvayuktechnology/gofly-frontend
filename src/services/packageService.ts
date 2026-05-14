import { useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";
import { PackageItem, PackageListResponse } from "@/types/packageType";



// ─────────────────────────────────────────────
// GET PACKAGE LIST
// ─────────────────────────────────────────────
export const getPackages = async (): Promise<PackageListResponse> =>
  HttpService.get("/packages").then((res) => res.data);

// ─────────────────────────────────────────────
// GET SINGLE PACKAGE
// ─────────────────────────────────────────────
export const getSinglePackage = async (
  id: string
): Promise<PackageItem> => {

  if (!id) {
    throw new Error("Package ID is required");
  }

  const res = await HttpService.get(`/packages/${id}`);

  

  return res.data.data;
};
// ─────────────────────────────────────────────
// USE PACKAGE LIST
// ─────────────────────────────────────────────
export const usePackages = () =>
  useQuery({
    queryKey: ["packages"],
    queryFn: getPackages,
  });

// ─────────────────────────────────────────────
// USE SINGLE PACKAGE
// ─────────────────────────────────────────────
export const useSinglePackage = (id: string) =>
  useQuery({
    queryKey: ["package", id],

    // important fix
    queryFn: async () => await getSinglePackage(id),

    // prevent undefined api call
    enabled: !!id,
  });