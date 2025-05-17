'use client';

import { useSearchParams } from 'next/navigation';
import SignInForm from './SignInForm';

export default function SignInWithParams() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  return <SignInForm callbackUrl={callbackUrl} />;
} 