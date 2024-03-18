import React from "react";
import Container from "@/components/UI/Container";
import Link from "next/link";
import MainNav from "@/components/MainNav";
import getCategories from "@/actions/get-categories";
import NavBarActions from "@/components/NavBarActions";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 items-center flex">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Dia! Store</p>
          </Link>
          <MainNav data={categories} />
          <NavBarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
