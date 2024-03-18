import React from "react";

const Footer = ({ storeName }: { storeName: string }) => {
  return (
    <div className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          {/* TODO:  */}
          &copy; 2024 {storeName}, Inc All Rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
