type CategoryTagProps = {
  children: string;
};

export function CategoryTag({ children }: CategoryTagProps) {
  return <span className="category-tag">{children}</span>;
}
