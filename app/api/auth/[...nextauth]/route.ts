export const runtime = "edge"; // ✅ Required for new next-auth setup

import { handlers } from "@/auth";
export const { GET, POST } = handlers;
