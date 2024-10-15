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
                className="block py-2 px-4 text-sm hover:bg-gray-200"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/my-account/settings"
                className="block py-2 px-4 text-sm hover:bg-gray-200"
              >
                Settings
              </Link>
            </li>
            {/* Añade más enlaces según sea necesario */}
          </ul>
        </nav>
      </aside>
      <div className="flex-grow p-6">{children}</div>
    </div>
  );
};

export default Siderbar;
