import { useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";
import { AboutData } from "@/types/aboutType";

export const getAbout = async (): Promise<AboutData> => {
  const res = await HttpService.get("/about");
  return res.data.data[0];
};

export const useGetAbout = () =>
  useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });
