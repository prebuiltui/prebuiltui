import docstraConfig from "@/docstra.config";
import { useMDXComponents } from "@/mdx-components";
import {
    DocstraBody,
    DocstraHeader,
    DocstraPage,
    DocstraProvider,
} from "docstra";

import { source } from "@/lib/source";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params
    const page = source.getPage(slug);
    if (!page) return notFound();

    const MDX = page.body;

    return (
        <DocstraProvider docstraConfig={docstraConfig} docs={source.files} pageData={page.info}>
            <DocstraHeader />
            <DocstraPage>
                <DocstraBody>
                    <MDX components={useMDXComponents()} />
                </DocstraBody>
            </DocstraPage>
        </DocstraProvider>
    );
}

export function generateStaticParams() {
    return source.generateStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params
    const page = source.getPage(slug);
    if (!page) return notFound();

    return {
        title: page.info.data.metadata.title,
        description: page.info.data.metadata.description,
    }
}