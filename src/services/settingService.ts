import { useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";
import { Settings } from "@/types/settingType";

// ─────────────────────────────────────────────
// GET SETTINGS
// ─────────────────────────────────────────────
export const getSettings = async (): Promise<Settings> => {
  const res = await HttpService.get("/setting");

//   console.log("API RESPONSE", res.data);

  return res.data.data[0];
};

// ─────────────────────────────────────────────
// USE SETTINGS
// ─────────────────────────────────────────────
export const useGetSettings = () =>
  useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });