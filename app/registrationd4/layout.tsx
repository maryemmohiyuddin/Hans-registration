export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="radial-gradient">
      <div className="">
        {children}
      </div>
    </section>
  );
}
