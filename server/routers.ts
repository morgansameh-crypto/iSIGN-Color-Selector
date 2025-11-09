import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { sendSampleRequest } from "./email";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  email: router({
    sendSampleRequest: publicProcedure
      .input(
        z.object({
          projectName: z.string().min(1),
          architectName: z.string().min(1),
          address: z.string().min(1),
          phoneNumber: z.string().min(1),
          colors: z.array(
            z.object({
              code: z.string(),
              name: z.string().optional(),
              hex: z.string(),
              cmyk: z.string().optional(),
              rgb: z.string().optional(),
              ral: z.string().optional(),
            })
          ).min(1).max(5),
          pdfBase64: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Convert base64 PDF to buffer
          const pdfBuffer = Buffer.from(input.pdfBase64, 'base64');

          // Send email with PDF attachment
          const result = await sendSampleRequest(
            {
              projectName: input.projectName,
              architectName: input.architectName,
              address: input.address,
              phoneNumber: input.phoneNumber,
              colors: input.colors,
            },
            pdfBuffer
          );

          return {
            success: true,
            messageId: result.data?.id,
          };
        } catch (error) {
          console.error('Email send error:', error);
          throw new Error('Failed to send email. Please try again.');
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
