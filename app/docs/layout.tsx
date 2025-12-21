import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import Logo from "../../public/logo.png";
import Image from "next/image";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      nav={{
        title: (
          <>
            <Image src={Logo} alt="mecha-log" className="w-6 h-6" width={24} height={24}/>
            <span className="font-medium">Mecha Docs</span>
          </>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
