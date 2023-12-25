import { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers";

const NextAuthOptions = {
  session: {
    strategy: 'jwt'
  }
}