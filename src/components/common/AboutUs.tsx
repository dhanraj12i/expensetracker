import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-2 my-3">
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            About Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to <strong>Expense Tracker</strong>, your go-to solution for
            managing your finances efficiently. Our app is designed to help you
            track expenses, set budgets, and take control of your financial
            health.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            With Expense Tracker, you can easily monitor your spending habits,
            categorize expenses, and gain valuable insights into your financial
            behavior. Our mission is to make financial management simple,
            intuitive, and stress-free for everyone.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you are saving for a big purchase, paying off debt, or just
            trying to get a better grasp on where your money goes, Expense
            Tracker is here to assist you every step of the way.
          </p>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Meet the Team
          </h3>
          <div className="flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-md p-6 w-[600px]">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Dhanraj Patil
              </h4>
              <p className="text-gray-600">Lead Developer, UX/UI Designer</p>
              <p className="text-gray-700 mt-2">
                Dhanraj Patil is a multifaceted professional with expertise in
                finance, software development, and design. As the Founder & CEO,
                he leads the company’s strategic vision. He also serves as the
                Lead Developer, specializing in building robust financial
                platforms, and as a UX/UI Designer, crafting user-friendly and
                visually appealing interfaces.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
