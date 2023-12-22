import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex w-full h-full sm:min-h-screen flex-col items-center justify-between sm:p-14">
      <div className="mx-auto">
        <SignUp />
      </div>
    </main>
  );
}
