// lib/api.ts
import api from "./axios";
import type { EmailPayload, APIResponse } from "@/types";

export async function subscribeToNewsletter(payload: EmailPayload): Promise<APIResponse> {
  const response = await api.post<APIResponse>("/api/subscribe", payload);
  return response.data;
}
