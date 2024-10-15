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
  businessProfileFormSchema,
  BusinessProfileFormSchema,
} from "./zod-schemas/bussiness_profile_schema";
import { Textarea } from "@/components/ui/textarea";

const BussinessProfilePage = () => {
  const form = useForm<BusinessProfileFormSchema>({
    resolver: zodResolver(businessProfileFormSchema),
    defaultValues: {
      id: v4(),
      business_name: "",
      description: "",
      slogan: "",
      category: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      phone: "",
      email: "",
      website: "",
      schedule: [],
    },
  });
  function onSubmit(values: BusinessProfileFormSchema) {
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
                  name="business_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bussines Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your bussines name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripcion</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder=" Enter a description"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="short_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Short Description</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter a short description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="slogan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slogan</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter a slogan"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter a slogan"
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

export default BussinessProfilePage;
