import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutCompany() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-16">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About AGRES.ID
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              AGRES.ID provides an easy and secure online shopping experience.
            </p>
          </header>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex-1 lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Our Products
                </h2>
                <p className="text-gray-700 mb-6">
                  Offering IT products from trusted brands. Our categories include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Computers & Laptops</li>
                  <li>Computer Accessories</li>
                  <li>Office Equipment</li>
                </ul>
              </div>
              <div className="flex-1 lg:w-1/2 mt-8 lg:mt-0">
                <img
                  src="https://image.pollinations.ai/prompt/Computer-Shop-Interior?model=flux-pro&width=1200&height=800&nologo=true"
                  alt="AGRES.ID Store"
                  className="rounded-lg shadow-lg w-full object-cover h-72 lg:h-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.agres.id/informasi#aboutus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
