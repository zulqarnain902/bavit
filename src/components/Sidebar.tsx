import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#731717] text-white flex flex-col p-4 fixed h-screen">
      <h4 className="text-1rem text-blue-300 font-bold mb-6">BUILD MY RIG</h4>
      <nav className="space-y-3">
        <Link href="/">
          <p className="cursor-pointer hover:bg-red-700 p-2 rounded">1. Dashboard</p>
        </Link>
        <details className="group">
          <summary className="cursor-pointer hover:bg-red-700 p-2 rounded">2. Users</summary>
          <ul className="ml-4 space-y-1 mt-1">
            <Link href="/user-management/view-user-category">
              <li className="cursor-pointer hover:text-red-300">2.1 View User Category</li>
            </Link>
            <Link href="/user-management/view-teams">
              <li className="cursor-pointer hover:text-red-300">2.2 View Teams</li>
            </Link>
            <Link href="/user-management/view-users">
              <li className="cursor-pointer hover:text-red-300">2.3 View Users</li>
            </Link>
          </ul>
        </details>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">3. Suppliers</p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">4. Inventory</p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">5. Bundles</p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">6. Shipping & Labels</p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">7. Delivery</p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">8. Replacements</p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">9. Complaints</p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">10. Ticketing</p>
        <p className="cursor-pointer hover:bg-red-700 p-2 rounded">11. Customer Tracking</p>
      </nav>
    </aside>
  );
};

export default Sidebar;
