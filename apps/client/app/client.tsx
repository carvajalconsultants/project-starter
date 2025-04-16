// app/client.tsx
/// <reference types="vinxi/types/client" />
import { StartClient } from "@tanstack/react-start";
import { hydrateRoot } from "react-dom/client";

import { createRouter } from "./clientRouter";

const router = createRouter();

hydrateRoot(document.getElementById("root")!, <StartClient router={router} />);
