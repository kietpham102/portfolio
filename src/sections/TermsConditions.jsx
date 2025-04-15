import React from "react";
import NavBar from "../components/NavBar";
import Footer from "./Footer";

const TermsConditions = () => {
  return (
    <>
      <NavBar />
      <div className="pt-32 pb-20 px-5 md:px-20 text-white-50">
        <h1 className="text-4xl font-bold mb-8 text-white">Terms & Conditions</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Kiet Pham's portfolio website. These Terms & Conditions govern your use of this website and by accessing this website, you agree to these terms and conditions in full.
          </p>
          <p className="mb-4">
            If you disagree with any part of these terms and conditions, please do not use this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Intellectual Property Rights</h2>
          <p className="mb-4">
            Unless otherwise stated, I own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
          </p>
          <p className="mb-4">
            You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Restrictions</h2>
          <p className="mb-4">You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Publishing any website material in any other media</li>
            <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
            <li>Publicly performing and/or showing any website material</li>
            <li>Using this website in any way that is or may be damaging to this website</li>
            <li>Using this website in any way that impacts user access to this website</li>
            <li>Using this website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the website, or to any person or business entity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Your Content</h2>
          <p className="mb-4">
            In these terms and conditions, "your content" means any audio, video, text, images, or other material you choose to display on this website. By displaying your content, you grant me a non-exclusive, worldwide, irrevocable, royalty-free license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
          </p>
          <p className="mb-4">
            Your content must be your own and must not be infringing on any third party's rights. I reserve the right to remove any of your content from this website at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. No Warranties</h2>
          <p className="mb-4">
            This website is provided "as is," with all faults, and I express no representations or warranties, of any kind related to this website or the materials contained on this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">6. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall I be held liable for anything arising out of or in any way connected with your use of this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">7. Indemnification</h2>
          <p className="mb-4">
            You hereby indemnify to the fullest extent me from and against any and all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">8. Severability</h2>
          <p className="mb-4">
            If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">9. Variation of Terms</h2>
          <p className="mb-4">
            I am permitted to revise these terms at any time as I see fit, and by using this website you are expected to review these terms on a regular basis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">10. Entire Agreement</h2>
          <p className="mb-4">
            These terms constitute the entire agreement between me and you in relation to your use of this website, and supersede all prior agreements and understandings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">11. Governing Law & Jurisdiction</h2>
          <p className="mb-4">
            These terms will be governed by and interpreted in accordance with the laws of Vietnam, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Vietnam for the resolution of any disputes.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditions;
