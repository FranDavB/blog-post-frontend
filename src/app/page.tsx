"use client"

import MainComponent from "@/components/mainComponent";
import NavBar from "@/components/navbar";
import AcercaDeComponent from "@/components/acercaDeComponent";
import PostsComponent from "@/components/postsComponent";

export default function Home() {

  return (
    <main className="bg-cover bg-fixed h-screen" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="py-10 px-14">
        <NavBar />
        <section className="flex h-[75dvh] max-w-[40dvw]">
          <MainComponent />
        </section>
      </div>
      <section className="flex items-center bg-gray-100 h-[75dvh]" id="acercaDeSection">
        <AcercaDeComponent />
      </section>
      <section className=" h-[75dvh] p-5" id="postsSection">
        <PostsComponent />
      </section>
    </main>
  );
}
