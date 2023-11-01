import Image from "next/image";
import C1text from "./C1text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div className="chapter-box">
          XXisp:
          <></> <br></br>Chapter 1
        </div>
       <C1text/>
        <div className="buttonchapter">
          <button>
            Chapter 2 <br></br>coming soon...
          </button>
        </div>
      </div>
    </main>
  );
}
