// app/api.ts
import { defaultAPIFileRouteHandler } from "@tanstack/react-start/api";

import { createStartAPIHandler } from "@carvajalconsultants/headstart/server";

import { pgl } from "../pgl";

export default createStartAPIHandler(pgl, defaultAPIFileRouteHandler);
