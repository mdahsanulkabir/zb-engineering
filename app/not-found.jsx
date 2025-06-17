import Link from "next/link";
import { FaHome } from "react-icons/fa";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
    <h1 className="text-7xl font-bold text-[#F3692A] mb-4">404</h1>
    <h2 className="text-3xl md:text-4xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8 mb-4">
      Page Not Found
    </h2>
    <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
      Sorry, the page you are looking for does not exist or has been moved.<br />
      Please check the URL or return to the homepage.
    </p>
    <Link
      href="/"
      className="flex items-center gap-2 px-6 py-3 bg-[#F3692A] text-white font-semibold rounded-full shadow-lg hover:bg-[#e65c24] transition"
    >
      <FaHome size={20} />
      Go Home
    </Link>
  </div>
);

export default NotFound;