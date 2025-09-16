import Image from 'next/image';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="bg-dark-900 text-light-100 flex flex-col justify-center px-8 py-12 lg:w-1/2 lg:px-16">
        <div className="max-w-md mx-auto lg:mx-0">
          <div className="mb-8">
            <Image
              src="/logo.svg"
              alt="EcomCrypto"
              width={120}
              height={40}
              className="h-8 w-auto filter invert"
            />
          </div>
          
          <h1 className="text-heading-2 font-jost text-light-100 mb-6">
            Just Do It
          </h1>
          
          <p className="text-lead text-dark-500 mb-8">
            Join millions of athletes and fitness enthusiasts who trust 
            EcomCrypto for their performance needs.
          </p>
          
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-light-100 rounded-full"></div>
            <div className="w-3 h-3 bg-dark-500 rounded-full"></div>
            <div className="w-3 h-3 bg-dark-500 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="bg-light-100 flex flex-col justify-center px-8 py-12 lg:w-1/2 lg:px-16">
        <div className="max-w-md mx-auto w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
