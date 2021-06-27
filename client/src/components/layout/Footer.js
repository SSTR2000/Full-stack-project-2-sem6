import React from "react";

export default function Footer() {
  return (
    <footer className=" text-white mt-5 pd-4 text-center" style={{backgroundColor:"black"}}>
      Copyright &copy; {new Date().getFullYear()} <a href="https://github.com/starkblaze01/Hostel-Management#team-members">Team Full Stack</a>
    </footer>
  );
}
