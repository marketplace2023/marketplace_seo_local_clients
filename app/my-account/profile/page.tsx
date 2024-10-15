import Layout from "@/components/layout/layout";
import Siderbar from "@/components/layout/siderbar";

const ProfilePage = () => {
  return (
    <Layout>
      <Siderbar>
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        {/* Aquí va el contenido del perfil */}
      </Siderbar>
    </Layout>
  );
};

export default ProfilePage;
