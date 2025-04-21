// app/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";

import { Button, Heading } from "@carvajalconsultants/ui-primitives";

import { Stack } from "../../styled-system/jsx";

const Home = () => (
  <Stack alignItems="center" justifyContent="center" height="full" textWrap="balance" textAlign="center">
    <Heading level={1} size="xl">
      Loaded
    </Heading>

    <Button variant="primary">Button here</Button>
  </Stack>
);

export const Route = createFileRoute("/")({
  component: Home,
});
