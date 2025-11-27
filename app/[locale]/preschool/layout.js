import RuNavbar from "@/components/shared/RuNavbar";

export default async function PrepLayout({ children }) {
  return (
    <div>
      <RuNavbar />
      {children}
    </div>
  );
}
