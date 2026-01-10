"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ProductGallery from "./product-gallery";

interface ProductAccordionProps {
    title: string;
    images: string[];
}

export default function ProductAccordion({ title, images }: ProductAccordionProps) {
    return (
        <Accordion type="single" collapsible className="w-full bg-card/60 rounded-lg border border-border/50 px-4">
            <AccordionItem value={title}>
                <AccordionTrigger className="font-headline text-2xl font-bold text-white hover:no-underline">
                    {title}
                </AccordionTrigger>
                <AccordionContent>
                    <ProductGallery images={images} />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

    
