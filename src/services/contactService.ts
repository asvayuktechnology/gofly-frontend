import { useMutation, useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";
import { ContactResponse, EnquiryPayload, EnquiryResponse } from "@/types/contactType";


// ─────────────────────────────────────────────
// GET CONTACT INFO
// ─────────────────────────────────────────────
export const getContactInfo =
  async (): Promise<ContactResponse> =>
    HttpService.get("/contact").then(
      (res) => res.data
    );
export const postEnquiry = async (
  payload: EnquiryPayload
): Promise<EnquiryResponse> =>
  HttpService.post("/enquiry", payload).then(
    (res) => res.data.data
  );


// ─────────────────────────────────────────────
// USE CONTACT INFO
// ─────────────────────────────────────────────
export const useContactInfo = () =>
  useQuery({
    queryKey: ["contact-info"],
    queryFn: getContactInfo,
  });


export const usePostEnquiry = () =>
  useMutation({
    mutationFn: postEnquiry,
  });