import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={inter.className}>
            {children}
        </div>
    );
}