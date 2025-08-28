import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#731717] text-white flex flex-col p-4 fixed h-screen">
      <h4 className="text-1rem text-blue-300 font-bold mb-6">BUILD MY RIG</h4>
      <nav className="space-y-3">
        {/* Dashboard */}
        <Link href="/">
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
            1. Dashboard
          </p>
        </Link>

        {/* Users Section */}
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer hover:bg-red-700 p-2 rounded list-none">
            2. Users
            {/* Custom Arrow */}
            <span className="transition-transform duration-200 group-open:rotate-90">
              <SlArrowRight />
            </span>
          </summary>
          <ul className="ml-4 space-y-1 mt-1">
            <Link href="/user-management/view-user-category">
              <li className="cursor-pointer hover:text-red-300">
                2.1 View User Category
              </li>
            </Link>
            <Link href="/user-management/view-teams">
              <li className="cursor-pointer hover:text-red-300">
                2.2 View Teams
              </li>
            </Link>
            <Link href="/user-management/view-users">
              <li className="cursor-pointer hover:text-red-300">
                2.3 View Users
              </li>
            </Link>
          </ul>
        </details>

        {/* Suppliers Section */}
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer hover:bg-red-700 p-2 rounded list-none">
            3. Suppliers
            <span className="transition-transform duration-200 group-open:rotate-90">
              <SlArrowRight />
            </span>
          </summary>
          <ul className="ml-4 space-y-1 mt-1">
            <Link href="/">
              <li className="cursor-pointer hover:text-red-300">
                3.1 View Suppliers Category
              </li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer hover:text-red-300">
                3.2 View Suppliers
              </li>
            </Link>
          </ul>
        </details>

        {/* Other Static Options */}
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          4. Inventory
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          5. Bundles
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          6. Shipping & Labels
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          7. Delivery
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          8. Replacements
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          9. Complaints
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          10. Ticketing
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          11. Customer Tracking
        </p>
      </nav>
    </aside>
  );
};

export default Sidebar;
