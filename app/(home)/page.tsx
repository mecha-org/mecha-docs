import Link from 'next/link';
import Image from 'next/image';

import type { Metadata } from 'next';


export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Mecha for Developers',
    description: 'Guides, tutorials, references for developers to work with Mecha hardware and software.',
    // openGraph: {
    //   images: getPageImage(page).url,
    // },
  };
}

export default function HomePage() {
  return (
    <div className="flex items-center flex-col justify-center text-center flex-1">
      <Image width={300} height={300} src="/mecha-logo-3d.png" alt="Mecha" />
      <h1 className="text-2xl font-bold mb-4">Our docs are updating </h1>
      <p>
        You're a bit early and we are not done yet. These docs will be updated in sometime.
        {/* You can open{' '} */}
        {/* <Link href="/docs" className="font-medium underline">
          /docs
        </Link>{' '} */}
        {/* and see the documentation. */}
      </p>
    </div>
  );
}
