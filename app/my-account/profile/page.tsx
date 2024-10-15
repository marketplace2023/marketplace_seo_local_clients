import Layout from "@/components/layout/layout";
import Siderbar from "@/components/layout/siderbar";
import {
  profileFormSchema,
  ProfileFormSchema,
} from "./zod-schemas/profile-schema";
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

const ProfilePage = () => {
  const form = useForm<ProfileFormSchema>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      id: v4(),
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      pic_profile: "",
    },
  });
  function onSubmit(values: ProfileFormSchema) {
    console.log(values);
  }

  return (
    <>
      <Layout>
        <Siderbar>
          <h1 className="text-2xl font-bold mb-4">My Profile</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del Negocio</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Ingrese el nombre del negocio"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Direccion Fisica</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Ingrese una direccion fisica"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo Electronico</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Ingrese un correo valido"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit">Añadir Cliente</Button>
              </div>
            </form>
          </Form>
        </Siderbar>
      </Layout>
    </>
  );
};

export default ProfilePage;
