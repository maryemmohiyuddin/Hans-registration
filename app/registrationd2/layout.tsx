export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="linear-gradient">
      <div className="">
        {children}
      </div>
    </section>
  );
}
