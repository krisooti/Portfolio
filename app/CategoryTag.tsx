type CategoryTagProps = {
  children: string;
};

export function CategoryTag({ children }: CategoryTagProps) {
  return (
    <span className="inline-flex w-max items-center border border-[#eee3e6] bg-[#fffafb] px-[9px] py-[7px] text-[11px] font-medium leading-none text-[#746b6e] transition-colors duration-200 ease-out">
      {children}
    </span>
  );
}
