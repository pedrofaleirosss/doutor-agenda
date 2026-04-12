import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <div className="mb-6 flex items-center text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <Link
              href={item.href}
              className="text-breadcrumb-foreground font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={` ${index === items.length - 1 ? "text-primary font-bold" : "text-breadcrumb-foreground font-medium"}`}
            >
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <ChevronRight className="text-primary mx-1 h-4 w-4" />
          )}
        </div>
      ))}
    </div>
  );
};
