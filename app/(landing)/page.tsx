import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const LandingPage: FC<pageProps> = ({}) => {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
