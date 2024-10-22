"use client";
import Layout from "@/components/layout/layout";
import Siderbar from "@/components/layout/siderbar";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 } from "uuid";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  serviceFormSchema,
  ServiceFormSchema,
} from "./zod-schema/services-schema";

const ServicesPage = () => {
  const form = useForm<ServiceFormSchema>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      id: v4(),
      clientId: "",
      services_offered: "",
      services_area: "",
      payment_methods: "",
    },
  });
  function onSubmit(values: ServiceFormSchema) {
    console.log(values);
  }

  return (
    <>
      <Layout>
        <Siderbar>
          <h1 className="text-2xl font-bold mb-8">My Bussiness Profile</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="services_offered"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Servicios Ofrecidos</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder=" Services Offered"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="services_area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Services Area</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder=" Services Offered"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="payment_methods"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Methods</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder=" Payment Methods"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Save</Button>
              </div>
            </form>
          </Form>
        </Siderbar>
      </Layout>
    </>
  );
};

export default ServicesPage;
