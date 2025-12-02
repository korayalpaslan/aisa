import RuNavbar from "@/components/shared/RuNavbar";

export default async function InnerLayout({ children }) {
  return (
    <div>
      <RuNavbar />
      {children}
    </div>
  );
}
