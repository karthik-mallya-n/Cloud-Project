import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const hotelRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.hotel.findMany();
  }),
  getByName: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.hotel.findFirst({ where: { name: input } });
  }),
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.hotel.findFirst({ where: { id: input } });
  }),
  getByCity: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.hotel.findMany({ where: { city: input } });
  }),
  getByCountry: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.hotel.findMany({ where: { country: input } });
  }),
  getImagePath: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.hotelImages.findMany({ where: { hotelId: input } });
  }),
  
  searchFor: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    const hotelByCity = ctx.db.hotel.findMany({ where: { city: input } });
    const hotelByCountry = ctx.db.hotel.findMany({ where: { country: input } });
    const hotelByName = ctx.db.hotel.findMany({ where: { name: input } });
    return { hotelByCity, hotelByCountry, hotelByName };
  }),
});
