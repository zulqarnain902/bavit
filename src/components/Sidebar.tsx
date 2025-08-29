import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#731717] text-white flex flex-col fixed top-0 left-0 h-screen">
      <nav className="mt-15 flex-1 space-y-3 p-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#731717] scrollbar-track-red-200 ">
        {/* Header */}
        <div className=" p-4 border-b border-red-800">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-semibold text-blue-300">
              BUILD MY RIG
            </span>
          </div>
        </div>
        {/* Dashboard */}
        <Link href="/">
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
            1. Dashboard
          </p>
        </Link>

        {/* Users Section */}
        <details className="group" open>
          <summary className="flex items-center justify-between cursor-pointer hover:bg-red-700 p-2 rounded list-none">
            2. Users
            <span className="transition-transform duration-200 group-open:rotate-90">
              <SlArrowRight />
            </span>
          </summary>
          <ul className="ml-4 mt-1 flex flex-col items-start gap-1.5 ">
            {" "}
            {/* Increased spacing here */}
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
            <Link href="/user-management/view-user">
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
          <ul className="ml-4 mt-1 space-y-2">
            {" "}
            {/* Increased spacing */}
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
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">7. Oders</p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          8. Shipping & label
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          9. Delivery
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          10. Replacement
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          11. Complaint
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          12. Ticketing
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          13. Customer Tracking
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          14. HR Management
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          15. Accounting
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          16. Payroll
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          17. Content Management
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          18. Marketing
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          19. Gamers Community
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          20. Documents
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          21. Calendar
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">22. Leads</p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          23. Policies
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          24. Guides
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          25. Chat Management
        </p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">
          26. System Settings
        </p>
      </nav>
    </aside>
  );
};

export default Sidebar;
