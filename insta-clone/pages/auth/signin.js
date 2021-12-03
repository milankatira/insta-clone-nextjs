import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

const signIn = ({ providers }) => {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <buton onClick={() => SignIntoProvider(provider.id)}>
            {provider.name}
          </buton>
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default signIn;
