import Link from "next/link";

const Siderbar = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4">
        <nav>
          <ul>
            <li>
              <Link
                href="/my-account/profile"
                className="block py-2 px-4 text-sm font-semibold hover:bg-gray-200"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/my-account/bussiness_profile"
                className="block py-2 px-4 text-sm font-semibold hover:bg-gray-200"
              >
                Bussines Profile
              </Link>
            </li>
            <li>
              <Link
                href="/my-account/services"
                className="block py-2 px-4 text-sm font-semibold hover:bg-gray-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/my-account/media"
                className="block py-2 px-4 text-sm font-semibold hover:bg-gray-200"
              >
                Media
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-grow p-6">{children}</div>
    </div>
  );
};

export default Siderbar;
