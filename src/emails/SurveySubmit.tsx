import {getSurvey} from "@/utils/db";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import {Tailwind} from "@react-email/tailwind";
import * as React from "react";
import env from "@/config/env";

export default function SurveySubmitEmail(
  survey: Awaited<ReturnType<typeof getSurvey>>
) {
  if (!survey) return <></>;

  const surveyLink = `${env.NEXTAUTH_URL}/dashboard/surveys/${survey.id}`;
  const previewText = ` New Survey Has Been Submitted by ${survey.nameInfo.name} ${survey.nameInfo.lastname}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="my-auto text-[#d8f9e4] mx-auto  font-sans px-2">
          <Container className="border bg-[#243239] border-solid border-[#d8f9e4] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>Atlantis Cleaning LLC</strong>
            </Heading>
            <Text className="text-[14px] leading-[24px]">Hello,</Text>
            <Text className="text-[14px] leading-[24px]">
              <strong>{survey.nameInfo.name}</strong> (
              {survey.email ? survey.email : survey.phone}) has requested a
              estimation.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#d8f9e4] rounded text-[#243239] text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={surveyLink}
              >
                Survey Details
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{" "}
              <Link href={surveyLink} className="text-blue-300 no-underline">
                {surveyLink}
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
