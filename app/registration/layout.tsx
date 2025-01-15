export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex linear-gradient flex-col items-center justify-center">
      <div className="inline-block w-full text-center justify-center">
        {children}
      </div>
    </section>
  );
}
