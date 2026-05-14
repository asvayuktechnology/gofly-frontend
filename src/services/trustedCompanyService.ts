import { useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";
import {
  TrustedCompanyResponse,
} from "@/types/trustedCompanyType";

// ─────────────────────────────────────────────
// GET TRUSTED COMPANIES
// ─────────────────────────────────────────────
export const getTrustedCompanies =
  async (): Promise<TrustedCompanyResponse> =>
    HttpService.get("/trusted-companies").then(
      (res) => res.data
    );

// ─────────────────────────────────────────────
// USE TRUSTED COMPANIES
// ─────────────────────────────────────────────
export const useTrustedCompanies = () =>
  useQuery({
    queryKey: ["trusted-companies"],
    queryFn: getTrustedCompanies,
  });