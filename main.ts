import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My bank called to say my account was overdrawn, then charged me $35 to tell me I couldn't afford the call.";

if (ENTRY.length === 0 || ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
