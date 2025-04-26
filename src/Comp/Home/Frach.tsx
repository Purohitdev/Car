import { Building, Wallet, CheckCircle } from "lucide-react";

export default function FranchiseSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-gray-50 rounded-3xl shadow-xl p-10 md:p-16 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold">
          Get Your Own <span className="text-red-500">Mechanique</span> workshop
          
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join one of India's fastest growing automobile service brands and build your own success story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="flex flex-col items-center md:items-start">
            <CheckCircle className="h-10 w-10 text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Benefits</h3>
            <p className="text-gray-600">
              Be a part of a trusted brand with high growth opportunities and operational support.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <Building className="h-10 w-10 text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Requirements</h3>
            <p className="text-gray-600">
              Minimum <span className="font-medium">2000 sq.ft</span> dedicated workshop space required for setup.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <Wallet className="h-10 w-10 text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Investment</h3>
            <p className="text-gray-600">
              Own your Mechanique workshop for just <span className="font-bold text-black">₹9 Lakhs</span>.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition">
            Apply for Franchise
          </button>
        </div>
      </div>
    </section>
  );
}
