type SectionTitleProps = {
  title: string;
  underlineWidth: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  const { title, underlineWidth } = props;

  return (
    <div className="relative pb-2 inline-flex items-center gap-x-3">
      <span className="w-[10.5px] h-[10.5px] aspect-square shrink-0 bg-[#C0D724] rounded-xs"></span>
      <h3 className="text-xl sm:text-[26px] lg:text-3xl text-black font-extrabold uppercase">{title}</h3>
      <div className="absolute bottom-0 end-0 h-[5px] bg-[#C0D724] rounded-full" style={{ width: underlineWidth }}></div>
    </div>
  );
}
