import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-y-10">

          {/* LEFT */}
          <div className="w-full xl:w-4/12 lg:w-5/12">
            <div className="error-content">
              {/* SVG */}
              <svg width="216" height="130" viewBox="0 0 216 130" xmlns="http://www.w3.org/2000/svg"><path d="M206.582 87.3164V1.44519H184.871L148.688 87.3164V105.465H187.049V128.521H206.582V105.465H215.996V87.3164H206.582ZM187.049 87.3164H166.947L187.049 39.5579V87.3164Z"></path><path d="M80.0781 98.2394C80.1116 108.322 82.6914 116.119 87.851 121.665C92.977 127.177 100.348 129.933 109.963 130C110.064 130 110.164 130 110.298 130C120.081 130 127.553 127.21 132.746 121.631C137.939 116.052 140.519 108.188 140.519 98.0378V31.9623C140.519 21.7787 137.939 13.9142 132.746 8.36867C127.553 2.78956 120.081 0 110.298 0C100.515 0 93.044 2.78956 87.851 8.36867C82.6579 13.9478 80.0781 21.8123 80.0781 31.9623V98.0378C80.0781 98.105 80.0781 98.1722 80.0781 98.2394ZM100.013 30.6851C100.013 22.3501 103.464 18.1489 110.332 18.1489C117.2 18.1489 120.651 22.3164 120.651 30.6851V99.3149C120.651 107.65 117.2 111.851 110.332 111.851C103.464 111.851 100.013 107.684 100.013 99.3149V30.6851Z"></path><path d="M57.9277 128.555V105.499H67.3423V87.3501H57.9277V1.44519H36.1839L27.5065 22.0476L0 87.3164V105.465H38.3616V128.521H57.9277V128.555ZM18.293 87.3164L38.1941 39.9948L38.3616 40.2637V87.3164H18.293Z"></path></svg>

              <h2 className="mt-6 text-2xl font-semibold">
                Oops! Looks like you’ve taken a wrong turn.
              </h2>

              <p className="mt-3 text-gray-500">
                The page you’re looking for doesn’t exist. Let’s get you back on track!
              </p>

              <Link href="/" className="primary-btn1 two black-bg mt-6 inline-block">
                <span className="flex items-center gap-2">
                  Go to Homepage
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:block w-full lg:w-6/12">
            <div className="error-img-wrap relative">
              <div className="error-img">
                <img
                  src="/assets/img/error-page-img.webp"
                  alt="error"
                  className="w-full h-auto"
                />
              </div>

              <img
                src="/assets/img/error-page-img-vector.webp"
                alt="vector"
                className="vector absolute top-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom vectors */}
      <img
        src="/assets/img/error-page-vector1.svg"
        alt=""
        className="vector1 w-full"
      />
      <img
        src="/assets/img/error-page-vector2.svg"
        alt=""
        className="vector2 w-full"
      />
    </div>
  );
}