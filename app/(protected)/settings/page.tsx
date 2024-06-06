import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      Settings Page{" "}
      <div>
        {JSON.stringify(session)}
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <Button type="submit">SignOut</Button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
