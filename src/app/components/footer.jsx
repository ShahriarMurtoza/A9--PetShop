
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="mt-12 bg-[#4d6e7d] text-white">
            <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight">Pet Adopt House</h2>
                <p className="mt-2 text-sm text-white/80">
                    Are you ready to find your perfect companion
                </p>
            </div>
            <div className="flex flex-row items-center gap-2 px-4 py-6 justify-between mx-auto max-w-7xl">
                <div className="flex flex-col items-center gap-5 px-4 py-6">
                    <p className="text-center">Social Links</p>
                    <Image src="/Social Links.png" alt="Social Links" width={200} height={50} />
                </div>
                <div>
                    <h3 >Contact Us</h3>
                    <ul>
                        <li>Email: info@petshop.com</li>
                        <li>Phone: +8801234567890</li>
                    </ul>
                </div>

            </div>
            <hr />
            <div className="flex justify-between items-center px-6 py-4  text-gray-300 text-sm">
                <p className="ml-10">© 2026 Petshop. All rights reserved.</p>

                <div className="flex gap-6 mr-10">
                    <p className="hover:text-white cursor-pointer">Privacy Policy</p>
                    <p className="hover:text-white cursor-pointer">Terms of Service</p>
                    <p className="hover:text-white cursor-pointer">Cookies</p>
                </div>
            </div>
        </footer>
    );
}
