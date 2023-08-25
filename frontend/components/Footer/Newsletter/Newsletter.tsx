"use client";

import { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [error, setError] = useState(false);

  return (
    <Container
      maxW={"lg"}
      minW={"75vw"}
      bg="rgba(0, 128, 0, 0.2)" // Green background with 80% opacity
      boxShadow={"xl"}
      rounded={"lg"}
      p={6}
      borderRadius={30}
      ml={-3}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={4}
        mt={4}
        color="white"
      >
        <GridItem>
          <Heading fontSize="1.5rem">Subscribe to our Newsletter</Heading>
          <Text
            fontSize="md"
            wordBreak="break-word"
            sx={{ textAlign: "justify" }}
            mt={1.5}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.{" "}
          </Text>
        </GridItem>
        <GridItem mt={8}>
          <Stack
            direction={{ base: "column", md: "row" }}
            as={"form"}
            spacing={"12px"}
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              setError(false);
              setState("submitting");

              // remove this code and implement your submit logic right here
              setTimeout(() => {
                if (email === "fail@example.com") {
                  setError(true);
                  setState("initial");
                  return;
                }

                setState("success");
              }, 1000);
            }}
          >
            <FormControl>
              <Input
                variant={"solid"}
                borderWidth={1}
                color={"gray.800"}
                _placeholder={{
                  color: "gray.400",
                }}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                id={"email"}
                type={"email"}
                required
                rounded="full"
                placeholder={"Your Email"}
                aria-label={"Your Email"}
                value={email}
                disabled={state !== "initial"}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </FormControl>
            <FormControl w={{ base: "100%", md: "40%" }}>
              <Button
                colorScheme={state === "success" ? "green-900" : "green"}
                isLoading={state === "submitting"}
                w="100%"
                type={state === "success" ? "button" : "submit"}
                rounded="full"
              >
                {state === "success" ? <CheckIcon /> : "Submit"}
              </Button>
            </FormControl>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
}
